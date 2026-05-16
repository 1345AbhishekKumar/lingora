import { images } from "@/constants/images";
import { languages } from "@/data/languages";
import { useLanguageStore } from "@/store/useLanguageStore";
import { Language } from "@/types/learning";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Pressable,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const CARD_RADIUS = 24;

export default function LanguageSelectionScreen() {
  const router = useRouter();
  const { selectedLanguage, setSelectedLanguage } = useLanguageStore();

  const handleSelect = (language: Language) => {
    setSelectedLanguage(language);
  };

  const renderLanguageCard = ({ item, index }: { item: Language; index: number }) => {
    const isSelected = selectedLanguage?.id === item.id;

    return (
      <Animated.View entering={FadeInDown.delay(index * 50).springify().damping(15)}>
        <Pressable
          onPress={() => handleSelect(item)}
          style={[
            {
              flexDirection: "row",
              alignItems: "center",
              minHeight: 84,
              paddingHorizontal: 16,
              paddingVertical: 16,
              borderRadius: CARD_RADIUS,
              borderWidth: isSelected ? 2 : 1,
              borderColor: isSelected ? "#A855F7" : "#E2E8F0",
              backgroundColor: isSelected ? "#FDFBFF" : "#FFFFFF",
              shadowColor: "#0F172A",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.05,
              shadowRadius: 6,
              elevation: 2,
            },
          ]}
        >
          <View
            style={{
              width: 52,
              height: 52,
              borderRadius: 26,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 16,
              backgroundColor: "#F8FAFC",
              borderWidth: 1,
              borderColor: "#F1F5F9",
            }}
          >
            <Text style={{ fontSize: 26 }}>{item.flag}</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 18,
                lineHeight: 24,
                color: "#1E293B",
                letterSpacing: -0.2,
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                marginTop: 2,
                fontFamily: "Poppins-Medium",
                fontSize: 14,
                lineHeight: 20,
                color: "#64748B",
              }}
            >
              Popular language
            </Text>
          </View>

          {isSelected && (
            <View
              style={{
                width: 32,
                height: 32,
                borderRadius: 16,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#A855F7",
              }}
            >
              <Ionicons name="checkmark" size={18} color="#FFFFFF" />
            </View>
          )}
        </Pressable>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={{ flex: 1 }}>
        {/* Header */}
        <View style={{ paddingHorizontal: 20, paddingTop: 12, paddingBottom: 20 }}>
          <Text
            style={{
              fontFamily: "Poppins-Bold",
              fontSize: 24,
              lineHeight: 32,
              color: "#1E293B",
              textAlign: "center",
            }}
          >
            I want to learn...
          </Text>
        </View>

        {/* Search */}
        <View style={{ paddingHorizontal: 20, marginBottom: 24 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              height: 56,
              paddingHorizontal: 16,
              borderRadius: 20,
              backgroundColor: "#F1F5F9",
            }}
          >
            <Ionicons name="search" size={20} color="#94A3B8" />
            <TextInput
              placeholder="Search languages"
              placeholderTextColor="#94A3B8"
              style={{
                flex: 1,
                marginLeft: 12,
                fontFamily: "Poppins-Medium",
                fontSize: 16,
                color: "#1E293B",
              }}
            />
          </View>
        </View>

        {/* List */}
        <FlatList
          data={languages}
          renderItem={renderLanguageCard}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingBottom: 200,
          }}
        />

        {/* Footer Confirmation */}
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: 20,
            paddingBottom: 30,
            backgroundColor: "#FFFFFF",
            borderTopWidth: 1,
            borderColor: "#F1F5F9",
          }}
        >
          <TouchableOpacity
            onPress={() => router.replace("/")}
            style={{
              height: 56,
              borderRadius: 20,
              backgroundColor: selectedLanguage ? "#A855F7" : "#E2E8F0",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-Bold",
                fontSize: 16,
                color: selectedLanguage ? "#FFFFFF" : "#94A3B8",
              }}
            >
              Continue
            </Text>
          </TouchableOpacity>
        </View>

        {/* Illustration - Integrated cleaner */}
        <View
          pointerEvents="none"
          style={{
            position: "absolute",
            bottom: 80,
            right: -20,
            width: 120,
            height: 120,
            opacity: 0.8,
          }}
        >
          <Image
            source={images.earth}
            style={{ width: "100%", height: "100%" }}
            contentFit="contain"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
