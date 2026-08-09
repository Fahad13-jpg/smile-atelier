# DESIGN.md — Premium Dental Clinic Website
## Reference: DENTRY · Boutique Dentist & Clinic Website

> This document defines the visual, UX, interaction, responsive, content, and implementation rules for an original dental-clinic website inspired by the supplied DENTRY reference.
>
> IMPORTANT: DENTRY is a fictional demonstration clinic/template, not a real medical provider. Its live demo explicitly states that its content is illustrative and not medical advice. Do not copy its fictional clinic identity, doctors, contact details, address, copy, images, or branding into the new project.

---

# 1. SOURCE OF TRUTH

## Primary visual/UX reference

Supplied reference:
`https://dentry.framer.website/?via=framplates`

Official Framer template listing:
`https://www.framer.com/marketplace/templates/dentry/`

The live DENTRY demo currently contains these primary navigation destinations:

- Clinic
- Treatments
- Team
- Journal
- Book Now

It also exposes Contact in the secondary/mobile navigation.

The live homepage currently uses the following major content sequence:

1. Hero
2. Dental care introduction
3. The space
4. Overview
5. Treatments
6. Team
7. Book a visit / contact footer

The official template listing describes DENTRY as a premium Framer template for boutique dental clinics and related healthcare studios. It lists features including appear effects, light/dark theme, overlays/modals, slideshows/tickers, sticky scrolling, scroll effects, CMS, custom cursors, forms, text effects, responsive layouts, and selection styles.

Use the reference to understand:
- visual hierarchy
- information architecture
- section rhythm
- premium dental positioning
- interaction patterns
- patient journey

Do NOT reproduce the website pixel-for-pixel.

---

# 2. PROJECT GOAL

Build an original, production-quality dental clinic website that feels:

- premium
- calm
- precise
- modern
- trustworthy
- human
- editorial
- conversion-focused

The website must not feel like:
- a generic healthcare template
- a generic SaaS landing page
- an AI-generated website
- an animation demo with weak UX

The final experience should combine:
- DENTRY-inspired information architecture
- original visual identity
- meaningful motion
- optional interactive 3D
- strong mobile UX
- real appointment/contact functionality
- scalable CMS-style content architecture
- SEO-friendly treatment pages

---

# 3. REFERENCE FACTS — DO NOT INVENT

The following are facts observed from the supplied DENTRY demo.

## Homepage navigation

Desktop/primary navigation:
- Clinic
- Treatments
- Team
- Journal
- Book Now

Secondary/mobile navigation includes:
- Clinic
- Treatments
- Team
- Journal
- Contact
- Book

## Homepage sections

The reference currently presents:

### Hero
Headline:
"Dental care for confident smiles"

Supporting text describes:
- aesthetic dentistry
- restorative care
- implants
- everyday oral health

### Dental care section
Eyebrow/section number:
"01"

Section title:
"Dental care for every stage of life"

The section discusses:
- routine checkups
- aesthetic dentistry
- restorative treatments
- prevention
- comfort
- clarity
- long-term oral health

### The space section
Eyebrow/section number:
"02"

The reference presents four concepts:
- Welcome
- Comfort
- Personal Care
- Precision
- Modern Technology

These are represented with imagery and navigation arrows.

### Overview
Eyebrow/section number:
"03"

The reference currently highlights:
- Central Location
- Full Dental Scope
- Modern Tech
- Controlled Pace

The live demo currently uses Stockholm as the fictional location.

### Treatments
Eyebrow/section number:
"04"

Heading:
"Care built around you"

Visible treatment categories include:
- General Care
- Aesthetics
- Implants

The footer/site structure also references:
- Prevention

### Team
Eyebrow/section number:
"05"

Heading:
"Led by expert dental clinicians"

The demo currently displays fictional clinicians:
- Dr. Ingrid Voss
- Dr. Elias Bergström
- Erik Lund

These names MUST NOT be reused in the new project unless explicitly intended as fictional demo content.

### Booking
Heading:
"Book a visit"

Supporting heading:
"Ready when you are"

Supporting idea:
"A calm, personal dental experience designed around you"

The reference includes a Book Now CTA.

## Footer/contact facts in reference

The DENTRY demo currently shows:
- Birger Jarlsgatan 18
- 114 42 Stockholm
- Sweden
- Mo-Fr. 08:00-19:00
- clinic@dentry.com
- +46 8 555 21400

These are fictional/demo details and MUST NOT be copied into the new project.

