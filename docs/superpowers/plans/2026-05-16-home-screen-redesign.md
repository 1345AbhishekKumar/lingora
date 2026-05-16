# Home Screen Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the home screen to match the provided reference image, maintaining a clean, vibrant UI, including the header, hero AI conversation section, stats dashboard, "Continue Learning" section, AI tools grid, and mascot-led promo card.

**Architecture:** Implement the home screen directly in `app/(tabs)/index.tsx` using inline subcomponents (`LessonCard`, `ToolCard`) and a multi-section screen layout.

**Tech Stack:** React Native, Expo Router, NativeWind (Tailwind CSS), TypeScript, Zustand (for state if needed).

---

### Task 1: Setup Home Screen Layout Components

**Files:**

- Modify: `app/(tabs)/index.tsx`

- [ ] **Step 1: Build top-level sections in `app/(tabs)/index.tsx`**

Define and compose all primary sections in one screen file:

- Header responsibility: top bar with logo/app name/streak/notifications/avatar.
- Hero responsibility: greeting + mascot area and AI conversation hero banner.
- Stats responsibility: daily metrics dashboard card.
- Content responsibility: Continue Learning cards, AI Tools grid, and motivation banner.

```tsx
// Keep this architecture inline in app/(tabs)/index.tsx for this implementation.
// Extract only when repeated usage or complexity justifies separate files.
```

- [ ] **Step 2: Commit**

```bash
git add app/(tabs)/index.tsx
git commit -m "feat: implement home screen sections inline"
```

### Task 2: Implement Hero and Stats

**Files:**

- Modify: `app/(tabs)/index.tsx`

- [ ] **Step 1: Implement hero and stats sections directly in `app/(tabs)/index.tsx`**

```tsx
// Hero and stats stay in app/(tabs)/index.tsx as part of the multi-section composition.
```

- [ ] **Step 2: Keep repeatable UI as inline subcomponents**

Implement `LessonCard` and `ToolCard` as inline subcomponents inside `app/(tabs)/index.tsx`.

- [ ] **Step 3: Commit**

```bash
git add app/(tabs)/index.tsx
git commit -m "feat: add hero, stats, and inline cards"
```

### Task 3: Assemble Home Screen

**Files:**

- Modify: `app/(tabs)/index.tsx`

- [ ] **Step 1: Update main index file**

```tsx
export default function HomeScreen() {
  return (
    // Compose sections inline in app/(tabs)/index.tsx:
    // header, greeting/hero, stats, continue-learning, AI tools, motivation banner.
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/(tabs)/index.tsx
git commit -m "feat: assemble home screen components"
```

- [ ] **Step 3: Update implementation tracker**
      Exact checklist entry to add after Task 3 Step 2:
- [ ] Update context/progress-tracker.md with summary, affected components, and commit references after Task 3 Step 2; commit with message `docs: update progress tracker for home screen redesign`

Record the implementation summary, touched UI responsibilities (Header, HeroSection, StatsDashboard), and the related commit SHAs/messages.
