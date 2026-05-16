import React, { useEffect } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants/images";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Animated, {
  FadeIn,
  FadeInDown,
  withRepeat,
  withSequence,
  withTiming,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

export default function OnboardingScreen() {
  const router = useRouter();

  // Floating animations
  const mascotTranslateY = useSharedValue(0);
  const bubble1TranslateY = useSharedValue(0);
  const bubble2TranslateY = useSharedValue(0);
  const bubble3TranslateY = useSharedValue(0);

  useEffect(() => {
    // Mascot floating
    mascotTranslateY.value = withRepeat(
      withSequence(
        withTiming(-6, { duration: 3000 }),
        withTiming(0, { duration: 3000 })
      ),
      -1,
      true
    );

    // Bubbles floating at different rates
    bubble1TranslateY.value = withRepeat(
      withSequence(withTiming(-4, { duration: 2000 }), withTiming(0, { duration: 2000 })),
      -1,
      true
    );
    bubble2TranslateY.value = withRepeat(
      withSequence(withTiming(4, { duration: 2500 }), withTiming(0, { duration: 2500 })),
      -1,
      true
    );
    bubble3TranslateY.value = withRepeat(
      withSequence(withTiming(-3, { duration: 2200 }), withTiming(0, { duration: 2200 })),
      -1,
      true
    );
  }, [mascotTranslateY, bubble1TranslateY, bubble2TranslateY, bubble3TranslateY]);

  const mascotStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: mascotTranslateY.value }],
  }));
  const bubble1Style = useAnimatedStyle(() => ({
    transform: [{ translateY: bubble1TranslateY.value }, { rotate: "-6deg" }],
  }));
  const bubble2Style = useAnimatedStyle(() => ({
    transform: [{ translateY: bubble2TranslateY.value }, { rotate: "6deg" }],
  }));
  const bubble3Style = useAnimatedStyle(() => ({
    transform: [{ translateY: bubble3TranslateY.value }, { rotate: "4deg" }],
  }));

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView 
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{ flexGrow: 1, width: "100%", maxWidth: 500, alignSelf: "center", paddingHorizontal: 24, paddingBottom: 24 }}
      >
        
        {/* Logo Header */}
        <Animated.View entering={FadeIn.delay(100).duration(600)} style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 32 }}>
          <Image
            source={images.mascotLogo}
            style={{ width: 36, height: 36 }}
            contentFit="contain"
          />
          <Text style={{ fontFamily: "Poppins-Bold", fontSize: 24, color: "#0A1245", marginLeft: 8, marginTop: 4 }}>
            Lingora
          </Text>
        </Animated.View>

        {/* Hero Text Section */}
        <Animated.View entering={FadeInDown.delay(200).duration(600)} style={{ marginBottom: 16 }}>
          <Text style={{ fontFamily: "Poppins-Bold", fontSize: 40, lineHeight: 48, color: "#0A1245" }}>
            Your AI language{"\n"}
            <Text style={{ color: "#5B3DF5" }}>teacher.</Text>
          </Text>
          <Text style={{ fontFamily: "Poppins-Regular", fontSize: 16, lineHeight: 24, color: "#7B8199", marginTop: 12, paddingRight: 20 }}>
            Real conversations, personalized lessons, anytime, anywhere.
          </Text>
        </Animated.View>

        {/* Mascot & Bubbles Area */}
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", minHeight: 320, paddingVertical: 20 }}>
          <View style={{ width: 280, height: 280, alignItems: "center", justifyContent: "center", position: "relative" }}>
            
            {/* Mascot Illustration */}
            <Animated.View entering={FadeIn.delay(400).duration(600)} style={[mascotStyle, { width: "100%", height: "100%", alignItems: "center", justifyContent: "center", zIndex: 5 }]}>
              <Image
                source={images.mascotWelcome}
                style={{ width: 250, height: 250 }}
                contentFit="contain"
              />
              {/* Soft shadow beneath illustration */}
              <View style={{ position: "absolute", bottom: 10, width: 140, height: 16, backgroundColor: "rgba(0,0,0,0.06)", borderRadius: 100, transform: [{ scaleY: 0.5 }] }} />
            </Animated.View>

            {/* Bubbles */}
            <Animated.View 
              entering={FadeIn.delay(600).duration(800)}
              style={[{ position: "absolute", top: 40, left: -20, zIndex: 10 }, bubble1Style]}
            >
              <View style={{ backgroundColor: "#F0F4FF", paddingHorizontal: 16, paddingVertical: 8, borderRadius: 16, borderWidth: 1, borderColor: "#E5E9F0" }}>
                <Text style={{ fontFamily: "Poppins-Medium", fontSize: 15, color: "#0A1245" }}>Hello!</Text>
              </View>
            </Animated.View>

            <Animated.View 
              entering={FadeIn.delay(800).duration(800)}
              style={[{ position: "absolute", top: -10, right: 20, zIndex: 10 }, bubble2Style]}
            >
              <View style={{ backgroundColor: "#F9F0FF", paddingHorizontal: 16, paddingVertical: 8, borderRadius: 16, borderWidth: 1, borderColor: "#E5E9F0" }}>
                <Text style={{ fontFamily: "Poppins-Medium", fontSize: 15, color: "#5B3DF5" }}>¡Hola!</Text>
              </View>
            </Animated.View>

            <Animated.View 
              entering={FadeIn.delay(1000).duration(800)}
              style={[{ position: "absolute", top: 90, right: -30, zIndex: 10 }, bubble3Style]}
            >
              <View style={{ backgroundColor: "#FFF7EE", paddingHorizontal: 16, paddingVertical: 8, borderRadius: 16, borderWidth: 1, borderColor: "#E5E9F0" }}>
                <Text style={{ fontFamily: "Poppins-Medium", fontSize: 15, color: "#FF8A00" }}>你好!</Text>
              </View>
            </Animated.View>

          </View>
        </View>

        {/* Bottom Section */}
        <View style={{ marginTop: "auto", paddingTop: 16 }}>
          {/* CTA Section */}
          <Animated.View entering={FadeInDown.delay(500).duration(700)}>
            <View style={styles.buttonShadowContainer}>
              <Pressable
                style={({ pressed }) => [
                  styles.button,
                  pressed && { transform: [{ scale: 0.98 }], opacity: 0.95 }
                ]}
                android_ripple={{ color: 'rgba(255, 255, 255, 0.2)' }}
                onPress={() => router.push("/(auth)/sign-up")}
              >
                <Text style={{ fontFamily: "Poppins-Bold", fontSize: 18, color: "#FFFFFF" }}>Get Started</Text>
                <View style={{ position: "absolute", right: 24 }}>
                  <Feather name="chevron-right" size={24} color="#FFFFFF" />
                </View>
              </Pressable>
            </View>
          </Animated.View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonShadowContainer: {
    borderRadius: 20,
    elevation: 8,
    shadowColor: "#5B3DF5",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    backgroundColor: "#FFFFFF",
  },
  button: {
    height: 60,
    backgroundColor: "#5B3DF5",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  }
});
