<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Fora — Your community deserves its own home</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fragment+Mono&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
</head>
<body class="bg-black text-white antialiased overflow-x-hidden" style="font-family:'Inter',sans-serif;">

<!-- NAV -->
<header id="nav" class="fixed top-0 inset-x-0 z-50 transition-all duration-500" style="transform:translateY(-36px);opacity:0;">
  <div class="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-10">
    <div id="navbar" class="flex items-center justify-between h-16 md:h-[72px] rounded-2xl px-3 md:px-4 transition-all duration-500" style="background:transparent;border:1px solid transparent;">
      <a href="#hero" class="flex items-center gap-2.5 shrink-0">
        <span class="grid place-items-center h-7 w-7 rounded-lg" style="background:linear-gradient(145deg,#fff3f0,#d39794);">
          <iconify-icon icon="solar:users-group-rounded-linear" width="16" style="color:#0a0a0a;"></iconify-icon>
        </span>
        <span class="text-base font-semibold tracking-tight" style="color:#fff3f0;">Fora.</span>
      </a>

      <nav class="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2" aria-label="Primary">
        <a href="#about" class="text-sm transition-colors hover:text-[#fff3f0]" style="color:rgba(255,255,255,0.65);">About</a>
        <a href="#features" class="text-sm transition-colors hover:text-[#fff3f0]" style="color:rgba(255,255,255,0.65);">Features</a>
        <a href="#pricing" class="text-sm transition-colors hover:text-[#fff3f0]" style="color:rgba(255,255,255,0.65);">Pricing</a>
        <a href="#faq" class="text-sm transition-colors hover:text-[#fff3f0]" style="color:rgba(255,255,255,0.65);">Blog</a>
        <a href="#cta" class="text-sm transition-colors hover:text-[#fff3f0]" style="color:rgba(255,255,255,0.65);">Contact</a>
      </nav>

      <div class="hidden md:flex items-center gap-5">
        <a href="#cta" class="text-sm transition-colors hover:text-[#fff3f0]" style="color:rgba(255,255,255,0.65);">Login</a>
        <a href="#cta" class="inline-flex items-center h-10 px-5 rounded-full text-sm font-medium transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60" style="background:rgba(255,255,255,0.92);color:#000;">Get started</a>
      </div>

      <button id="menuBtn" aria-label="Open menu" aria-expanded="false" class="md:hidden grid place-items-center h-10 w-10 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60" style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.1);">
        <iconify-icon icon="solar:hamburger-menu-linear" width="20" style="color:#fff3f0;"></iconify-icon>
      </button>
    </div>

    <div id="mobileMenu" class="md:hidden hidden mt-2 rounded-2xl p-4 backdrop-blur-xl" style="background:rgba(15,15,15,0.92);border:1px solid rgba(255,255,255,0.1);">
      <nav class="flex flex-col gap-1" aria-label="Mobile">
        <a href="#about" class="px-3 py-2.5 rounded-lg text-sm hover:bg-white/5" style="color:rgba(255,255,255,0.75);">About</a>
        <a href="#features" class="px-3 py-2.5 rounded-lg text-sm hover:bg-white/5" style="color:rgba(255,255,255,0.75);">Features</a>
        <a href="#pricing" class="px-3 py-2.5 rounded-lg text-sm hover:bg-white/5" style="color:rgba(255,255,255,0.75);">Pricing</a>
        <a href="#faq" class="px-3 py-2.5 rounded-lg text-sm hover:bg-white/5" style="color:rgba(255,255,255,0.75);">FAQ</a>
        <a href="#cta" class="mt-2 inline-flex justify-center items-center h-11 rounded-full text-sm font-medium" style="background:rgba(255,255,255,0.92);color:#000;">Get started</a>
      </nav>
    </div>
  </div>
</header>

