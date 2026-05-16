// app/(tabs)/_layout.tsx

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Tabs } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="learn" options={{ title: "Learn" }} />
      <Tabs.Screen name="ai-teacher" options={{ title: "AI Chat" }} />
      <Tabs.Screen name="chat" options={{ title: "Progress" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}

function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  const getIcon = (routeName: string, isFocused: boolean) => {
    const color = isFocused ? "#6C4DFF" : "#94A3B8";

    switch (routeName) {
      case "index":
        return (
          <Ionicons
            name={isFocused ? "home" : "home-outline"}
            size={24}
            color={color}
          />
        );

      case "learn":
        return (
          <Ionicons
            name={isFocused ? "book" : "book-outline"}
            size={24}
            color={color}
          />
        );

      case "chat":
        return (
          <Ionicons
            name={isFocused ? "stats-chart" : "stats-chart-outline"}
            size={24}
            color={color}
          />
        );

      case "profile":
        return (
          <Ionicons
            name={isFocused ? "person" : "person-outline"}
            size={24}
            color={color}
          />
        );

      default:
        return null;
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#fff",
        height: 90 + insets.bottom,
        paddingBottom: insets.bottom,
        borderTopWidth: 1,
        borderTopColor: "#F1F5F9",
        alignItems: "center",
        justifyContent: "space-around",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 10,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const isCenter = index === 2;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        if (isCenter) {
          return (
            <TouchableOpacity
              key={route.key}
              activeOpacity={0.8}
              onPress={onPress}
              style={{
                marginTop: -40,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 999,
                  backgroundColor: "#6C4DFF",
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 6,
                  borderColor: "#fff",
                  shadowColor: "#6C4DFF",
                  shadowOffset: { width: 0, height: 8 },
                  shadowOpacity: 0.25,
                  shadowRadius: 12,
                  elevation: 10,
                }}
              >
                <MaterialCommunityIcons
                  name="robot-outline"
                  size={28}
                  color="#fff"
                />

                <Text
                  style={{
                    color: "#fff",
                    fontSize: 11,
                    marginTop: 2,
                    fontWeight: "700",
                  }}
                >
                  AI Chat
                </Text>
              </View>
            </TouchableOpacity>
          );
        }

        return (
          <TouchableOpacity
            key={route.key}
            activeOpacity={0.7}
            onPress={onPress}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {getIcon(route.name, isFocused)}

            <Text
              style={{
                marginTop: 6,
                fontSize: 12,
                fontWeight: "600",
                color: isFocused ? "#6C4DFF" : "#94A3B8",
              }}
            >
              {options.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
