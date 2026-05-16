import { ClerkLoaded, ClerkProvider } from "@clerk/expo";
import { tokenCache } from "@clerk/expo/token-cache";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { PostHogProvider } from "posthog-react-native";
import { useCallback } from "react";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../global.css";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;
const posthogKey = process.env.EXPO_PUBLIC_POSTHOG_KEY;
const posthogHost = process.env.EXPO_PUBLIC_POSTHOG_HOST;

if (!publishableKey) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}

if (!posthogKey || !posthogHost) {
  throw new Error(
    "Add EXPO_PUBLIC_POSTHOG_KEY and EXPO_PUBLIC_POSTHOG_HOST to the .env file",
  );
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (loaded || error) {
      // Small delay to ensure layout calculation is finished across all layers
      await new Promise((resolve) => setTimeout(resolve, 50));
      await SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <PostHogProvider apiKey={posthogKey} options={{ host: posthogHost }}>
      <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
        <ClerkLoaded>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
              <Stack screenOptions={{ headerShown: false }} />
              <StatusBar style="auto" />
            </View>
          </GestureHandlerRootView>
        </ClerkLoaded>
      </ClerkProvider>
    </PostHogProvider>
  );
}
