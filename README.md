
# 🇺🇬 UGANDA AI AGENCY 2027 — CLAUDE PROJECT INSTRUCTIONS

> **Model**: `claude-haiku-4-5-20251001`  
> **Purpose**: Build & maintain a production-grade PWA (Progressive Web App) that serves as a personal AI Agency Command Center for a Ugandan entrepreneur building an AI Agency by 2027.

---

## PROJECT IDENTITY

This is not a demo. This is a **real operational tool** used daily by a Ugandan entrepreneur. Every feature must work perfectly on a **mobile Android/iOS home screen** as a PWA. Treat this like you are building for a real user whose business depends on it.

**Owner**: Uganda-based AI Agency founder  
**Goal**: Build Uganda's #1 AI Agency by December 2027  
**Daily use**: Habit tracking, milestone progress, win logging, automation status, motivation

---

## TECH STACK

```
Framework:     React 18 (Vite)
Styling:       Inline CSS + CSS-in-JS (no Tailwind, no external CSS frameworks)
Storage:       localStorage (persists across sessions on device)
Fonts:         Google Fonts — Bebas Neue (headers) + Syne (body) + JetBrains Mono (code/data)
Icons:         Emojis only (no icon libraries — keeps app lightweight for Uganda mobile data)
PWA:           manifest.json + service-worker.js (offline-first)
Deploy:        GitHub Pages or Netlify (free tier)
API calls:     Anthropic API via fetch() — model: claude-haiku-4-5-20251001
```

---

## CORE FEATURES TO BUILD / MAINTAIN

### 1. DASHBOARD TAB
- Real-time stats: habits done today, day streak, phase 1 progress
- Uganda flag header with sticky navigation
- Mission statement card
- Phase progress bars (3 phases: Seed → Grow → Agency Launch)

### 2. THE PLAN TAB  
- 3-phase roadmap with tick-off milestones (saved to localStorage)
- Phase 1: NOW – DEC 2025 (SEED) — 6 milestones
- Phase 2: JAN – DEC 2026 (GROW) — 7 milestones  
- Phase 3: JAN – DEC 2027 (AGENCY LAUNCH) — 7 milestones
- Progress bar per phase, percentage complete
- Milestone checkboxes persist across app restarts

### 3. TOOLS TAB
- 8 AI tools: ChatGPT, Claude AI, Make.com, Canva AI, n8n, Voiceflow, Notion AI, ElevenLabs
- Each tool has: P5-level simple explanation, agency use case, cost, learn time, 4 startup steps
- Visual tool cards with color-coded categories

### 4. GROWTH TAB
- 4 growth areas: Mindset, Skills, Network, Business
- Daily + weekly practice for each
- Resource list per area
- The METHOD — specific personal technique

### 5. DAILY TAB
- 9 daily habits with times (6:00 AM – 9:30 PM)
- Tap to check off habits — resets each new day
- Day streak counter (increments when ALL habits done)
- Daily journal textarea (auto-saved to localStorage by date key)
- Win Log: add today's win, stored history shown below

### 6. EARNINGS TAB
- 6 automations with ON/OFF toggle (saved to localStorage)
- Status types: active (green), build (yellow), planned (grey)
- Uganda-specific income strategy tips
- Golden Rule reminder banner

### 7. MOTIVATION (FIRE) TAB
- 6 motivation methods with descriptions
- Uganda mission banner
- "When you feel like quitting" message

---

## AI COACH FEATURE (ADD WITH CLAUDE HAIKU API)

Add an **AI Daily Coach** button on the DAILY tab. When tapped:

1. Collect current state: habits done today, streak, last journal entry, recent wins
2. Call Claude Haiku API with this system prompt:

