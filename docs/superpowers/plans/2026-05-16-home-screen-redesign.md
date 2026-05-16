# Home Screen Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the home screen to match the provided reference image, maintaining a clean, vibrant UI, including the header, hero AI conversation section, stats dashboard, "Continue Learning" section, AI tools grid, and mascot-led promo card.

**Architecture:** Utilize React Native with Expo Router, implementing components as small, self-contained units. Styling will use NativeWind/Tailwind CSS as per project patterns.

**Tech Stack:** React Native, Expo Router, NativeWind (Tailwind CSS), TypeScript, Zustand (for state if needed).

---

### Task 1: Setup Home Screen Layout Components

**Files:**
- Create: `components/home/Header.tsx`
- Create: `components/home/HeroCard.tsx`
- Create: `components/home/StatsDashboard.tsx`

- [ ] **Step 1: Create Header Component**

```tsx
import { View, Text, Image } from 'react-native';

export const Header = () => (
  <View className="flex-row justify-between items-center px-4 pt-10 pb-4">
    <Image source={require('@/assets/images/mascot-welcome.png')} className="w-10 h-10" />
    <Text className="text-lg font-bold">Lingora</Text>
    <Image source={require('@/assets/images/user-avatar.png')} className="w-10 h-10 rounded-full" />
  </View>
);
```

- [ ] **Step 2: Commit**

```bash
git add components/home/Header.tsx
git commit -m "feat: create header component"
```

### Task 2: Implement Hero and Stats

**Files:**
- Modify: `app/(tabs)/index.tsx`
- Create: `components/home/HeroSection.tsx`

- [ ] **Step 1: Create Hero Section Component**

```tsx
import { View, Text, TouchableOpacity } from 'react-native';

export const HeroSection = () => (
  <View className="bg-blue-600 p-6 rounded-2xl mx-4">
    <Text className="text-white text-xl font-bold">Start AI Conversation</Text>
    <Text className="text-white">Real conversations. Real progress.</Text>
  </View>
);
```

- [ ] **Step 2: Implement Stats Component**

```tsx
import { View, Text } from 'react-native';

export const StatsDashboard = () => (
  <View className="flex-row justify-between p-4">
    <Text>XP: 350</Text>
    <Text>Streak: 12</Text>
    <Text>Words: 28</Text>
    <Text>Time: 18m</Text>
  </View>
);
```

- [ ] **Step 3: Commit**

```bash
git add components/home/HeroSection.tsx components/home/StatsDashboard.tsx
git commit -m "feat: add hero and stats components"
```

### Task 3: Assemble Home Screen

**Files:**
- Modify: `app/(tabs)/index.tsx`

- [ ] **Step 1: Update main index file**

```tsx
import { ScrollView } from 'react-native';
import { Header } from '@/components/home/Header';
import { HeroSection } from '@/components/home/HeroSection';
import { StatsDashboard } from '@/components/home/StatsDashboard';

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-white">
      <Header />
      <HeroSection />
      <StatsDashboard />
    </ScrollView>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/(tabs)/index.tsx
git commit -m "feat: assemble home screen components"
```
