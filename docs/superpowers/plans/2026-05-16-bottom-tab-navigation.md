# Bottom Tab Navigation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement a custom bottom tab navigation system with an animated indicator for the Lingora app.

**Architecture:** Create a new route group `app/(tabs)` with a `_layout.tsx` file that supplies `tabBar` inline and defines a local `CustomTabBar` function in the same file.

**Tech Stack:** Expo Router, React Native Reanimated, NativeWind.

---

### Task 1: Create Placeholder Screens

**Files:**

- Create: `app/(tabs)/index.tsx` (Home)
- Create: `app/(tabs)/learn.tsx`
- Create: `app/(tabs)/ai-teacher.tsx`
- Create: `app/(tabs)/chat.tsx`
- Create: `app/(tabs)/profile.tsx`

- [ ] **Step 1: Create index.tsx**

```tsx
import { View, Text } from "react-native";
export default function Home() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Home</Text>
    </View>
  );
}
```

- [ ] **Step 2: Create learn.tsx**

```tsx
import { View, Text } from "react-native";
export default function Learn() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Learn</Text>
    </View>
  );
}
```

- [ ] **Step 3: Create ai-teacher.tsx**

```tsx
import { View, Text } from "react-native";
export default function AITeacher() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>AI Teacher</Text>
    </View>
  );
}
```

- [ ] **Step 4: Create chat.tsx**

```tsx
import { View, Text } from "react-native";
export default function Chat() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Chat</Text>
    </View>
  );
}
```

- [ ] **Step 5: Create profile.tsx**

```tsx
import { View, Text } from "react-native";
export default function Profile() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Profile</Text>
    </View>
  );
}
```

### Task 2: Implement Tab Layout and Custom Tab Bar

**Files:**

- Create: `app/(tabs)/_layout.tsx`

- [ ] **Step 1: Create `app/(tabs)/_layout.tsx`**

```tsx
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <CustomTabBar {...props} />}>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="learn" options={{ title: "Learn" }} />
      <Tabs.Screen name="ai-teacher" options={{ title: "AI" }} />
      <Tabs.Screen name="chat" options={{ title: "Chat" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
```

- [ ] **Step 2: Implement `CustomTabBar` inline in `app/(tabs)/_layout.tsx`**
      Implement `function CustomTabBar(props: BottomTabBarProps)` in the same file and wire `tabBar={(props) => <CustomTabBar {...props} />}` from `Tabs`.
      Use `state`, `descriptors`, and `navigation` from `BottomTabBarProps` to render tab buttons and dispatch `tabPress` events before navigating.
      Render the center AI entry as a raised circular action button and render other tabs with icon + label states based on focus.
      Note: current implementation uses this inline custom bar pattern and does not use a separate `components/CustomTabBar.tsx` file.

### Task 3: Integrate Tab Layout into Root Layout

**Files:**

- Modify: `app/_layout.tsx`

- [ ] **Step 1: Update RootLayout to point to `(tabs)`**
      Modify the stack navigation to load `(tabs)` instead of `index`.

---
