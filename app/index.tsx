import { Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { images } from "@/constants/images";
import { Redirect, useRouter } from "expo-router";
import { useAuth, useClerk } from "@clerk/expo";
import { useLanguageStore } from "@/store/useLanguageStore";

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();
  const { signOut } = useClerk();
  const router = useRouter();
  const { selectedLanguage } = useLanguageStore();

  if (!isLoaded) return null;

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 justify-center items-center px-4">
        <Image 
          source={images.mascotLogo} 
          style={{ width: 120, height: 120 }} 
          contentFit="contain"
        />
        <Text className="text-h1 text-primary mt-4 mb-2">Lingora</Text>
        <Text className="text-body-large text-text-secondary text-center mb-8">
          Learn new languages with AI-powered interactive lessons.
        </Text>

        {selectedLanguage ? (
          <View className="items-center mb-8">
            <Text className="text-body-medium text-text-secondary mb-2">Learning:</Text>
            <View className="flex-row items-center bg-surface px-4 py-2 rounded-xl border border-border">
              <Text className="text-2xl mr-2">{selectedLanguage.flag}</Text>
              <Text className="text-h4">{selectedLanguage.name}</Text>
            </View>
            <Pressable 
              onPress={() => router.push("/language-selection")}
              className="mt-4"
            >
              <Text className="text-primary font-poppins-semibold">Change Language</Text>
            </Pressable>
          </View>
        ) : (
          <Pressable 
            onPress={() => router.push("/language-selection")}
            className="bg-secondary px-8 py-4 rounded-full shadow-sm mb-4"
          >
            <Text className="text-h4 text-white">Select Language</Text>
          </Pressable>
        )}

        <Pressable onPress={() => signOut()} className="bg-primary px-8 py-4 rounded-full shadow-sm mt-4">
          <Text className="text-h4 text-background">Sign Out</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