---

# 4. ORIGINAL BRAND DIRECTION

Create a new fictional clinic identity.

Do not use:
- DENTRY
- Dentry
- Dentry logo
- Dentry domain
- Dentry contact details
- Dentry fictional doctors
- Dentry fictional address
- Dentry exact copy

Working placeholder brand:
"SMILE ATELIER"

This is only a development placeholder and can be renamed later.

Brand personality:
- boutique
- refined
- warm
- clinically credible
- contemporary
- patient-first

Avoid:
- childish dental illustrations
- cartoon teeth
- excessive blue/white healthcare styling
- generic medical gradients
- loud neon colors
- excessive glassmorphism
- excessive rounded cards

---

# 5. VISUAL PRINCIPLES

## Primary principles

1. Editorial hierarchy
2. Large confident typography
3. Generous whitespace
4. Strong photography
5. Controlled asymmetry
6. Quiet luxury
7. Clear conversion paths
8. Purposeful motion
9. Human-centered healthcare
10. Accessibility before decoration

The design should feel spacious rather than crowded.

Use fewer, stronger elements.

---

# 6. COLOR SYSTEM

Do not copy the exact DENTRY color values.

Create an original neutral-led palette.

Recommended semantic tokens:

```css
--background: ...
--surface: ...
--surface-elevated: ...
--foreground: ...
--foreground-muted: ...
--border: ...
--accent: ...
--accent-foreground: ...
--inverse-background: ...
--inverse-foreground: ...
```

Color selection must satisfy WCAG contrast requirements.

Recommended direction:
- warm neutral primary background
- deep charcoal primary text
- restrained muted secondary text
- one sophisticated accent color
- optional dark theme

Avoid:
- default Tailwind blue
- purple/blue AI gradients
- excessive accent colors
- low-contrast beige text on beige backgrounds

Exact values should be selected during the design pass and stored as design tokens, not hard-coded throughout components.

---

# 7. TYPOGRAPHY

Use a deliberate type pairing.

Recommended direction:
- distinctive editorial display face for major headlines
- highly readable sans-serif for body/UI

Typography hierarchy:

```text
Display XL
Display L
Display M
Heading L
Heading M
Heading S
Body L
Body M
Body S
Caption
Label
```

Rules:
- headlines may be large and expressive
- body text must remain highly readable
- avoid excessive font weights
- avoid using one generic font for every role
- use tight tracking for large display typography only where appropriate
- maintain comfortable body line-height

Responsive typography must scale smoothly rather than abruptly.

Use CSS `clamp()` where appropriate.

---

# 8. LAYOUT SYSTEM

Use a responsive 12-column grid on desktop.

Desktop:
- max content width: establish one global container token
- generous horizontal margins
- consistent gutters

Tablet:
- reduce column count/gutters
- preserve visual hierarchy

Mobile:
- single-column default
- intentionally redesigned compositions
- no simple desktop shrink

Use a spacing scale rather than arbitrary margins.

Recommended conceptual spacing:
- 4
- 8
- 12
- 16
- 24
- 32
- 48
- 64
- 80
- 96
- 128
- 160

Do not use every value everywhere.

---

# 9. NAVIGATION

## Desktop

Navigation should remain minimal.

Primary links:
- Clinic
- Treatments
- Team
- Journal
- Book

Optional:
- Contact

The booking action should have stronger visual emphasis than informational links.

## Behavior

Initial state:
- transparent/overlay if appropriate for the hero

After scrolling:
- transition to a readable navigation state
- use Motion or GSAP for the transition
- do not create distracting movement

## Mobile

Use:
- compact brand mark
- menu trigger
- high-priority Book CTA

Mobile menu:
- full-screen or large overlay
- staggered link entrance
- clear close action
- keyboard accessible
- focus trapped while open

---

# 10. HERO

The hero is the most important section.

## Objective

Immediately communicate:
- what the clinic does
- premium positioning
- patient confidence
- appointment action

## Structure

Suggested composition:

```text
[Navigation]

Small label / category

Large editorial headline

Short supporting statement

[Book an appointment]

Large visual / clinic photography
OR
Interactive 3D dental object
```

## Motion

Hero entrance should be choreographed.

Suggested sequence:
1. navigation enters
2. eyebrow appears
3. headline reveals
4. supporting copy appears
5. CTA enters
6. hero image/3D object settles into place

Use:
- GSAP for complex sequence
- Motion for smaller UI interactions

Do not animate everything simultaneously.

