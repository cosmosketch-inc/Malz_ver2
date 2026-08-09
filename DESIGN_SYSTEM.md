# Malz Design System

This site extends the visual language of `malz.io` across Malz Ads and Malz Insight. Its interaction and layout details also adapt principles from Apple Human Interface Guidelines for the web: clear hierarchy, adaptable layout, legible typography, and restrained controls.

## Foundations

- Brand gradient: `#3180B8` → `#5B6FB6` → `#9856B4`
- Ink: `#111111`
- Body: `#454C5E`
- Muted and dividers: `#959AAE`, `#D0D5E8`
- Surfaces: `#F9FBFD`, `#E9EEF3`, `#E5E5FF`
- Type: Apple system UI stack where available, with Helvetica Neue and Japanese system fallbacks
- Content widths: 1280px page container, 740px reading measure
- Radius: 32px for feature surfaces, 22px for cards and media, 14px for compact controls, full-pill for primary CTAs
- Header: 72px maximum height, single-line navigation, translucent control layer

## Components

- Header: translucent light surface, gradient logo, single-line desktop navigation
- Buttons: black, gradient, white, or outlined; all use the same pill geometry and circular arrow
- Page hero: gradient field, oversized copy, asymmetric framed retail photography
- Section title: purple English label plus bold Japanese display type
- Audience navigation: sticky segmented control with equal-width options, 44px minimum mobile target, and a raised selected state that is distinguishable without color alone
- Feature row: oversized gradient number, copy, and real image
- Cards: reserved for audience or use-case grouping; no decorative elevation
- CTA: one consistent action label per intent

## Motion

- Hero photography uses one slow scale reveal to establish depth
- Sections reveal once on entry to communicate hierarchy
- Buttons lift only as direct interaction feedback
- All motion is removed under `prefers-reduced-motion`

## Media

- Media containers reserve their aspect ratio to prevent layout shift
- `object-fit: cover` is paired with image-specific focal positions so people and products remain visible
- Hero media uses 4:3 on compact screens and avoids fixed pixel heights
- Decorative labels never cover important image content

## Accessibility

- Persistent skip link and semantic landmarks
- Visible keyboard focus through native outline or brand focus ring
- Reduced-motion and reduced-transparency fallbacks
- Form labels remain above controls; required consent is validated
- Audience selection exposes `aria-current="location"` and updates as the reader moves between sections
- Compact controls keep a minimum 44px target on mobile
