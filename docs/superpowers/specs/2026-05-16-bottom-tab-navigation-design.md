# Bottom Tab Navigation Design Document

## Purpose
Implement a custom bottom tab navigation system with a smooth animated active indicator for the Lingora app.

## Proposed Architecture
- Introduce a new route group: `app/(tabs)`
- Routes:
    - `index` (Home)
    - `learn`
    - `ai-teacher`
    - `chat`
    - `profile`
- Custom Tab Bar Component:
    - Custom implementation using `expo-router`'s `Tabs` with a custom `tabBar` prop.
    - Animation handled by `react-native-reanimated`.
    - Active tab will show an icon centered in a colored circle (no label).
    - Inactive tabs will display both the icon and label.
    - Smooth animated transition when moving between tabs.

## UI Components
- `CustomTabBar`: The main wrapper for the tab bar.
- `TabItem`: Component for individual tabs to manage state and animation.
- `ActiveIndicator`: The animated circle element that moves between tabs.

## Implementation Details
- Use `react-native-reanimated` for the indicator movement.
- Maintain simple placeholder screens for now: Home, Learn, AI Teacher, Chat, and Profile.
- NativeWind/Tailwind will be used for styling the structure, with `StyleSheet` where animation/conditional logic is complex.

## Success Criteria
- Navigation works correctly between all tabs.
- Active tab uses the circular indicator design.
- Animated transition is smooth.
- No label is visible on the active tab's indicator.
- Inactive tabs show labels.
- Layout matches design references provided.
