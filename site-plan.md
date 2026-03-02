# Site Plan: Carla Burns — Personal Landing Page

> **Tone guide:** Warm, grounded, sparse, quietly literary. Not clinical. Not salesy.
> Words earn their place. Trust the reader.
> Match: https://www.carlaburnscounselling.com/
>
> **Key:** `[REAL]` = confirmed copy from existing site · `[NEW]` = new/updated info from brief · `[PLACEHOLDER]` = needs Carla's input

---

## Structure Overview

```
/ (single page)
  NAV
  HERO
  HOW
  PRACTICAL
  CONTACT
  FOOTER

/about (separate page)
  NAV
  ABOUT
  FOOTER
```

---

## 1. NAV

**Position:** fixed or sticky top
**Layout:** name left, links right

| Element | Copy | Notes |
|---|---|---|
| Brand / name | `Carla Burns` | Plain, no styling flourish. Clicks to top of page / home. |
| Link 1 | `How` | Anchors to #how section |
| Link 2 | `Practical` | Anchors to #practical section |
| Link 3 | `About` | Links to `/about` page |
| Link 4 | `Contact` | Anchors to #contact section |

**Design note:** No hamburger menu if avoidable. Links are few enough to sit inline on mobile with small type. The sparseness is intentional.

---

## 2. HERO

**Purpose:** First impression. Establish who she is and why it matters, without overselling.
**Size:** Deliberately restrained — not full-screen. Generous whitespace. Let it breathe.

### Layout

```
┌─────────────────────────────────┬──────────────┐
│  [label]   Carla Burns          │              │
│  [tagline] Counsellor and       │   [portrait] │
│            Psychotherapist      │              │
│                                 │              │
│  [intro copy — 2 lines max]     │              │
│                                 │              │
│  [CTA]                          │              │
└─────────────────────────────────┴──────────────┘
```

Text left, portrait right. On mobile: portrait sits above the text, centred, smaller.

### Image

**File:** `assets/Carla_small_profile.png`
**Description:** Circular-cropped portrait, warm natural light, outdoor greenery behind. Already prepared — no editing needed.
**Size in hero:** Small and unassertive. Suggested max-width ~160–200px on desktop. The photo should feel incidental, not promotional.
**Shape:** The existing circular crop works well — keep it. Echoes the soft, approachable tone.

### Copy

| Element | Copy | Status |
|---|---|---|
| Label | `Carla Burns` | `[REAL]` — from site header |
| Tagline | `Counsellor and Psychotherapist` | `[REAL]` — her title as stated |
| Intro line | `I believe that even in the midst of suffering, there is an opportunity for profound meaning-making.` | `[REAL]` — verbatim from carlaburnscounselling.com |
| Sub-intro | `Whether we meet online or in person, I offer a calm and respectful space to explore your unique story.` | `[REAL, UPDATED]` — adapted from site; "in person" replaces "through my established private practice" to reflect new location |
| CTA | `Get in touch` | Scrolls to #contact |

---

## 3. HOW

**Purpose:** Describe how she works, without a jargon-heavy list of modalities. Make the approach feel human and specific to the client.

**Anchor:** `#how`

### Structure

Three short pillars — no headers needed if copy is clear enough. Can be a 3-column layout on desktop, stacked on mobile.

---

**Pillar 1 — Integrative**

> I practise integrative counselling and psychotherapy, drawing from a range of approaches — psychodynamic, Jungian, gestalt, humanistic, and transpersonal. What we use depends on you: your needs, your strengths, the way you make sense of things.

`[REAL + lightly rewritten]` — modalities verbatim from site; framing adapted to feel less list-like.

---

**Pillar 2 — Relational**

> Our relationship is central to our work together. Patterns from your everyday life crop up between us, and so our relationship can become a practice space for looking at those patterns — with curiosity, not judgement.

`[REAL]` — first two sentences verbatim from carlaburnscounselling.com/how; final clause is a small addition for rhythm.

---

**Pillar 3 — Transpersonal**

> I bring a soulful, holistic understanding to this work. I'm interested in what your difficulty might be asking of you — in the wider story of your life, not just the presenting problem.

`[REAL + lightly rewritten]` — distilled from transpersonal description on site. "What your difficulty might be asking of you" is a tonal choice that fits the existing voice.

---

