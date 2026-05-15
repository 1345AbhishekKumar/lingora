import { Text, View } from "react-native";
import { Image } from "expo-image";
import { images } from "@/constants/images";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-background px-4">
      <Image 
        source={images.mascotLogo} 
        style={{ width: 120, height: 120 }} 
        contentFit="contain"
      />
      <Text className="text-h1 text-primary mt-4 mb-2">lingua</Text>
      <Text className="text-body-large text-text-secondary text-center mb-8">
        Learn new languages with AI-powered interactive lessons.
      </Text>
      <View className="bg-primary px-8 py-4 rounded-full shadow-sm">
        <Text className="text-h4 text-background">Get Started</Text>
      </View>
    </View>
  );
}