## 3D option

A 3D dental object may be used as a visual anchor.

Preferred technology:
- React Three Fiber
- Three.js

Alternative:
- Spline

3D should be:
- subtle
- elegant
- responsive
- lightweight

Avoid:
- spinning tooth continuously at high speed
- particle overload
- distracting WebGL effects

---

# 11. DENTAL CARE INTRODUCTION

Reference concept:
"Dental care for every stage of life"

Create an original section explaining the clinic philosophy.

Layout:
- section number/eyebrow
- large statement
- concise supporting paragraph
- treatment CTA

Possible visual treatment:
- oversized typography
- editorial image
- subtle reveal
- asymmetric composition

Do not make it a standard card grid.

---

# 12. THE CLINIC SPACE

Reference concept:
"The space"

Reference topics:
- Welcome
- Comfort
- Personal Care
- Precision
- Modern Technology

Create an interactive visual storytelling section.

Recommended implementation:

```text
Large image / visual
        +
active topic
        +
short description
        +
previous/next controls
```

Interaction:
- image transition
- title transition
- progress indicator
- keyboard controls
- touch/swipe on mobile

Use Motion or GSAP.

Do not autoplay rapidly.

---

# 13. CLINIC OVERVIEW

Reference concept:
- Central Location
- Full Dental Scope
- Modern Tech
- Controlled Pace

Translate this into an original "Why patients choose us" section.

Each point should answer a patient concern:

- Where are you?
- What do you treat?
- What technology do you use?
- What is the patient experience like?

Use a restrained layout.

Avoid four generic icon cards.

Possible layout:
- large number
- large statement
- supporting explanation
- subtle image/graphic

---

# 14. TREATMENTS

The reference organizes treatment information around:
- General Care
- Aesthetics
- Implants
- Prevention

Create a scalable treatment system.

## Treatment categories

Recommended:
- General Dentistry
- Cosmetic Dentistry
- Dental Implants
- Preventive Care
- Restorative Dentistry
- Orthodontics

Only include services that are appropriate for the fictional clinic.

## Treatment cards

Cards should support:
- category
- title
- short description
- image
- CTA

Hover:
- subtle image movement
- arrow movement
- border/surface transition

Avoid:
- excessive card shadows
- huge rounded containers
- generic iconography

---

# 15. TREATMENT DETAIL PAGES

Every treatment should have a reusable template.

Structure:

```text
Hero
Treatment summary
Who it is for
What to expect
Treatment process
Benefits
FAQ
Related treatments
CTA / booking
```

Medical content must be reviewed by a qualified professional before use in a real clinic.

Do not invent medical claims.

Use placeholders where factual clinical content is not available.

---

# 16. BEFORE / AFTER

Add an interactive before/after experience as an original enhancement.

Function:
- draggable divider
- before label
- after label
- keyboard-accessible alternative
- touch support

Motion:
- smooth drag
- subtle handle feedback

Important:
- use properly authorized imagery
- obtain patient consent for real before/after photos
- do not fabricate treatment outcomes

---

# 17. TEAM

Reference concept:
"Led by expert dental clinicians"

Create an editorial team section.

Each clinician:
- professional photograph
- name
- role
- specialties
- short biography
- optional profile page

Hover:
- subtle image movement
- arrow/CTA reveal

Do not invent credentials.

For demo content, explicitly label fictional profiles.

---

# 18. JOURNAL

The reference includes a Journal destination and CMS-powered journal content.

Create:
- article listing
- category filters
- article detail page
- related articles
- publication metadata

Suggested categories:
- Oral Health
- Treatments
- Patient Guides
- Clinic News

Avoid automatically generated medical advice.

For a real clinic:
- medical articles should be professionally reviewed
- cite credible sources where appropriate
- display author/reviewer information where required

---

# 19. BOOKING

Booking is the primary conversion.

CTA labels:
- Book an Appointment
- Book a Visit
- Request an Appointment

Avoid overly aggressive sales copy.

## Booking form

Recommended fields:

```text
Name
Email
Phone
Preferred service
Preferred date
Preferred time
Message / notes
```

Do not collect unnecessary sensitive information.

The form should have:
- validation
- clear errors
- loading state
- success state
- failure state
- accessible labels

Backend can later connect to:
- Django REST API
- PostgreSQL
- email notification
- calendar system
- clinic CRM

Do not claim an appointment is confirmed until the backend actually confirms it.

---

# 20. CONTACT