**Optional: Areas of work (beneath the three pillars)**

A quiet, unpunctuated list — not bullet points. Run-on or comma-separated works better with the tone:

> grief and loss · anxiety and depression · trauma · relationship difficulties · identity and belonging · life transitions · shame · loneliness · low self-esteem · anger · emptiness · meaning-making · fertility · creativity and spirituality

`[REAL]` — from carlaburnscounselling.com and Re-Vision listing.

**Optional: Creative methods note**

> Sometimes we might work with dreams or drawing to support conversation. Not always. But it's there if it's useful.

`[REAL + lightly rewritten]` — from the How page ("you might choose to work with dreams or drawing to support our conversation").

---

**Optional: Poem**

The Mary Oliver excerpt ("Wild Geese") could anchor the end of this section rather than the footer — it earns its place here, after the description of the work.

> *You do not have to be good. You do not have to walk on your knees*
> *for a hundred miles through the desert, repenting.*
> *You only have to let the soft animal of your body*
> *love what it loves.*
>
> — Mary Oliver, *Wild Geese*

`[REAL]` — used on carlaburnscounselling.com/words

---

## 4. PRACTICAL

**Purpose:** Clear, factual, friction-free. No persuasion needed here — just the information.

**Anchor:** `#practical`

### Copy (exact, as provided in brief)

---

**Fees**

£75/€85 per session. I offer a free 20 minute zoom consultation initially.

`[REAL + NEW]` — fee confirmed from site; dual currency retained.

---

**Location** `[NEW]`

Sessions are available on Zoom, or in person in Annacoty, Co. Limerick.

> **Note for build:** This is a significant update. The existing site says "Old Street, London" and "Zoom only." The new copy reflects Carla's move to the West of Ireland and the addition of in-person sessions. The old location should be removed entirely.

---

**Contact**

Email [burnscarla@gmail.com](mailto:burnscarla@gmail.com) or complete the form below.

`[REAL]` — verbatim from brief / existing site.

---

**Layout suggestion:** Three labelled rows, left-aligned. Label in small caps or muted colour. Value in regular weight. No table styling — just clean spacing.

```
Fees        £75 / €85 per session
            Free 20-minute Zoom consultation to begin

Location    Zoom, or in person in Annacoty, Co. Limerick

Contact     burnscarla@gmail.com
            or use the form below ↓
```

---

## 5. ABOUT (Separate page — `/about`)

**Purpose:** The personal story. Where the hooks live. Written in Carla's voice, first-person.
**Note:** This page is separate from the main landing page. The nav `About` link routes here.

### Suggested structure

**Opening — who she is now**

> I'm Carla, a counsellor and psychotherapist in private practice since 2018.
> I trained in integrative transpersonal counselling and psychotherapy at Re-Vision College in London, and I'm a registered member of UKCP and BACP.

`[REAL]` — from carlaburnscounselling.com

---

**The path here — her journey (the richest section)**

This is where the biography becomes a story, not a CV. Suggested sequence:

1. The creative background first (unexpected, humanising):

> Before I trained as a therapist, I worked for many years as an artist. I studied Fine Art and have always been drawn to the same questions — what is it like to be human? How do we make meaning? How do we know ourselves, and how do others know us? Counselling, for me, is the same inquiry through a different medium.

`[REAL + lightly shaped]` — from research/my-background page. Questions are verbatim from the site.

2. The clinical groundwork:

> Before entering private practice, I worked in NHS anxiety services providing CBT, as an assistant nurse in acute psychiatric and dementia wards, and as a support worker with neurodiverse adults and children. That breadth of experience shapes how I sit with difficulty — I've seen suffering in many of its forms.

`[REAL + lightly rewritten]` — clinical roles all confirmed from site; closing sentence is a tonal addition.

3. Personal background — TCK identity:

> I grew up in Ireland, raised by Scottish parents. That particular experience — of navigating multiple heritages, of belonging almost but not quite, of making a home in the gaps between cultures — gave me a lived understanding of what it means to be caught between worlds.

`[REAL + shaped]` — "Third Culture Kid" framing is from the my-background page. The description of belonging and heritage is verbatim/near-verbatim.

4. Her own experience as a client:

> I came to this work in part through my own sustained experience of therapy. That gives me what I'd call an inside-out understanding of what the journey involves — the courage it takes, and what becomes possible.

