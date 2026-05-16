import { images } from "@/constants/images";
import { lessons } from "@/data/lessons";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function AudioLessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  // Parse lesson details
  const lesson = lessons.find((l) => l.id === id) || lessons[0];
  const languageName = lesson.id.split("-")[1].toUpperCase();
  const phrase = lesson.activities?.find((a) => a.type === "PHRASE")?.phrases?.[0];

  const handleEndCall = () => {
    router.back();
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingTop: 10,
            paddingBottom: 16,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={handleEndCall} style={{ marginRight: 16 }}>
              <Feather name="chevron-left" size={28} color="#111827" />
            </TouchableOpacity>
            <View>
              <Text
                style={{
                  fontFamily: "Poppins-SemiBold",
                  fontSize: 20,
                  color: "#111827",
                  lineHeight: 24,
                }}
              >
                AI Teacher
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center", marginTop: 2 }}>
                <View
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: "#33D13F",
                    marginRight: 6,
                  }}
                />
                <Text
                  style={{
                    fontFamily: "Poppins-Medium",
                    fontSize: 13,
                    color: "#8F96A3",
                  }}
                >
                  Online
                </Text>
              </View>
            </View>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              style={{
                width: 36,
                height: 36,
                borderRadius: 18,
                backgroundColor: "#F4F4F8",
                justifyContent: "center",
                alignItems: "center",
                marginRight: 8,
              }}
            >
              <Feather name="video" size={18} color="#111827" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 36,
                height: 36,
                borderRadius: 18,
                backgroundColor: "#F4F4F8",
                justifyContent: "center",
                alignItems: "center",
                marginRight: 8,
              }}
            >
              <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 14, color: "#111827" }}>
                12
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 36,
                height: 36,
                borderRadius: 18,
                backgroundColor: "#F4F4F8",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather name="user" size={18} color="#111827" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Mascot / Video Area */}
        <View
          style={{
            marginHorizontal: 16,
            borderRadius: 24,
            overflow: "hidden",
            position: "relative",
            backgroundColor: "#D1D5DB",
            marginBottom: 20,
          }}
        >
          <ImageBackground
            source={{ uri: "https://i.imgur.com/e2oBkbD.jpeg" }} // Sample room background
            style={{
              paddingTop: 40,
              paddingBottom: 24,
              alignItems: "center",
            }}
            imageStyle={{ opacity: 0.8 }}
          >
            {/* Mascot Image */}
            <Image
              source={images.mascotAuth}
              style={{
                width: 260,
                height: 260,
                marginBottom: 20,
              }}
              resizeMode="contain"
            />

            {/* Speech Bubble */}
            <View
              style={{
                backgroundColor: "#FFFFFF",
                paddingHorizontal: 20,
                paddingVertical: 14,
                borderRadius: 20,
                borderBottomRightRadius: 4,
                flexDirection: "row",
                alignItems: "center",
                shadowColor: "#000",
                shadowOpacity: 0.1,
                shadowRadius: 10,
                shadowOffset: { width: 0, height: 4 },
                elevation: 4,
                width: "80%",
                marginBottom: 30,
              }}
            >
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontFamily: "Poppins-Medium",
                    fontSize: 16,
                    color: "#111827",
                    marginBottom: 2,
                  }}
                >
                  {phrase ? phrase.translation : "¡Muy bien!"}
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins-Regular",
                    fontSize: 14,
                    color: "#111827",
                  }}
                >
                  {phrase ? phrase.text : "That was great! 👏"}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 16,
                  backgroundColor: "#EEECFF",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 12,
                }}
              >
                <Ionicons name="volume-high" size={18} color="#5B4CFF" />
              </TouchableOpacity>
            </View>

            {/* Controls */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: "100%",
                paddingHorizontal: 10,
              }}
            >
              {/* Camera */}
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() => setIsVideoOff(!isVideoOff)}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    backgroundColor: "#FFFFFF",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 8,
                  }}
                >
                  <Feather
                    name={isVideoOff ? "video-off" : "video"}
                    size={22}
                    color="#111827"
                  />
                </TouchableOpacity>
                <Text style={{ fontFamily: "Poppins-Medium", fontSize: 12, color: "#FFFFFF" }}>
                  Camera
                </Text>
              </View>

              {/* Mic */}
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() => setIsMuted(!isMuted)}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    backgroundColor: "#FFFFFF",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 8,
                  }}
                >
                  <Feather
                    name={isMuted ? "mic-off" : "mic"}
                    size={22}
                    color="#111827"
                  />
                </TouchableOpacity>
                <Text style={{ fontFamily: "Poppins-Medium", fontSize: 12, color: "#FFFFFF" }}>
                  Mic
                </Text>
              </View>

              {/* Subtitles */}
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    backgroundColor: "#FFFFFF",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 8,
                  }}
                >
                  <View style={{ position: "relative" }}>
                    <Feather name="type" size={22} color="#111827" />
                  </View>
                </TouchableOpacity>
                <Text style={{ fontFamily: "Poppins-Medium", fontSize: 12, color: "#FFFFFF" }}>
                  Subtitles
                </Text>
              </View>

              {/* End Call */}
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                  onPress={handleEndCall}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    backgroundColor: "#FF4747",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 8,
                  }}
                >
                  <Feather name="phone-off" size={22} color="#FFFFFF" />
                </TouchableOpacity>
                <Text style={{ fontFamily: "Poppins-Medium", fontSize: 12, color: "#FFFFFF" }}>
                  End Call
                </Text>
              </View>
            </View>

            {/* User PiP */}
            <View
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                width: 80,
                height: 100,
                borderRadius: 16,
                backgroundColor: "#111827",
                overflow: "hidden",
                borderWidth: 2,
                borderColor: "#FFFFFF",
              }}
            >
              <Image
                source={{ uri: "https://i.pravatar.cc/150?img=11" }}
                style={{ width: "100%", height: "100%" }}
                resizeMode="cover"
              />
            </View>
          </ImageBackground>
        </View>

        {/* Speaking/Pronunciation/Grammar Card */}
        <View
          style={{
            marginHorizontal: 16,
            backgroundColor: "#FFFFFF",
            borderRadius: 20,
            padding: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            shadowColor: "#000",
            shadowOpacity: 0.05,
            shadowRadius: 10,
            shadowOffset: { width: 0, height: 4 },
            elevation: 2,
            marginBottom: 16,
          }}
        >
          <View style={{ alignItems: "center", flex: 1 }}>
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 13,
                color: "#111827",
                marginBottom: 4,
              }}
            >
              Speaking
            </Text>
            <Text style={{ fontFamily: "Poppins-Medium", fontSize: 13, color: "#33D13F" }}>
              Excellent
            </Text>
          </View>

          <View style={{ width: 1, backgroundColor: "#F3F4F6", height: "100%" }} />

          <View style={{ alignItems: "center", flex: 1 }}>
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 13,
                color: "#111827",
                marginBottom: 4,
              }}
            >
              Pronunciation
            </Text>
            <Text style={{ fontFamily: "Poppins-Medium", fontSize: 13, color: "#3B82F6" }}>
              Great
            </Text>
          </View>

          <View style={{ width: 1, backgroundColor: "#F3F4F6", height: "100%" }} />

          <View style={{ alignItems: "center", flex: 1 }}>
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 13,
                color: "#111827",
                marginBottom: 4,
              }}
            >
              Grammar
            </Text>
            <Text style={{ fontFamily: "Poppins-Medium", fontSize: 13, color: "#8B5CF6" }}>
              Good
            </Text>
          </View>
        </View>

        {/* Lesson Info Card */}
        <View
          style={{
            marginHorizontal: 16,
            backgroundColor: "#FFFFFF",
            borderRadius: 20,
            padding: 20,
            shadowColor: "#000",
            shadowOpacity: 0.05,
            shadowRadius: 10,
            shadowOffset: { width: 0, height: 4 },
            elevation: 2,
            marginBottom: 40,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins-SemiBold",
              fontSize: 16,
              color: "#111827",
              marginBottom: 8,
            }}
          >
            Lesson Context
          </Text>
          <Text style={{ fontFamily: "Poppins-Regular", fontSize: 14, color: "#4B5563", marginBottom: 4 }}>
            Language: <Text style={{ fontFamily: "Poppins-Medium", color: "#111827" }}>{languageName}</Text>
          </Text>
          <Text style={{ fontFamily: "Poppins-Regular", fontSize: 14, color: "#4B5563", marginBottom: 4 }}>
            Title: <Text style={{ fontFamily: "Poppins-Medium", color: "#111827" }}>{lesson.title}</Text>
          </Text>
          <Text style={{ fontFamily: "Poppins-Regular", fontSize: 14, color: "#4B5563" }}>
            Goal: <Text style={{ fontFamily: "Poppins-Medium", color: "#111827" }}>{lesson.goals?.[0]}</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
