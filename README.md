# Maral Realty — real estate landing

**Maral Realty** is a modern, conversion-focused landing page for a real estate agency specializing in property sales on Northern Cyprus, designed with an accent on clear visual storytelling, smooth section-by-section user flow and a high-quality lead-generation funnel.

---

## Key Features

* **Section-based storytelling layout:** the page guides the user through a structured narrative — from the agent's introduction and trust signals, through "problem vs. solution" comparison blocks, to property showcases and a lead-capture form.
* **Scroll-driven animations:** every major section is wrapped with a custom `dataAnimate` prop (`fadeIn`, `fadeInLeft`, `fadeInUp`, etc.) passed into a shared `Container` component, triggering smooth entrance animations as the user scrolls.
* **Interactive FAQ accordion:** custom-built expandable/collapsible question list with animated icon rotation and active-state styling, built without third-party accordion libraries.
* **Lead-generation form:** controlled form (name + phone) for requesting a PDF property catalog, ready to be wired to a POST endpoint.
* **Fully responsive, dekstop-first adaptation:** every section has been explicitly adapted down to a 375px viewport — including fixed-width elements refactored to fluid layouts, grid-to-column collapses, and typography scaling.

---

## Tech Stack & Architecture Highlights

### React
* Component-driven architecture: each page section (`Introduction`, `Fraud`, `ChoiceSection`, `PropertyServicesSection`, `GeneralPartner`, `Faq`, `Footer`) is a fully isolated, self-contained module with its own styles and logic.
* Shared `Container` component standardizes max-width, horizontal padding, and scroll-animation wiring (`dataAnimate`) across all sections — no duplicated layout logic.

### Style Encapsulation
* **CSS Modules & `clsx`:** every component ships with a scoped `*.module.css` file; `clsx` is used consistently for conditional and composed class names (e.g. accordion active states, grayscale/accent image variants), keeping styles predictable and collision-free.
* **Mobile-first breakpoint strategy:** each section carries dedicated `@media` overrides (currently targeting 375px), converting fixed pixel widths into fluid `100%`/`auto` layouts, collapsing multi-column grids into single columns, and rescaling typography for readability on small screens.

### Iconography & Assets
* **`react-icons`:** used across sections for UI accents — quote marks, checkmarks, star ratings, lock/security icons, and the FAQ toggle.
* **WebP image assets:** all decorative and background imagery (`@assets/*.webp`) is served in WebP for optimized load performance.

### Forms & State
* Local component state (`useState`) manages controlled form inputs for the catalog request form, with a `handleSubmit` handler ready to be connected to a backend endpoint (`POST`).

---

## Responsive Design

Every section has been audited and adapted for a **375px** mobile viewport as a baseline breakpoint, including:

* Multi-column grids (property showcase, comparison cards) collapsing to a single column
* Typography scale-down for headings (`40px → 22px`) and body text (`16–18px → 13–15px`)
* Form inputs and buttons made full-width with `box-sizing: border-box` to prevent overflow
* Background-only decorative images resized or repositioned to avoid overlapping text on small screens

---

## Status

🚧 The project is actively being adapted for full mobile responsiveness across all sections. Backend integration for the lead-capture form is pending.