Include:
- address
- opening hours
- phone
- email
- map/directions
- booking CTA

All values must be supplied by the real client or clearly marked as demo content.

Never reuse DENTRY's Stockholm details.

---

# 21. FOOTER

Footer structure:

```text
Brand statement

Navigation
Clinic
Treatments
Team
Journal
Contact

Book appointment

Address
Opening hours
Phone
Email

Social links

Privacy
Terms
Accessibility
```

Keep it visually strong but not oversized.

---

# 22. MOTION SYSTEM

Motion is a core part of the experience, but it must have purpose.

## Libraries

Use:

### Motion
For:
- hover states
- buttons
- menus
- modals
- layout changes
- small component transitions

### GSAP + ScrollTrigger
For:
- hero choreography
- scroll storytelling
- pinned sections
- complex timelines
- horizontal sections
- image reveals

### Lenis
Optional:
- smooth scrolling

### React Three Fiber
For:
- 3D objects
- camera
- lighting
- 3D interaction

Do not use multiple libraries for the same animation unless there is a clear reason.

---

# 23. MOTION TIMING

Create consistent motion tokens.

Conceptual tokens:

```text
instant
fast
standard
slow
cinematic
```

Use:
- fast interactions for buttons/hover
- standard for component entrances
- slow for editorial transitions
- cinematic only for hero/major storytelling

Avoid:
- long delays that make the site feel slow
- bouncing UI
- excessive spring physics
- random animation directions

---

# 24. SCROLL ANIMATION

Recommended patterns:

### Reveal
Text/image enters as it becomes relevant.

### Parallax
Very subtle depth difference.

### Pinning
Use sparingly for major storytelling sections.

### Horizontal movement
Only when it improves content exploration.

### Scale transition
Use for hero imagery and large visual moments.

Do not:
- hijack scrolling
- prevent normal browser behavior
- create motion sickness
- make mobile scrolling difficult

---

# 25. HOVER INTERACTIONS

Use hover only where a device supports hover.

Examples:
- image scale 1.02–1.05
- arrow translation
- subtle text color change
- border/surface transition
- cursor interaction

Never make essential information hover-only.

---

# 26. CUSTOM CURSOR

DENTRY lists custom cursors as a feature.

We may implement an original custom cursor on desktop.

Rules:
- disable on touch devices
- never hide the system pointer when accessibility would suffer
- cursor must not obstruct text
- keep movement subtle
- provide clear hover states without relying solely on cursor styling

Use Motion for cursor movement.

---

# 27. DARK MODE

The reference officially lists systematic light/dark mode support.

Our project may support:
- Light
- Dark
- System

Dark mode must not simply invert colors.

Define separate semantic tokens.

Check:
- image treatment
- borders
- shadows
- text contrast
- 3D lighting
- form controls

Persist user preference where appropriate.

---

# 28. 3D SYSTEM

3D is an enhancement, not a requirement for every section.

## Recommended first 3D experience

Hero:
- one dental object
- subtle idle motion
- pointer response
- scroll-linked movement

## Performance rules

- lazy-load 3D
- avoid unnecessary high-poly models
- compress textures
- use appropriate texture resolution
- reduce DPR on weaker devices
- provide a static fallback
- respect reduced-motion preference

If 3D harms performance, remove it rather than compromising the site.

---

# 29. COMPONENT LIBRARIES

Allowed:
- shadcn/ui
- Kokonut UI
- custom React components

Rules:
- libraries provide building blocks
- the design system controls the final appearance
- do not let default component styling dictate the website
- customize components to match the project's tokens
- do not import large unused component packages

Kokonut UI may be used for selected animated components where its interaction fits the design.

Do not make the entire website look like a Kokonut UI showcase.

---

# 30. IMAGES

Image direction:
- authentic clinic interiors
- real staff photography
- natural patient interactions
- close-up treatment details
- restrained dental imagery
- high-quality editorial compositions

Avoid:
- cliché stock-photo smiles
- obviously AI-generated dentists
- unrealistic teeth
- generic handshake imagery
- excessive smiling-headshot grids

For a real client:
- obtain usage rights
- obtain patient consent where required
- do not fabricate before/after outcomes

---

# 31. ICONOGRAPHY

Use a consistent icon set.

Preferred:
- Lucide or custom SVG

Rules:
- thin/clean visual language
- consistent stroke width
- do not use random icon packs
- do not use emojis as interface icons

Icons should support content rather than decorate every section.

---

# 32. FORMS

Forms must include:

