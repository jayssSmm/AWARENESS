# InAmigos Foundation — Awareness Webpage

`inamigos-foundation.html` — a single-file, dependency-free (besides Google Fonts) HTML/CSS/JS awareness page for the InAmigos Foundation internship task.

---

## 1. Research process

The task asked for content sourced from InAmigos's official site and social pages rather than invented copy. Here's exactly what was checked and what came back.

### Official sources (used for all factual content)

| Source | What it gave me |
|---|---|
| [inamigosfoundation.org.in](https://inamigosfoundation.org.in/) — homepage | Founding date, six flagship project names, one-line description of each project |
| [inamigosfoundation.org.in/page/About-Us](https://inamigosfoundation.org.in/page/About-Us) | Founder name (Govind Shukla), founding date (23 Sept 2020), registration type (Section 8), HQ (Bilaspur, Chhattisgarh), certifications (80G, 12A, CSR-1, NITI Aayog, ISO 9001:2015), and the two hard stats used on the page — 50,000+ meals/clothing items under Project Seva, 30,000+ interns trained under Project Vikas |

### Social media

| Source | What it gave me |
|---|---|
| [x.com/InamigosF](https://x.com/InamigosF?lang=en) | One visible post: a Project Seva clothing-drive update, tagged `#ProjectSEVA #ClothingDrive #IAF #IAFVolunteers #IAFForChange #IAFImpact #InAmigosFoundation`. This is the only social post that surfaced in search — I did not browse Instagram/Facebook directly, so treat this as a partial sample of their real social voice, not a full campaign archive |

**Note on scope:** I didn't log into or scroll Instagram/Facebook/LinkedIn — only what a web search surfaced. If your assignment specifically wants you to screenshot or reference Instagram content writer posts, that's worth doing manually since it wasn't accessible through search.

### Third-party / aggregator sources (used for cross-checking only, not quoted)

- [helplocal.in NGO listing](https://helplocal.in/ngo/inamigos-foundation-Bilaspur) — corroborated address, project list, and the "28 states" operating footprint
- [Indeed — Inamigos Foundation reviews](https://in.indeed.com/cmp/Inamigos-Foundation) and [Indeed Q&A](https://in.indeed.com/cmp/Inamigos-Foundation/faq) — confirmed this is an active internship program; also confirmed internships are unpaid and task-based
- [Glassdoor — Inamigos Foundation reviews](https://www.glassdoor.co.in/Reviews/Inamigos-Foundation-Reviews-E8420437.htm) — same, lower detail

### Prior intern work on this exact assignment

Search turned up at least three previously deployed versions of essentially this same "build an InAmigos awareness site" task, from other interns:

- [github.com/aniketsinha-dev/InAmigos-Foundation](https://github.com/aniketsinha-dev/InAmigos-Foundation) — repo explicitly described as an internship assignment submission, static HTML/CSS
- [inamigos-foundation-aniket.vercel.app](https://inamigos-foundation-aniket.vercel.app/)
- [jayavandhinimk.github.io/InAmigos-NGO-website](https://jayavandhinimk.github.io/InAmigos-NGO-website/)

I only used these to confirm which facts (project names, stats, certifications) are consistent across independent submissions — none of their copy, layout, or code was copied. Worth knowing this task gets recycled across a large intern cohort, in case that affects how you want to scope your time on it.

---

## 2. Content decisions

- Every stat and credential on the page (80G, 12A, CSR-1, NITI Aayog, ISO 9001:2015, founding date, founder, address, the two headline numbers) traces to the official About Us page — nothing was invented.
- Project descriptions are paraphrased in original wording, not copied from the official site, since the source copy is short marketing language rather than something worth reproducing verbatim.
- The "Get Involved" CTAs (Volunteer / Donate / Partner) are generic by design — the official site references a "Join Us" form and donation flow, but I couldn't get their exact URLs, so those buttons currently point back to the page itself as placeholders. Swap in the real links before submitting.
- Contact details (email, phone, address) are copied exactly from the official About Us page since accuracy matters more than paraphrasing for contact info.

---

## 3. Design decisions

**Brief:** six unrelated-sounding project names needed to read as one coherent organization, for a rural/pan-India NGO audience — not a startup landing page.

**Signature element:** a banyan tree illustration in the hero, with six canopy clusters (one per project) growing from a single trunk, and small figures gathered underneath. Banyan trees are traditional community gathering points in India, and the "one trunk, many branches" shape is a literal fit for "one foundation, six projects" — it does the organizing work a generic hero graphic wouldn't.

**Palette** — deliberately avoided the default AI-generated look (warm cream + high-contrast serif + terracotta accent):
- `#20293A` ink (deep indigo-charcoal, not true black) — hero and impact section backgrounds, signals trust/institutional weight
- `#F5F0E3` paper (warm ivory) — main background
- `#E8A230` marigold — primary accent, ties to Indian festival/community color language
- `#C24328` vermilion — CTA/action color
- `#3E6B4F` banyan green — environment and animal-welfare project cards
- `#3E7CA6` sky blue / `#B15E76` dusk rose — education and women's-empowerment project cards respectively

**Typography:** Space Grotesk for display (structural, not decorative-serif), Inter for body copy, IBM Plex Mono for stats and eyebrow labels — the mono face is doing double duty as a "data/credibility" signal for the certification badges and impact numbers.

**Structure:** the six projects are shown as an unordered grid, each color-coded to its own accent rather than numbered 01–06 — they're parallel programs, not sequential steps, so numbering would have implied an order that doesn't exist.

**Accessibility / build quality:** visible focus states on all interactive elements, `prefers-reduced-motion` respected (canopy sway and scroll-reveal both disable), mobile nav via checkbox toggle (no JS dependency for core functionality), responsive down to small mobile widths.

---

## 4. Known gaps / what to double-check before submitting

- CTA button links are placeholders — need real volunteer/donate form URLs
- Social proof is based on a single X post; if the assignment grading criteria wants evidence of Instagram-specific content-writer work, that needs manual review
- No photography was used (all visuals are custom SVG) — if the assignment expects real photos of InAmigos activities, you'll need to source those separately since I can't fabricate or misattribute real photos