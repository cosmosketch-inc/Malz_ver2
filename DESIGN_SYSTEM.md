# Malz Design System

This site extends the visual language of `malz.io` across Malz Ads and Malz Insight.

## Foundations

- Brand gradient: `#3180B8` → `#5B6FB6` → `#9856B4`
- Ink: `#111111`
- Body: `#454C5E`
- Muted and dividers: `#959AAE`, `#D0D5E8`
- Surfaces: `#F9FBFD`, `#E9EEF3`, `#E5E5FF`
- Type: Inter-compatible Latin with Noto Sans JP-compatible Japanese system fallbacks
- Content widths: 1280px page container, 740px reading measure
- Radius: 40px for feature surfaces, 28px for cards, full-pill for controls

## Components

- Header: translucent light surface, gradient logo, single-line desktop navigation
- Buttons: black, gradient, white, or outlined; all use the same pill geometry and circular arrow
- Page hero: gradient field, oversized copy, asymmetric framed retail photography
- Section title: purple English label plus bold Japanese display type
- Audience navigation: sticky segmented control linking to visible page sections
- Feature row: oversized gradient number, copy, and real image
- Cards: reserved for audience or use-case grouping; no decorative elevation
- CTA: one consistent action label per intent

## Motion

- Hero photography uses one slow scale reveal to establish depth
- Sections reveal once on entry to communicate hierarchy
- Buttons lift only as direct interaction feedback
- All motion is removed under `prefers-reduced-motion`

## Accessibility

- Persistent skip link and semantic landmarks
- Visible keyboard focus through native outline or brand focus ring
- Reduced-motion and reduced-transparency fallbacks
- Form labels remain above controls; required consent is validated
