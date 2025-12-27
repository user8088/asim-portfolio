# ⚡ Animation-First Developer Portfolio Website

## 1. Project Overview

Build a **high-end, animation-oriented personal portfolio website** that reflects strong **engineering thinking, modern web skills, and motion design awareness**.

This is **not** a static portfolio.
The site must feel:
- Cinematic
- Smooth
- Confident
- Carefully engineered

Animations and transitions are **core features**, not decorations.

---

## 2. Visual Identity & Theme

### Color Palette
- **Primary Background:** Deep black / near-black (`#0b0b0b`)
- **Accent Color:** Subtle warm **orange** (`#ff8c42`)  
  → Used sparingly for highlights, hover states, focus elements
- **Text:** Off-white / light gray (`#e5e5e5`)
- Avoid pure white and harsh contrast

### Style Direction
- Minimal
- Premium
- Modern-tech aesthetic
- Slightly futuristic
- No template look
- No excessive gradients or glassmorphism

---

## 3. Technology Stack (Strict)

### Core Stack
- **Next.js (React)**
- **GSAP** for animations
- **GSAP ScrollTrigger**
- **Smooth scrolling** (Lenis or equivalent)
- CSS Modules or Tailwind (clean and restrained)

### Animation Rules
- GPU-friendly animations only
- Prefer `transform`, `opacity`, `clip-path`
- No layout-thrashing animations
- Motion should guide attention, not distract

---

## 4. Motion Philosophy

### Principles
- Animate with intent
- Fewer animations, higher quality
- Use easing curves that feel organic
- Micro-interactions matter

### Scroll Behavior
- Smooth scroll with inertia
- Scroll-based reveals:
  - Fade-in
  - Translate-up
  - Mask reveals
  - Subtle parallax
- Section pinning allowed but used sparingly

---

## 5. Website Structure

### 5.1 Hero / Landing Section

**Purpose:** Instantly communicate “this developer is different.”

Elements:
- Large bold headline (short and confident)
- Animated text reveal (GSAP timeline)
- Subtle orange accent line or cursor interaction
- Minimal CTA (e.g. “Explore Work”)

Animations:
- Text split animation (words or characters)
- Staggered entrance
- Optional subtle grain/noise background
- Mouse-move parallax on large elements

---

### 5.2 About Section

**Tone:** Engineer-first, not influencer.

Content:
- Short, impactful paragraphs
- Focus on:
  - Problem solving
  - System design thinking
  - Architecture mindset

Animations:
- Section fades in on scroll
- Paragraphs stagger upward
- Accent line animates horizontally

---

### 5.3 Skills / Tech Stack Section

Design:
- Grid or horizontal layout
- Tech names or minimal icons
- Clean spacing

Animations:
- Items slide in from bottom
- Staggered reveal
- Hover effects:
  - Subtle scale
  - Orange glow or underline

---

### 5.4 Projects Section (High Priority)

Each project card includes:
- Project title
- Short description
- Tech stack
- CTA (View Project)

Interactions:
- Hover:
  - Card lifts slightly
  - Orange accent border appears
  - Background dims subtly
- Click:
  - GSAP page transition to project detail page

---

### 5.5 Experience / Timeline Section

Design:
- Vertical timeline
- Minimal dots and connecting lines
- Orange highlight for current role

Animations:
- Timeline reveals as user scrolls
- Dot pulse animation on entry
- Text slides in gently

---

### 5.6 Contact Section

Design:
- Minimal and confident
- No clutter

Elements:
- Email
- GitHub
- LinkedIn

Animations:
- Fade-up on entry
- Hover underline animation
- Orange accent glow on hover

---

## 6. Page Transitions

Mandatory:
- Smooth page transitions using GSAP
- No default browser navigation feel

Examples:
- Fade-out current page
- Slide-in next page
- Preserve smooth scroll continuity

---

## 7. Performance & Accessibility

- Lighthouse score above **90**
- Lazy load heavy assets
- Respect `prefers-reduced-motion`
- No blocking animations
- Mobile performance is critical

---

## 8. UX Constraints

### Avoid
- Over-animated loaders
- Generic portfolio layouts
- Stock illustrations
- Aggressive scroll hijacking

### Enforce
- Clean spacing
- Strong typography hierarchy
- Purposeful motion
- Professional restraint

---

## 9. Code Quality Expectations

- Clean component structure
- Reusable GSAP animation utilities
- Clear naming conventions
- Readable comments where needed
- Scalable folder architecture

---

## 10. Final Intent

This portfolio should make visitors think:

> “This developer doesn’t just write code —  
> they engineer **experiences**.”

The end result should feel **intentional, modern, and premium**.
