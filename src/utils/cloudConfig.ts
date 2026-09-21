/**
 * Public, read-only connection details for the optional cloud tier.
 *
 * The publishable key is a PUBLIC key: it is safe in client source because every
 * table it can reach sits behind RLS that grants `select` only. The service-role
 * key is a server-only secret and must never appear anywhere in client code.
 *
 * Resolution order:
 *  1. Vite environment (`.env` → VITE_SUPABASE_URL + VITE_SUPABASE_PUBLISHABLE_KEY,
 *     or the historical VITE_SUPABASE_ANON_KEY name)
 *  2. `null` — genuinely unconfigured when the URL or publishable key is absent.
 *
 * The browser must never silently switch projects. A publishable key is the only
 * credential accepted here; secret/service-role keys are rejected explicitly.
 */

const FALLBACK_URL = 'https://yvwnchyedxkajtwwkkqd.supabase.co';
const REQUIRED_PROJECT_REF = 'yvwnchyedxkajtwwkkqd';

export interface CloudEnv {
  url: string;
  anonKey: string;
  /** Where the credentials came from — surfaced in diagnostics. */
  source: 'env' | 'fallback';
}

function fromEnv(key: string): string {
  const env =
  (import.meta as unknown as {env?: Record<string, string | undefined>;}).env ?? {};
  return (env[key] ?? '').trim();
}

/**
 * Only a well-formed `http(s)://…` URL counts as "present". A blank or
 * malformed `.env` value (missing scheme, stray whitespace, a pasted
 * dashboard URL) must fail validation here rather than surface as a
 * confusing CORS/network error three layers down in `supabaseTier.ts`.
 */
function isValidHttpUrl(value: string): boolean {
  if (!value) return false;
  try {
    const parsed = new URL(value);
    return parsed.protocol === 'https:' || parsed.protocol === 'http:';
  } catch {
    return false;
  }
}

function isPublishableKey(value: string): boolean {
  const key = value.trim();
  if (!key || key.startsWith('sb_secret_') || key.startsWith('service_role')) return false;
  return key.startsWith('sb_publishable_') || key.startsWith('eyJ');
}

function isRequiredProject(value: string): boolean {
  try {
    return new URL(value).hostname === `${REQUIRED_PROJECT_REF}.supabase.co`;
  } catch {
    return false;
  }
}

/**
 * Pure resolution over an arbitrary env bag — the single source of truth for
 * the documented order, and the unit-testable seam (`import.meta.env` is
 * frozen at build time, so it cannot be stubbed in tests).
 */
export function resolveCloudEnv(
  env: Record<string, string | undefined>,
  fallback: { url: string; anonKey: string } = { url: FALLBACK_URL, anonKey: '' }
): CloudEnv | null {
  const envUrl = (env['VITE_SUPABASE_URL'] ?? '').trim();
  const envKey =
    (env['VITE_SUPABASE_PUBLISHABLE_KEY'] ?? '').trim() ||
    (env['VITE_SUPABASE_ANON_KEY'] ?? '').trim();


  if (isValidHttpUrl(envUrl) && isRequiredProject(envUrl) && isPublishableKey(envKey)) {
    return Object.freeze({
      url: envUrl.replace(/\/+$/, ''),
      anonKey: envKey,
      source: 'env' as const
    });
  }

  // Keep the argument for backwards-compatible tests/callers, but never use a
  // fallback credential or allow an alternate Supabase project in production.
  void fallback;
  return null;
}

// `.env` is baked in at build time by Vite, so the resolved config can never
// change within a running session — compute it once and reuse it.
let cachedEnv: CloudEnv | null | undefined;

export function readCloudEnv(): CloudEnv | null {
  if (cachedEnv !== undefined) return cachedEnv;
  cachedEnv = resolveCloudEnv({
    VITE_SUPABASE_URL: fromEnv('VITE_SUPABASE_URL'),
    VITE_SUPABASE_PUBLISHABLE_KEY: fromEnv('VITE_SUPABASE_PUBLISHABLE_KEY'),
    VITE_SUPABASE_ANON_KEY: fromEnv('VITE_SUPABASE_ANON_KEY')
  });
  return cachedEnv;
}