<main>
  <!-- HERO -->
  <section id="hero" class="relative overflow-hidden pt-32 sm:pt-40 lg:pt-44">
    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_3840w.jpg" alt="" aria-hidden="true" class="absolute inset-0 h-full w-full object-cover" style="opacity:0.55;">
    <div class="absolute inset-0" aria-hidden="true" style="background:linear-gradient(180deg,#000 0%,rgba(0,0,0,0.72) 28%,rgba(0,0,0,0.55) 55%,rgba(0,0,0,0.85) 88%,#000 100%);"></div>
    <div class="absolute inset-x-0 bottom-0 h-40" aria-hidden="true" style="background:linear-gradient(180deg,rgba(0,0,0,0) 0%,#000 92%);"></div>

    <div class="relative mx-auto max-w-[1100px] px-5 sm:px-8 text-center">
      <a href="#about" data-fade class="inline-flex items-center gap-2 rounded-full px-4 py-1.5 backdrop-blur-sm" style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);">
        <span class="h-1.5 w-1.5 rounded-full" style="background:#d39794;"></span>
        <span class="text-xs sm:text-sm" style="color:rgba(255,255,255,0.8);">Community platform for creators</span>
      </a>

      <h1 data-reveal class="mt-7 text-4xl sm:text-5xl lg:text-[4.25rem] font-semibold tracking-tight leading-[1.08]" style="color:#fff3f0;">
        <span style="color:rgba(255,255,255,0.45);">Your community</span> deserves its own home.
      </h1>

      <p data-fade class="mt-6 mx-auto max-w-xl text-base sm:text-lg leading-relaxed" style="color:rgba(255,255,255,0.65);">
        Give creators, educators and coaches a fully branded space with courses, events, discussions and members — all under one roof.
      </p>

      <div data-fade class="mt-9 flex items-center justify-center gap-3">
        <a href="#pricing" class="inline-flex items-center gap-2 h-12 px-7 rounded-full text-sm font-medium transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70" style="background:#fff3f0;color:#000;">
          Get started free
          <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
        </a>
        <a href="#features" class="inline-flex items-center h-12 px-6 rounded-full text-sm transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);color:#fff3f0;">See how it works</a>
      </div>
    </div>

    <!-- APP MOCKUP -->
    <div data-fade class="relative mx-auto mt-16 sm:mt-20 max-w-[1080px] px-5 sm:px-8">
      <div class="rounded-t-[24px] p-2 sm:p-3 backdrop-blur-xl" style="background:linear-gradient(rgba(23,23,23,0.9),rgba(23,23,23,0.9)) padding-box, linear-gradient(150deg,rgba(255,255,255,0.28),rgba(255,255,255,0.04) 45%,rgba(211,151,148,0.2)) border-box;border:1px solid transparent;">
        <div class="flex gap-3 rounded-[18px] overflow-hidden" style="background:rgba(10,10,10,0.7);">
          <aside class="hidden sm:flex w-[200px] shrink-0 flex-col gap-1 p-3">
            <div class="flex items-center gap-2 px-2 py-2 mb-2">
              <span class="h-6 w-6 rounded-md grid place-items-center" style="background:rgba(255,255,255,0.1);">
                <iconify-icon icon="solar:widget-5-linear" width="14" style="color:rgba(255,255,255,0.8);"></iconify-icon>
              </span>
              <span class="text-xs" style="color:rgba(255,255,255,0.5);">Workspace</span>
            </div>
            <div class="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs" style="background:rgba(255,255,255,0.07);color:#fff3f0;"><iconify-icon icon="solar:home-smile-linear" width="16"></iconify-icon>Overview</div>
            <div class="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs" style="color:rgba(255,255,255,0.55);"><iconify-icon icon="solar:chat-round-line-linear" width="16"></iconify-icon>Chat</div>
            <div class="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs" style="color:rgba(255,255,255,0.55);"><iconify-icon icon="solar:chart-2-linear" width="16"></iconify-icon>Analytics</div>
            <div class="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs" style="color:rgba(255,255,255,0.55);"><iconify-icon icon="solar:notebook-linear" width="16"></iconify-icon>Courses</div>
            <div class="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs" style="color:rgba(255,255,255,0.55);"><iconify-icon icon="solar:calendar-linear" width="16"></iconify-icon>Events</div>
            <div class="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs" style="color:rgba(255,255,255,0.55);"><iconify-icon icon="solar:users-group-two-rounded-linear" width="16"></iconify-icon>Members</div>
            <div class="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs" style="color:rgba(255,255,255,0.55);"><iconify-icon icon="solar:cup-star-linear" width="16"></iconify-icon>Leaderboard</div>
          </aside>

          <div class="flex-1 p-3 sm:p-4">
            <div class="relative rounded-2xl overflow-hidden" style="border:1px solid rgba(255,255,255,0.08);">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e534354d-c5f2-4399-a1d9-2f50338e8c47_1600w.jpg" alt="" aria-hidden="true" class="h-28 sm:h-36 w-full object-cover">
              <div class="absolute inset-0" aria-hidden="true" style="background:linear-gradient(180deg,rgba(23,114,117,0.35),rgba(10,10,10,0.85));"></div>
              <div class="relative px-4 sm:px-6 -mt-12 sm:-mt-14 pb-5">
                <div class="grid place-items-center h-11 w-11 rounded-xl text-sm font-semibold" style="background:#fff3f0;color:#101010;">S</div>
                <h3 class="mt-3 text-base sm:text-lg font-semibold tracking-tight" style="color:#fff3f0;">Strong By Ava</h3>
                <div class="mt-3 flex flex-wrap items-center gap-3">
                  <div class="flex -space-x-2">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_1600w.jpg" alt="Member avatar" class="h-6 w-6 rounded-full object-cover" style="border:1px solid rgba(0,0,0,0.6);">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f5668c5-fc4a-44e0-bc5e-a664189d3c31_1600w.jpg" alt="Member avatar" class="h-6 w-6 rounded-full object-cover" style="border:1px solid rgba(0,0,0,0.6);">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eca707cc-a5b7-439a-b4fd-247f6106c2e1_1600w.jpg" alt="Member avatar" class="h-6 w-6 rounded-full object-cover" style="border:1px solid rgba(0,0,0,0.6);">
                  </div>
                  <span class="text-xs" style="color:rgba(255,255,255,0.6);">847 members</span>
                  <span class="ml-auto inline-flex items-center h-8 px-4 rounded-full text-xs font-medium" style="background:#fff3f0;color:#000;">Join now</span>
                </div>
                <ul class="mt-4 space-y-1.5 text-xs" style="color:rgba(255,255,255,0.55);">
                  <li>→ Weekly strength programming and form reviews</li>
                  <li>→ Live coaching calls twice a month</li>
                  <li>→ A member directory that actually gets used</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- INTRO -->
  <section id="about" class="relative py-24 sm:py-32 lg:py-40">
    <div class="mx-auto max-w-[1100px] px-5 sm:px-8">
      <div data-fade class="inline-flex items-center gap-2 rounded-full px-4 py-1.5" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);">
        <span class="h-1.5 w-1.5 rounded-full" style="background:#fff3f0;opacity:0.5;"></span>
        <span class="text-xs sm:text-sm" style="color:rgba(255,255,255,0.65);">Intro</span>
      </div>
      <div class="mt-10 sm:mt-14 space-y-10 sm:space-y-14 max-w-3xl">
        <p data-intro class="text-xl sm:text-2xl lg:text-[1.65rem] font-medium leading-snug tracking-tight transition-opacity duration-500" style="color:#fff3f0;opacity:0.28;">
          Fora is a community platform built for creators, educators and coaches. Courses, events, discussions and a member directory — one place, one login, one URL.
        </p>
        <p data-intro class="text-xl sm:text-2xl lg:text-[1.65rem] font-medium leading-snug tracking-tight transition-opacity duration-500" style="color:#fff3f0;opacity:0.28;">
          That URL is yours. Every community runs on its own subdomain or a custom domain you own. Members sign up and sign in inside your branded space — they never see anyone else's name.
        </p>
        <p data-intro class="text-xl sm:text-2xl lg:text-[1.65rem] font-medium leading-snug tracking-tight transition-opacity duration-500" style="color:#fff3f0;opacity:0.28;">
          You set it up in minutes. Routing, auth and infrastructure stay in the background. What your members experience is entirely yours.
        </p>
      </div>
    </div>
  </section>

  <!-- CORE FEATURES -->
  <section id="features" class="relative py-20 sm:py-28">
    <div class="mx-auto max-w-[1280px] px-5 sm:px-8">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">
        <div>
          <div data-fade class="inline-flex items-center gap-2 rounded-full px-4 py-1.5" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);">
            <span class="h-1.5 w-1.5 rounded-full" style="background:#fff3f0;opacity:0.5;"></span>
            <span class="text-xs sm:text-sm" style="color:rgba(255,255,255,0.8);">Core features</span>
          </div>
          <h2 data-reveal class="mt-6 text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold tracking-tight leading-[1.1]" style="color:#fff3f0;">
            One platform to run <span style="color:rgba(255,255,255,0.45);">your entire community.</span>
          </h2>
        </div>
        <p data-fade class="text-sm sm:text-base leading-relaxed lg:pb-2" style="color:rgba(255,255,255,0.6);">
          Bring courses, events, discussions and members into one space, so you stop switching between tools and start spending time with the people who showed up.
        </p>
      </div>

      <!-- Tabs -->
      <div class="mt-12 sm:mt-16">
        <div role="tablist" aria-label="Product areas" id="tablist" class="inline-flex flex-wrap gap-1 p-1.5 rounded-full" style="background:rgba(15,15,15,0.85);border:1px solid rgba(255,255,255,0.08);"></div>

        <div class="relative mt-6 rounded-[24px] overflow-hidden" style="background:linear-gradient(rgba(10,10,10,0.9),rgba(10,10,10,0.9)) padding-box, linear-gradient(160deg,rgba(255,255,255,0.24),rgba(255,255,255,0.03) 50%,rgba(23,114,117,0.25)) border-box;border:1px solid transparent;">
          <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d14dc069-558a-4c51-8aad-5cc237f9b61d_3840w.jpg" alt="" aria-hidden="true" class="absolute inset-0 h-full w-full object-cover" style="opacity:0.5;">
          <div class="absolute inset-0" aria-hidden="true" style="background:linear-gradient(180deg,rgba(0,0,0,0.35),rgba(0,0,0,0.8));"></div>
          <div id="panelWrap" class="relative px-4 sm:px-10 lg:px-20 pt-10 sm:pt-16 pb-0"></div>
        </div>

        <div class="mt-7 flex items-center justify-center gap-5">
          <button id="prevTab" aria-label="Previous feature" class="grid place-items-center h-11 w-11 rounded-full transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60" style="background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.12);">
            <iconify-icon icon="solar:arrow-left-linear" width="18" style="color:#fff3f0;"></iconify-icon>
          </button>
          <p id="caption" aria-live="polite" class="text-center text-xs sm:text-sm max-w-xs sm:max-w-md" style="color:rgba(255,255,255,0.7);"></p>
          <button id="nextTab" aria-label="Next feature" class="grid place-items-center h-11 w-11 rounded-full transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60" style="background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.12);">
            <iconify-icon icon="solar:arrow-right-linear" width="18" style="color:#fff3f0;"></iconify-icon>
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- WHAT YOU GET -->
  <section id="what-you-get" class="relative py-20 sm:py-28 lg:py-36">
    <div class="mx-auto max-w-[1280px] px-5 sm:px-8">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">
        <div>
          <div data-fade class="inline-flex items-center gap-2 rounded-full px-4 py-1.5" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);">
            <span class="h-1.5 w-1.5 rounded-full" style="background:#fff3f0;opacity:0.5;"></span>
            <span class="text-xs sm:text-sm" style="color:rgba(255,255,255,0.8);">What you get</span>
          </div>
          <h2 data-reveal class="mt-6 text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold tracking-tight leading-[1.1]" style="color:#fff3f0;">
            Set up once. <span style="color:rgba(255,255,255,0.45);">Run it the way you want.</span>
          </h2>
        </div>
        <p data-fade class="text-sm sm:text-base leading-relaxed lg:pb-2" style="color:rgba(255,255,255,0.6);">
          Built so you spend time with your community, not configuring it. From your first setting to your hundredth member, the platform stays out of the way.
        </p>
      </div>

      <div class="mt-12 sm:mt-16 space-y-5">
        <!-- Card 1 -->
        <article data-fade class="rounded-[24px] overflow-hidden" style="background:linear-gradient(rgba(15,15,15,0.9),rgba(15,15,15,0.9)) padding-box, linear-gradient(140deg,rgba(255,255,255,0.22),rgba(255,255,255,0.03) 45%,rgba(211,151,148,0.2)) border-box;border:1px solid transparent;">
          <div class="grid lg:grid-cols-2">
            <div class="p-7 sm:p-10 lg:p-12 flex flex-col">
              <span class="text-xs uppercase tracking-[0.18em]" style="font-family:'Fragment Mono',monospace;color:#7a7a7a;">Your front door</span>
              <h3 class="mt-5 text-xl sm:text-2xl font-semibold tracking-tight leading-snug" style="color:#fff3f0;">A community overview page that sells itself.</h3>
              <p class="mt-4 text-sm sm:text-base leading-relaxed" style="color:rgba(255,255,255,0.6);">Customise your hero with a static colour or animated gradient. Add a headline, a description and member avatars. Your overview page is the first thing a visitor sees — make it yours.</p>
              <div class="mt-auto pt-8 flex items-center gap-2.5">
                <iconify-icon icon="solar:check-circle-linear" width="18" style="color:#d39794;"></iconify-icon>
                <span class="text-xs sm:text-sm" style="color:rgba(255,255,255,0.55);">First impressions that convert.</span>
              </div>
            </div>
            <div class="relative m-3 lg:m-4 rounded-[18px] overflow-hidden min-h-[260px] sm:min-h-[320px]" style="border:1px solid rgba(255,255,255,0.08);">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" alt="Community overview page preview on a warm gradient backdrop" class="absolute inset-0 h-full w-full object-cover">
              <div class="absolute inset-0" aria-hidden="true" style="background:linear-gradient(180deg,rgba(0,0,0,0.15),rgba(0,0,0,0.7));"></div>
              <div class="absolute inset-x-5 bottom-5 sm:inset-x-8 sm:bottom-8 rounded-2xl p-4 sm:p-5 backdrop-blur-xl" style="background:rgba(15,15,15,0.82);border:1px solid rgba(255,255,255,0.12);">
                <div class="flex items-center gap-3">
                  <span class="grid place-items-center h-9 w-9 rounded-lg text-xs font-semibold" style="background:#fff3f0;color:#101010;">D</span>
                  <div>
                    <p class="text-sm font-medium" style="color:#fff3f0;">DesignLab</p>
                    <p class="text-xs" style="color:#7a7a7a;">designlab.community</p>
                  </div>
                  <span class="ml-auto inline-flex items-center h-8 px-4 rounded-full text-xs font-medium" style="background:#fff3f0;color:#000;">Join now</span>
                </div>
                <div class="mt-4 flex items-center gap-3">
                  <div class="flex -space-x-2">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/77415a2e-dcbc-4748-a29d-fced4821881a_1600w.jpg" alt="" aria-hidden="true" class="h-6 w-6 rounded-full object-cover">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c92852bb-a510-405a-85ab-ffa0fde136a4_1600w.jpg" alt="" aria-hidden="true" class="h-6 w-6 rounded-full object-cover">
                  </div>
                  <span class="text-xs" style="color:rgba(255,255,255,0.6);">305 members</span>
                </div>
              </div>
            </div>
          </div>
        </article>

        <!-- Card 2 -->
        <article data-fade class="rounded-[24px] overflow-hidden" style="background:linear-gradient(rgba(15,15,15,0.9),rgba(15,15,15,0.9)) padding-box, linear-gradient(220deg,rgba(255,255,255,0.22),rgba(255,255,255,0.03) 45%,rgba(23,114,117,0.25)) border-box;border:1px solid transparent;">
          <div class="grid lg:grid-cols-2">
            <div class="relative order-last lg:order-first m-3 lg:m-4 rounded-[18px] overflow-hidden min-h-[260px] sm:min-h-[320px] p-5 sm:p-7" style="background:rgba(23,23,23,0.7);border:1px solid rgba(255,255,255,0.08);">
              <p class="text-xs uppercase tracking-[0.18em]" style="font-family:'Fragment Mono',monospace;color:#7a7a7a;">Leaderboard</p>
              <div class="mt-4 space-y-2">
                <div class="flex items-center gap-3 rounded-xl px-3 py-2.5" style="background:rgba(255,255,255,0.07);">
                  <span class="text-xs w-4" style="color:#d39794;">1</span>
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eca707cc-a5b7-439a-b4fd-247f6106c2e1_1600w.jpg" alt="" aria-hidden="true" class="h-7 w-7 rounded-full object-cover">
                  <span class="text-sm" style="color:#fff3f0;">Marcus L.</span>
                  <span class="ml-auto text-xs" style="color:rgba(255,255,255,0.55);">1,284 pts</span>
                </div>
                <div class="flex items-center gap-3 rounded-xl px-3 py-2.5" style="background:rgba(255,255,255,0.04);">
                  <span class="text-xs w-4" style="color:#7a7a7a;">2</span>
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f5668c5-fc4a-44e0-bc5e-a664189d3c31_1600w.jpg" alt="" aria-hidden="true" class="h-7 w-7 rounded-full object-cover">
                  <span class="text-sm" style="color:#fff3f0;">Ines R.</span>
                  <span class="ml-auto text-xs" style="color:rgba(255,255,255,0.55);">1,102 pts</span>
                </div>
                <div class="flex items-center gap-3 rounded-xl px-3 py-2.5" style="background:rgba(255,255,255,0.04);">
                  <span class="text-xs w-4" style="color:#7a7a7a;">3</span>
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_1600w.jpg" alt="" aria-hidden="true" class="h-7 w-7 rounded-full object-cover">
                  <span class="text-sm" style="color:#fff3f0;">Theo B.</span>
                  <span class="ml-auto text-xs" style="color:rgba(255,255,255,0.55);">974 pts</span>
                </div>
                <div class="flex items-center gap-3 rounded-xl px-3 py-2.5" style="background:rgba(255,255,255,0.04);">
                  <span class="text-xs w-4" style="color:#7a7a7a;">4</span>
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c92852bb-a510-405a-85ab-ffa0fde136a4_1600w.jpg" alt="" aria-hidden="true" class="h-7 w-7 rounded-full object-cover">
                  <span class="text-sm" style="color:#fff3f0;">Noah K.</span>
                  <span class="ml-auto text-xs" style="color:rgba(255,255,255,0.55);">860 pts</span>
                </div>
              </div>
            </div>
            <div class="p-7 sm:p-10 lg:p-12 flex flex-col">
              <span class="text-xs uppercase tracking-[0.18em]" style="font-family:'Fragment Mono',monospace;color:#7a7a7a;">Friendly competition</span>
              <h3 class="mt-5 text-xl sm:text-2xl font-semibold tracking-tight leading-snug" style="color:#fff3f0;">A leaderboard your members actually check.</h3>
              <p class="mt-4 text-sm sm:text-base leading-relaxed" style="color:rgba(255,255,255,0.6);">Rankings based on posts, completions and activity — surfaced automatically. Your most engaged members get a reason to stay, and the quieter ones get a reason to show up.</p>
              <div class="mt-auto pt-8 flex items-center gap-2.5">
                <iconify-icon icon="solar:check-circle-linear" width="18" style="color:#d39794;"></iconify-icon>
                <span class="text-xs sm:text-sm" style="color:rgba(255,255,255,0.55);">Engagement that compounds over time.</span>
              </div>
            </div>
          </div>
        </article>

        <!-- Card 3 -->
        <article data-fade class="rounded-[24px] overflow-hidden" style="background:linear-gradient(rgba(15,15,15,0.9),rgba(15,15,15,0.9)) padding-box, linear-gradient(140deg,rgba(255,255,255,0.22),rgba(255,255,255,0.03) 45%,rgba(211,151,148,0.18)) border-box;border:1px solid transparent;">
          <div class="grid lg:grid-cols-2">
            <div class="p-7 sm:p-10 lg:p-12 flex flex-col">
              <span class="text-xs uppercase tracking-[0.18em]" style="font-family:'Fragment Mono',monospace;color:#7a7a7a;">Courses</span>
              <h3 class="mt-5 text-xl sm:text-2xl font-semibold tracking-tight leading-snug" style="color:#fff3f0;">Build your course the way you teach.</h3>
              <p class="mt-4 text-sm sm:text-base leading-relaxed" style="color:rgba(255,255,255,0.6);">Structure content into chapters and lessons in any order you want. Add your material, hit publish, and members start learning inside the community they already live in.</p>
              <div class="mt-auto pt-8 flex items-center gap-2.5">
                <iconify-icon icon="solar:check-circle-linear" width="18" style="color:#d39794;"></iconify-icon>
                <span class="text-xs sm:text-sm" style="color:rgba(255,255,255,0.55);">Courses that feel like yours, not a template.</span>
              </div>
            </div>
            <div class="relative m-3 lg:m-4 rounded-[18px] overflow-hidden min-h-[260px] sm:min-h-[320px]" style="border:1px solid rgba(255,255,255,0.08);">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7f78131e-65e9-49b2-aa1f-ccc33e28df9f_1600w.webp" alt="Course builder preview with chapters and lessons" class="absolute inset-0 h-full w-full object-cover" style="opacity:0.7;">
              <div class="absolute inset-0" aria-hidden="true" style="background:linear-gradient(180deg,rgba(0,0,0,0.3),rgba(0,0,0,0.82));"></div>
              <div class="absolute inset-x-5 bottom-5 sm:inset-x-8 sm:bottom-8 rounded-2xl p-4 sm:p-5 backdrop-blur-xl space-y-2" style="background:rgba(15,15,15,0.82);border:1px solid rgba(255,255,255,0.12);">
                <p class="text-sm font-medium" style="color:#fff3f0;">Foundations — Chapter 1</p>
                <div class="flex items-center gap-2 text-xs" style="color:rgba(255,255,255,0.6);"><iconify-icon icon="solar:play-circle-linear" width="16"></iconify-icon>Positioning your offer</div>
                <div class="flex items-center gap-2 text-xs" style="color:rgba(255,255,255,0.6);"><iconify-icon icon="solar:document-text-linear" width="16"></iconify-icon>Worksheet: your first cohort</div>
                <div class="h-1 rounded-full mt-3" style="background:rgba(255,255,255,0.12);">
                  <div class="h-1 rounded-full w-2/3" style="background:#fff3f0;"></div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- PRICING -->
  <section id="pricing" class="relative py-20 sm:py-28">
    <div class="mx-auto max-w-[1180px] px-5 sm:px-8">
      <div class="text-center max-w-2xl mx-auto">
        <div data-fade class="inline-flex items-center gap-2 rounded-full px-4 py-1.5" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);">
          <span class="h-1.5 w-1.5 rounded-full" style="background:#fff3f0;opacity:0.5;"></span>
          <span class="text-xs sm:text-sm" style="color:rgba(255,255,255,0.8);">Pricing</span>
        </div>
        <h2 data-reveal class="mt-6 text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold tracking-tight leading-[1.1]" style="color:#fff3f0;">Simple plans. <span style="color:rgba(255,255,255,0.45);">No surprises.</span></h2>
        <p data-fade class="mt-5 text-sm sm:text-base" style="color:rgba(255,255,255,0.6);">Start free, upgrade when your community does. Every plan includes your own domain.</p>
      </div>

      <div class="mt-14 grid md:grid-cols-3 gap-5">
        <div data-fade class="rounded-[20px] p-7 flex flex-col" style="background:linear-gradient(rgba(15,15,15,0.9),rgba(15,15,15,0.9)) padding-box, linear-gradient(160deg,rgba(255,255,255,0.16),rgba(255,255,255,0.03)) border-box;border:1px solid transparent;">
          <p class="text-xs uppercase tracking-[0.18em]" style="font-family:'Fragment Mono',monospace;color:#7a7a7a;">Starter</p>
          <p class="mt-5 text-4xl