- visible labels
- placeholder only as supplementary guidance
- keyboard navigation
- accessible error messages
- loading state
- success confirmation
- server-side validation
- spam protection

Do not rely on client-side validation alone.

---

# 33. RESPONSIVE DESIGN

Design explicitly for:

- large desktop
- desktop
- tablet
- mobile

Do not simply scale desktop down.

## Mobile priorities

1. readable headline
2. obvious booking CTA
3. fast page load
4. simple navigation
5. accessible forms
6. touch-friendly controls
7. no horizontal overflow

3D and heavy effects should be reduced or disabled where necessary.

---

# 34. ACCESSIBILITY

Target WCAG 2.2 AA where applicable.

Requirements:
- semantic HTML
- keyboard navigation
- visible focus
- accessible names
- sufficient contrast
- alt text
- reduced-motion support
- no color-only information
- form error announcements
- accessible dialogs
- accessible navigation

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

When reduced motion is enabled:
- remove decorative movement
- reduce transitions
- disable unnecessary parallax
- provide static 3D fallback

---

# 35. PERFORMANCE

Target:
- fast first load
- optimized images
- lazy loading below the fold
- code splitting
- dynamic import for 3D
- minimal JavaScript where possible
- no unnecessary animation loops

Avoid:
- huge uncompressed images
- loading every font weight
- loading 3D before it is needed
- unnecessary third-party scripts

Measure with:
- Lighthouse
- Chrome DevTools
- Web Vitals

---

# 36. SEO

The site must have:

- unique page titles
- meta descriptions
- semantic headings
- canonical URLs
- Open Graph metadata
- sitemap
- robots.txt
- structured data where appropriate
- local business schema for a real clinic when accurate
- descriptive image alt text
- internal linking

Treatment pages should have unique content.

Do not generate fake medical claims for SEO.

---

# 37. TECHNICAL ARCHITECTURE

Preferred stack:

```text
Next.js
TypeScript
React
Tailwind CSS
Motion
GSAP
ScrollTrigger
Lenis (optional)
Three.js
React Three Fiber
Django REST Framework
PostgreSQL
```

The first milestone can be frontend-only.

Backend should be introduced after the visual system and page architecture are stable.

---

# 38. COMPONENT ARCHITECTURE

Suggested structure:

```text
app/
  page.tsx
  clinic/
  treatments/
  team/
  journal/
  contact/
  book/

components/
  layout/
    Navbar
    Footer
    Container

  ui/
    Button
    Link
    Heading
    SectionLabel
    Image
    Modal

  hero/
    Hero
    HeroVisual
    Hero3D

  clinic/
    ClinicIntro
    SpaceStory
    ClinicOverview

  treatments/
    TreatmentGrid
    TreatmentCard
    TreatmentDetail

  team/
    TeamGrid
    TeamCard
    TeamProfile

  journal/
    ArticleGrid
    ArticleCard
    ArticlePage

  booking/
    BookingForm
    BookingSuccess
    BookingError

  motion/
    Reveal
    TextReveal
    Parallax
    PageTransition

  three/
    DentalModel
    Scene
    CameraRig
```

Keep components small and composable.

---

# 39. CONTENT MODEL

Treatments:

```text
id
slug
title
category
shortDescription
description
heroImage
gallery
benefits
process
faq
relatedTreatments
```

Team:

```text
id
slug
name
role
specialties
bio
image
credentials
```

Journal:

```text
id
slug
title
excerpt
content
category
author
reviewer
publishedAt
image
```

Appointments:

```text
id
name
email
phone
service
preferredDate
preferredTime
message
status
createdAt
```

Do not store unnecessary personal information.

---

# 40. BACKEND RULES

When backend is implemented:

- use Django REST Framework
- validate input server-side
- sanitize/validate user input
- protect endpoints
- use environment variables for secrets
- never expose database credentials
- implement proper CORS
- add rate limiting/spam protection where appropriate
- log errors without exposing sensitive data

Appointment status should have explicit states, for example:

```text
pending
confirmed
cancelled
completed
```

---

# 41. AI / CLAUDE CODE RULES

Claude must read these files before implementing UI:

```text
DESIGN.md
ARCHITECTURE.md
MOTION.md
```

If any instruction conflicts with a later task:
- preserve the design system unless the user explicitly approves a change
- do not invent new visual patterns unnecessarily
- do not replace established components with generic alternatives