`[REAL + lightly rewritten]` — "inside-out understanding" is her own phrase from the my-background page.

---

**Credentials (brief, at the end — not the point of the page)**

> Registered with UKCP and BACP. Trained at Re-Vision College, London.

`[REAL]`

---

### Image

**File:** `assets/Carla_small_profile.png`
**Placement:** Top of the About page, above the biography text. Centred or floated left with text wrapping alongside. Given the circular crop and intimate scale, centred works well here — it lets the portrait land before the words do.
**Size:** Slightly larger than in the hero — suggested max-width ~220–260px. The page has more room to breathe.
**Shape:** Retain the circular crop.

**`[PLACEHOLDER]` — What still needs to come from Carla:**
- Whether she wants to name her Fine Art specialism or any exhibited work
- Whether the TCK framing feels right in her own words, or needs adjusting
- Anything about her life in the West of Ireland / what brought her there

---

## 6. CONTACT

**Purpose:** Remove the barrier. Simple, short, no preamble.

**Anchor:** `#contact`

### Copy

> Get in touch. A free 20-minute conversation is always the first step.

`[NEW — suggested]` One line of copy before the form. Warm, not pressuring.

**Form fields (minimal):**
- Name
- Email
- Message

**Below the form:**

`burnscarla@gmail.com` — also displayed as plain text for people who prefer email.

`[REAL]`

**Design note:** No GDPR checkbox overkill. A single line beneath the form ("I'll only use your details to respond to your message") is sufficient and more human than a wall of legal copy.

---

## 7. FOOTER

**Layout:** minimal, centred or left-aligned

| Element | Copy |
|---|---|
| Name | `Carla Burns` |
| Year | `© 2025` (or current year, auto-updated) |
| Optional | `UKCP Registered · BACP Registered` |

**Design note:** No social links unless Carla has active profiles she wants linked. Keeping the footer clean is consistent with the tone of the site.

---

## Tone of Voice — Summary Notes

These apply across every section:

- **First person, always.** "I offer" not "Carla offers."
- **Short sentences. Earn the long ones.** The existing site never over-explains.
- **No bullet points for copy** — use them only for credentials or factual lists. Prose reads as more considered.
- **Avoid:** "safe space," "journey" (except sparingly), "transformative," "passionate," "dedicated," "bespoke," "holistic" on its own without grounding.
- **Favour:** Specific, concrete words. Named emotions. Plain language for clinical concepts. The occasional long sentence that earns its length.
- **The poetry is not decoration** — it's the emotional argument of the whole site. Let it breathe.

---

## Content Status Summary

| Section | Status | Outstanding |
|---|---|---|
| NAV | Ready to build | — |
| Hero — label + tagline | `[REAL]` | — |
| Hero — portrait | `[REAL]` | `assets/Carla_small_profile.png` |
| Hero — intro copy | `[REAL, minor edit]` | Confirm "in person" update |
| How — three pillars | `[REAL + light editing]` | Carla to review/approve |
| How — areas of work | `[REAL]` | — |
| How — Mary Oliver | `[REAL]` | Confirm use / copyright approach |
| Practical — fees | `[REAL]` | — |
| Practical — location | `[NEW]` | Confirm spelling: Annacoty, Co. Limerick |
| Practical — contact | `[REAL]` | — |
| About — credentials | `[REAL]` | — |
| About — biography | `[REAL + shaped]` | Carla to review |
| About — portrait | `[REAL]` | `assets/Carla_small_profile.png` |
| Contact — form | Ready to build | — |
| Footer | Ready to build | — |

---

## Open Questions for Carla

1. **Location spelling** — Is it "Annacoty" or an alternative spelling? Confirm for SEO and map accuracy.
2. **In-person sessions** — What days / frequency? Is this by arrangement only?
3. **Session length** — Standard 50 minutes? Worth stating in Practical.
4. **The Fine Art background** — Do you want to name your medium, any shows, or keep it general?
5. **Mary Oliver** — Happy to quote in full, or prefer the partial excerpt from the existing site?
6. **Low-cost places** — The Re-Vision listing mentioned these at £65. Still offering? Worth including or removing.
7. **UKCP + BACP logos** — Do you have access to them? Can go in the footer or Practical section as trust signals without cluttering the design.
