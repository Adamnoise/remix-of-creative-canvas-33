import { describe, expect, it } from 'vitest';
import { resolveCloudEnv, readCloudEnv } from '../utils/cloudConfig';
import { cloudEndpointSummary, isCloudTierConfigured } from '../utils/supabaseTier';

const PROJECT_URL = 'https://yvwnchyedxkajtwwkkqd.supabase.co';
const FB = { url: 'https://fallback.example.supabase.co', anonKey: 'sb_publishable_fallback' };

describe('cloudConfig — feloldási sorrend', () => {
  it('a .env-et részesíti előnyben, ha az URL és a kulcs is érvényes (záró / levágva)', () => {
    expect(
      resolveCloudEnv(
        {
          VITE_SUPABASE_URL: ` ${PROJECT_URL}/ `,
          VITE_SUPABASE_PUBLISHABLE_KEY: 'sb_publishable_staging',
        },
        FB,
      ),
    ).toEqual({
        url: PROJECT_URL,
      anonKey: 'sb_publishable_staging',
      source: 'env',
    });
  });

  it('elfogadja a történeti VITE_SUPABASE_ANON_KEY nevet is', () => {
    const env = resolveCloudEnv(
      {
        VITE_SUPABASE_URL: PROJECT_URL,
        VITE_SUPABASE_PUBLISHABLE_KEY: '',
        VITE_SUPABASE_ANON_KEY: 'eyJlegacy-jwt-key',
      },
      FB,
    );
    expect(env).toMatchObject({ anonKey: 'eyJlegacy-jwt-key', source: 'env' });
  });

  it.each([
    ['hiányzó séma', 'staging.example.supabase.co'],
    ['üres URL', ''],
    ['szemét', 'nem-egy-url'],
    ['nem http protokoll', 'ftp://staging.example.supabase.co'],
  ])('érvénytelen vagy idegen env URL (%s) → null', (_label, url) => {
    expect(
      resolveCloudEnv({ VITE_SUPABASE_URL: url, VITE_SUPABASE_PUBLISHABLE_KEY: 'sb_publishable_key' }, FB),
    ).toBeNull();
  });

  it('csak whitespace kulcs → null, nem env', () => {
    expect(
      resolveCloudEnv(
        {
          VITE_SUPABASE_URL: 'https://staging.example.supabase.co',
          VITE_SUPABASE_PUBLISHABLE_KEY: '   ',
          VITE_SUPABASE_ANON_KEY: '',
        },
        FB,
      ),
    ).toBeNull();
  });

  it('idegen fallback konfigurációt sem használ', () => {
    expect(resolveCloudEnv({}, FB)).toBeNull();
    expect(resolveCloudEnv({}, { url: PROJECT_URL, anonKey: 'sb_publishable_fallback' })).toBeNull();
  });

  it('a futó app unconfigured marad kulcs nélkül', () => {
    const env = readCloudEnv();
    expect(env).toBeNull();
    expect(isCloudTierConfigured()).toBe(false);
    expect(cloudEndpointSummary()).toBeNull();
  });

  it('a feloldott konfiguráció a session alatt stabil és fagyasztott (cache)', () => {
    const first = readCloudEnv();
    expect(readCloudEnv()).toBe(first);
    expect(Object.isFrozen(first)).toBe(true);
  });
});