Claude must NOT:
- create generic SaaS layouts
- use random gradients
- default to purple/blue
- add excessive glassmorphism
- add excessive rounded cards
- animate every element
- add unnecessary 3D
- use fake medical claims
- invent doctor credentials
- invent real clinic information
- copy DENTRY text or branding

Claude SHOULD:
- reuse design tokens
- reuse components
- preserve spacing consistency
- preserve motion consistency
- optimize images
- test responsive behavior
- consider accessibility
- respect reduced motion
- keep animation purposeful

---

# 42. REFERENCE IMPLEMENTATION RULE

The supplied DENTRY URL is a reference, not a source-code specification.

Claude should inspect the reference visually and structurally, then implement an ORIGINAL design.

Allowed:
- learn the information hierarchy
- learn section sequencing
- learn interaction concepts
- learn the premium dental positioning
- learn the treatment/team/journal structure

Not allowed:
- pixel-for-pixel reproduction
- copying text
- copying logo
- copying fictional identities
- copying contact details
- copying exact visual assets
- copying source code
- reproducing the same branding

---

# 43. DIFFERENTIATION REQUIREMENTS

The finished site must introduce original elements.

At minimum, include:

1. Original brand identity
2. Original typography pairing
3. Original color tokens
4. Original hero composition
5. Interactive before/after experience
6. Purposeful scroll choreography
7. Premium micro-interactions
8. Realistic booking flow
9. Responsive mobile-specific composition
10. Optional interactive 3D hero element

The project should look inspired by a premium dental experience, not like a DENTRY clone.

---

# 44. DEVELOPMENT PHASES

## Phase 1 — Foundation

- initialize Next.js
- TypeScript
- Tailwind
- linting/formatting
- design tokens
- fonts
- global layout

## Phase 2 — Static UI

Build:
- Navbar
- Hero
- Clinic intro
- Space
- Overview
- Treatments
- Team
- Booking CTA
- Footer

No advanced animation yet.

## Phase 3 — Motion

Add:
- hero timeline
- text reveals
- image reveals
- hover states
- navigation transitions
- section transitions

## Phase 4 — Advanced interactions

Add:
- before/after slider
- sticky storytelling
- optional horizontal section
- custom cursor
- page transitions

## Phase 5 — 3D

Add:
- R3F scene
- dental model
- pointer response
- scroll response
- mobile/static fallback

## Phase 6 — Backend

Add:
- Django
- DRF
- PostgreSQL
- booking endpoint
- validation
- notifications

## Phase 7 — CMS-style content

Add:
- treatment data
- team data
- journal data

## Phase 8 — Production

- SEO
- accessibility audit
- performance audit
- responsive QA
- security review
- deployment

---

# 45. QUALITY BAR

Before considering a section finished, check:

### Design
- Does it follow the design tokens?
- Is hierarchy obvious?
- Is whitespace intentional?
- Does it look original?

### UX
- Is the next action obvious?
- Is the content understandable?
- Does it work without animation?

### Motion
- Does animation communicate something?
- Is timing consistent?
- Does it respect reduced motion?

### Mobile
- Does the composition work independently?
- Are touch targets large enough?
- Is there horizontal overflow?

### Accessibility
- Can keyboard users navigate it?
- Are focus states visible?
- Are labels and errors accessible?

### Performance
- Are images optimized?
- Is 3D lazy-loaded?
- Are animations efficient?

---

# 46. FINAL DESIGN PHILOSOPHY

The website should communicate:

"Premium dentistry without the cold clinical feeling."

The visitor should feel:

- calm
- confident
- informed
- respected
- comfortable
- ready to book

The visual experience should be memorable because of:
- typography
- photography
- composition
- motion
- interaction
- storytelling

—not because of excessive effects.

---

# 47. REFERENCE LINKS

Primary live reference:
https://dentry.framer.website/?via=framplates

Official Framer template:
https://www.framer.com/marketplace/templates/dentry/

---

# 48. FIRST CLAUDE CODE INSTRUCTION

Before writing code:

1. Read this DESIGN.md completely.
2. Inspect the supplied DENTRY reference URL.
3. Summarize the reference's actual structure and interactions.
4. Identify what will be retained as inspiration.
5. Identify what will be redesigned to make the project original.
6. Propose the project architecture.
7. Do NOT start implementation until the architecture and design direction are understood.

When implementation begins:
- build the visual foundation first
- do not add advanced animation prematurely
- keep components reusable
- follow DESIGN.md as the design authority
- ask for clarification only when a missing requirement materially affects implementation