```
You are a personal AI business coach for a Ugandan entrepreneur building Uganda's first major AI Agency by 2027. 
You know their full plan: Phase 1 (seed, now-2025), Phase 2 (grow, 2026), Phase 3 (agency launch, 2027).
Their tools: ChatGPT, Claude, Make.com, Canva AI, n8n, Voiceflow, Notion AI, ElevenLabs.
Their daily habits run 6AM to 9:30PM.
Their mission: Change Uganda through AI by training people, solving real problems, generating income.

Given their progress today, give them:
1. ONE specific action to do RIGHT NOW (under 2 minutes) to move the agency forward
2. ONE sentence of real motivation — not generic, reference Uganda specifically
3. ONE warning: what to NOT do today that would slow progress

Be direct. Be brief. No fluff. Speak like a mentor who genuinely cares.
Maximum 150 words total.
```

3. Display the response in a styled card on the Daily tab
4. Cache the response for the day (don't re-call on same day)

---

## PWA REQUIREMENTS (CRITICAL FOR HOME SCREEN)

### manifest.json
```json
{
  "name": "Uganda AI Agency 2027",
  "short_name": "AI Agency",
  "description": "Your personal AI Agency command center — Uganda 2027",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0A0A0A",
  "theme_color": "#F5C518",
  "orientation": "portrait",
  "icons": [
    { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any maskable" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any maskable" }
  ]
}
```

### Icon Design
- Background: #0A0A0A (black)
- Foreground: Uganda flag colors (black/yellow/red) + "AI" text in Bebas Neue
- Simple, readable at 48x48px

### service-worker.js (offline first)
```javascript
const CACHE_NAME = 'uganda-ai-agency-v1';
const ASSETS = ['/', '/index.html', '/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
```

### Register in index.html
```html
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
  }
</script>
```

---

## DATA PERSISTENCE (localStorage SCHEMA)

```javascript
// Keys used:
'uga_milestones'          // { "1_0": true, "1_1": false, ... }
'uga_habits_YYYY-MM-DD'   // { "0": true, "1": false, ... } — per day
'uga_wins'                // [ { text, date, id }, ... ] max 50
'uga_autos'               // { "Content Posting Bot": true, ... }
'uga_streak'              // { count: 14 }
'uga_lastDate'            // { d: "2026-05-06" }
'uga_log_YYYY-MM-DD'      // { text: "..." }
'uga_coach_YYYY-MM-DD'    // { response: "..." } — cache AI coach daily
```

---

## DESIGN SYSTEM

```css
/* Colors */
--bg-primary:    #0A0A0A
--bg-card:       #141414
--bg-elevated:   #0F0F0F
--border:        #222222
--text-primary:  #E8E0D0
--text-muted:    #888888
--uganda-gold:   #F5C518   /* Primary accent — Uganda flag yellow */
--uganda-red:    #D4380D   /* Phase 2 color — Uganda flag red */
--uganda-green:  #389E0D   /* Phase 3 color */
--success:       #4CAF50
--purple:        #8B5CF6

/* Typography */
--font-display:  'Bebas Neue', sans-serif      /* ALL CAPS headers */
--font-body:     'Syne', sans-serif            /* Body text */
--font-mono:     'JetBrains Mono', monospace   /* Data, dates, labels */

/* Spacing */
--radius-sm: 6px
--radius-md: 8px  
--radius-lg: 12px
```

---

## CODING STANDARDS

- **No TypeScript** — plain JavaScript only (faster iteration)
- **No external component libraries** — pure React + CSS
- **Mobile-first** — everything must work on a 390px wide screen
- **No form tags** — use onClick/onChange handlers only
- **Persistent storage** — every user action must save to localStorage immediately
- **Lightweight** — total bundle under 200KB (Uganda mobile data costs money)
- **Offline capable** — core features work without internet
- **No purple gradients** — this is a Ugandan product, use Uganda flag colors

---

## FILE STRUCTURE

```
uganda-ai-agency-2027/
├── public/
│   ├── manifest.json
│   ├── service-worker.js
│   ├── icon-192.png
│   └── icon-512.png
├── src/
│   ├── App.jsx              ← Main app component
│   ├── data/
│   │   ├── phases.js        ← 3-phase plan data
│   │   ├── tools.js         ← 8 AI tools data
│   │   ├── habits.js        ← Daily habits schedule
│   │   ├── growth.js        ← Self-growth areas
│   │   ├── motivation.js    ← Fire methods
│   │   └── automations.js   ← Automation tracker
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Nav.jsx
│   │   ├── tabs/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Plan.jsx
│   │   │   ├── Tools.jsx
│   │   │   ├── Growth.jsx
│   │   │   ├── Daily.jsx
│   │   │   ├── Earnings.jsx
│   │   │   └── Motivation.jsx
│   │   └── AICoach.jsx      ← Claude Haiku integration
│   ├── hooks/
│   │   └── useStorage.js    ← localStorage helper hook
│   └── styles/
│       └── tokens.js        ← Design system variables
├── index.html
├── vite.config.js
├── package.json
└── CLAUDE.md                ← This file
```

---

## DEPLOYMENT (GitHub Pages)

```bash
# 1. Install dependencies
npm install

# 2. Build
npm run build

# 3. Deploy to GitHub Pages
npm install -D gh-pages
# Add to package.json scripts:
# "deploy": "gh-pages -d dist"
npm run deploy
```

**After deploy**: Visit site on mobile → Chrome menu → "Add to Home Screen" → it installs as a native-looking app on your wallpaper screen.

---

## CLAUDE HAIKU API INTEGRATION

```javascript
// src/components/AICoach.jsx
const getCoachAdvice = async (habitsDone, streak, recentWins, journalEntry) => {
  const todayKey = new Date().toISOString().slice(0, 10);
  const cached = localStorage.getItem(`uga_coach_${todayKey}`);
  if (cached) return JSON.parse(cached).response;

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': import.meta.env.VITE_ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 300,
      system: `You are a personal AI business coach for a Ugandan entrepreneur building Uganda's first major AI Agency by 2027. Be direct, brief, Uganda-specific. Maximum 150 words.`,
      messages: [{
        role: 'user',
        content: `My progress today:
- Habits done: ${habitsDone}/9
- Day streak: ${streak} days
- Recent wins: ${recentWins.slice(0,3).map(w => w.text).join(', ') || 'none yet'}
- Journal: ${journalEntry || 'nothing written yet'}

Give me: 1 action RIGHT NOW, 1 motivation sentence, 1 warning.`
      }]
    })
  });

  const data = await response.json();
  const text = data.content[0].text;
  localStorage.setItem(`uga_coach_${todayKey}`, JSON.stringify({ response: text }));
  return text;
};
```

---

## ENVIRONMENT VARIABLES

Create `.env` file (never commit to GitHub):
```
VITE_ANTHROPIC_API_KEY=your_api_key_here
```

For GitHub Pages deployment, add as a GitHub Secret:
- Go to repo Settings → Secrets → Actions → New secret
- Name: `VITE_ANTHROPIC_API_KEY`

---

## WHEN CLAUDE HELPS WITH THIS PROJECT

1. **Always mobile-first** — test mentally at 390px width
2. **Always save to localStorage** — no data should be lost on refresh
3. **Always use Uganda design system** — gold/red/green palette, Bebas Neue headers
4. **Never add dependencies** unless critical — keep bundle small
5. **The user is Ugandan** — examples, currency (UGX), and context must be Uganda-specific
6. **This is production** — not a prototype. Handle edge cases (empty state, first launch, no internet)
7. **Performance matters** — mobile data in Uganda is expensive. Optimize everything.

---

## CURRENT VERSION STATUS

| Feature | Status |
|---------|--------|
| Dashboard | ✅ Complete |
| Plan (3 phases, tick-off) | ✅ Complete |
| Tools (8 tools, P5 explanations) | ✅ Complete |
| Self Growth (4 areas) | ✅ Complete |
| Daily Habits + Journal + Win Log | ✅ Complete |
| Earnings / Automation Tracker | ✅ Complete |
| Motivation / Fire Methods | ✅ Complete |
| PWA Manifest + Service Worker | 🔧 To Build |
| AI Coach (Claude Haiku) | 🔧 To Build |
| Vite project structure | 🔧 To Build |
| Home screen icons | 🔧 To Build |
| GitHub Pages deploy | 🔧 To Build |

---

*Last updated: May 2026 | Built for Uganda 🇺🇬 | Powered by Claude Haiku 4.5*
