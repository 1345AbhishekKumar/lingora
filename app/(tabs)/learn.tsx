import { images } from "@/constants/images";
import { lessons } from "@/data/lessons";
import { units } from "@/data/units";
import { useLanguageStore } from "@/store/useLanguageStore";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function LearnScreen() {
  const { selectedLanguage } = useLanguageStore();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<"lessons" | "practice">("lessons");

  const langId = selectedLanguage?.id || "es";

  const unit = useMemo(() => {
    return units.find((u) => u.languageId === langId) || units[0];
  }, [langId]);

  const unitLessons = useMemo(() => {
    return lessons
      .filter((l) => l.unitId === unit.id)
      .sort((a, b) => a.order - b.order);
  }, [unit.id]);

  const practiceItems = [
    {
      id: 1,
      title: "Vocabulary Battle",
      subtitle: "Train your memory & speed",
      icon: "zap",
      color: "#EEF2FF",
      iconColor: "#5B4CFF",
    },
    {
      id: 2,
      title: "Speaking Practice",
      subtitle: "Improve pronunciation",
      icon: "mic",
      color: "#ECFDF3",
      iconColor: "#16A34A",
    },
    {
      id: 3,
      title: "Listening Challenge",
      subtitle: "Understand native speech",
      icon: "headphones",
      color: "#FFF7ED",
      iconColor: "#EA580C",
    },
    {
      id: 4,
      title: "Daily Quiz",
      subtitle: "5 minute quick challenge",
      icon: "award",
      color: "#F5F3FF",
      iconColor: "#7C3AED",
    },
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FAFAFC",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 120,
        }}
      >
        {/* HEADER */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingTop: 10,
            paddingBottom: 12,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flex: 1,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                if (router.canGoBack()) router.back();
              }}
              style={{
                marginRight: 8,
              }}
            >
              <Feather name="chevron-left" size={24} color="#111827" />
            </TouchableOpacity>

            <View style={{ flex: 1 }}>
              <Text
                numberOfLines={1}
                style={{
                  fontFamily: "Poppins-SemiBold",
                  fontSize: 20,
                  color: "#111827",
                  lineHeight: 24,
                }}
              >
                {unit.title.split(": ")[1] || unit.title}
              </Text>

              <Text
                style={{
                  fontFamily: "Poppins-Regular",
                  fontSize: 13,
                  color: "#8F96A3",
                  marginTop: 2,
                }}
              >
                {unit.title.split(": ")[0] || `Unit ${unit.order}`} • 3 /{" "}
                {unitLessons.length || 6} lessons
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={{
              width: 34,
              height: 34,
              borderRadius: 12,
              backgroundColor: "#FFF6E7",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Feather name="bookmark" size={18} color="#F4A623" />
          </TouchableOpacity>
        </View>

        {/* HERO */}
        <View
          style={{
            paddingHorizontal: 18,
          }}
        >
          <View
            style={{
              overflow: "hidden",
              borderRadius: 28,
              backgroundColor: "#EDE9FE",
            }}
          >
            <Image
              source={images.mascotAuth}
              resizeMode="cover"
              style={{
                width: "100%",
                height: 205,
              }}
            />

            {/* OVERLAY */}
            <View
              style={{
                position: "absolute",
                bottom: 14,
                left: 14,
                backgroundColor: "rgba(255,255,255,0.92)",
                paddingHorizontal: 14,
                paddingVertical: 8,
                borderRadius: 14,
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-SemiBold",
                  fontSize: 14,
                  color: "#111827",
                }}
              >
                Continue Learning
              </Text>

              <Text
                style={{
                  fontFamily: "Poppins-Regular",
                  fontSize: 12,
                  color: "#6B7280",
                  marginTop: 2,
                }}
              >
                64% completed
              </Text>
            </View>
          </View>
        </View>

        {/* TABS */}
        <View
          style={{
            marginTop: -24,
            marginHorizontal: 24,
            backgroundColor: "#F4F4F8",
            borderRadius: 20,
            padding: 4,
            flexDirection: "row",
            zIndex: 20,

            shadowColor: "#000",
            shadowOpacity: 0.03,
            shadowRadius: 10,
            shadowOffset: {
              width: 0,
              height: 4,
            },
            elevation: 2,
          }}
        >
          {/* LESSON TAB */}
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setActiveTab("lessons")}
            style={{
              flex: 1,
              backgroundColor:
                activeTab === "lessons" ? "#FFFFFF" : "transparent",
              borderRadius: 16,
              paddingVertical: 11,
              alignItems: "center",
              justifyContent: "center",

              borderBottomWidth: activeTab === "lessons" ? 2 : 0,

              borderBottomColor: "#5B4CFF",

              shadowColor: "#000",
              shadowOpacity: activeTab === "lessons" ? 0.04 : 0,

              shadowRadius: 6,

              shadowOffset: {
                width: 0,
                height: 3,
              },

              elevation: activeTab === "lessons" ? 2 : 0,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 16,
                color: activeTab === "lessons" ? "#5B4CFF" : "#6E7485",
              }}
            >
              Lessons
            </Text>
          </TouchableOpacity>

          {/* PRACTICE TAB */}
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setActiveTab("practice")}
            style={{
              flex: 1,
              backgroundColor:
                activeTab === "practice" ? "#FFFFFF" : "transparent",

              borderRadius: 16,
              paddingVertical: 11,
              alignItems: "center",
              justifyContent: "center",

              borderBottomWidth: activeTab === "practice" ? 2 : 0,

              borderBottomColor: "#5B4CFF",

              shadowColor: "#000",
              shadowOpacity: activeTab === "practice" ? 0.04 : 0,

              shadowRadius: 6,

              shadowOffset: {
                width: 0,
                height: 3,
              },

              elevation: activeTab === "practice" ? 2 : 0,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 16,
                color: activeTab === "practice" ? "#5B4CFF" : "#6E7485",
              }}
            >
              Practice
            </Text>
          </TouchableOpacity>
        </View>

        {/* LESSONS TAB CONTENT */}
        {activeTab === "lessons" && (
          <View
            style={{
              paddingHorizontal: 18,
              marginTop: 18,
            }}
          >
            {unitLessons.map((lesson, index) => {
              let status = "locked";

              if (index < 2) status = "completed";
              else if (index === 2) status = "in_progress";

              return (
                <TouchableOpacity
                  key={lesson.id}
                  activeOpacity={0.92}
                  onPress={() =>
                    router.push({
                      pathname: "/lesson/[id]",
                      params: { id: lesson.id },
                    })
                  }
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: 20,
                    paddingHorizontal: 18,
                    paddingVertical: 14,
                    marginBottom: 14,

                    borderWidth: status === "in_progress" ? 1.5 : 1,

                    borderColor:
                      status === "in_progress" ? "#8A7CFF" : "#ECECF3",

                    shadowColor: "#000",
                    shadowOpacity: 0.025,
                    shadowRadius: 8,
                    shadowOffset: {
                      width: 0,
                      height: 3,
                    },
                    elevation: 1,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        paddingRight: 12,
                      }}
                    >
                      <Text
                        style={{
                          fontFamily:
                            status === "in_progress"
                              ? "Poppins-SemiBold"
                              : "Poppins-Medium",

                          fontSize: 12,

                          color:
                            status === "in_progress" ? "#6B5CFF" : "#A0A7B5",

                          marginBottom: 2,
                        }}
                      >
                        Lesson {index + 1}
                      </Text>

                      <Text
                        style={{
                          fontFamily: "Poppins-Medium",

                          fontSize: 16,

                          lineHeight: 22,

                          color: "#111827",

                          marginBottom: status === "locked" ? 3 : 2,
                        }}
                      >
                        {lesson.title}
                      </Text>

                      {status === "in_progress" && (
                        <Text
                          style={{
                            fontFamily: "Poppins-Medium",

                            fontSize: 13,

                            color: "#6B5CFF",
                          }}
                        >
                          In progress
                        </Text>
                      )}

                      {status === "locked" && (
                        <Text
                          style={{
                            fontFamily: "Poppins-Regular",

                            fontSize: 12,

                            color: "#A0A7B5",
                          }}
                        >
                          0 / {lesson.activities?.length || 6} lessons
                        </Text>
                      )}
                    </View>

                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {status === "completed" && (
                        <View
                          style={{
                            width: 28,
                            height: 28,
                            borderRadius: 999,
                            backgroundColor: "#33D13F",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Feather name="check" size={16} color="#FFFFFF" />
                        </View>
                      )}

                      {status === "in_progress" && (
                        <Image
                          source={{
                            uri: "https://i.imgur.com/l3XwVJb.png",
                          }}
                          resizeMode="contain"
                          style={{
                            width: 28,
                            height: 28,
                          }}
                        />
                      )}

                      {status === "locked" && (
                        <Feather name="lock" size={18} color="#7C84A0" />
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        )}

        {/* PRACTICE TAB CONTENT */}
        {activeTab === "practice" && (
          <View
            style={{
              paddingHorizontal: 18,
              marginTop: 18,
            }}
          >
            {/* STATS */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 16,
              }}
            >
              {[
                {
                  label: "XP",
                  value: "240",
                },
                {
                  label: "Streak",
                  value: "12",
                },
                {
                  label: "Accuracy",
                  value: "91%",
                },
              ].map((item) => (
                <View
                  key={item.label}
                  style={{
                    flex: 1,
                    backgroundColor: "#FFFFFF",
                    marginHorizontal: 4,
                    borderRadius: 18,
                    paddingVertical: 16,
                    alignItems: "center",

                    shadowColor: "#000",
                    shadowOpacity: 0.03,
                    shadowRadius: 8,
                    shadowOffset: {
                      width: 0,
                      height: 4,
                    },
                    elevation: 2,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Poppins-SemiBold",
                      fontSize: 18,
                      color: "#111827",
                    }}
                  >
                    {item.value}
                  </Text>

                  <Text
                    style={{
                      fontFamily: "Poppins-Regular",
                      fontSize: 12,
                      color: "#8F96A3",
                      marginTop: 2,
                    }}
                  >
                    {item.label}
                  </Text>
                </View>
              ))}
            </View>

            {/* PRACTICE CARDS */}
            {practiceItems.map((item) => (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.9}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 22,
                  padding: 18,
                  marginBottom: 16,

                  shadowColor: "#000",
                  shadowOpacity: 0.03,
                  shadowRadius: 10,
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  elevation: 2,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  {/* ICON */}
                  <View
                    style={{
                      width: 58,
                      height: 58,
                      borderRadius: 18,
                      backgroundColor: item.color,
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: 14,
                    }}
                  >
                    <Feather
                      name={item.icon as any}
                      size={24}
                      color={item.iconColor}
                    />
                  </View>

                  {/* TEXT */}
                  <View
                    style={{
                      flex: 1,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Poppins-SemiBold",
                        fontSize: 16,
                        color: "#111827",
                      }}
                    >
                      {item.title}
                    </Text>

                    <Text
                      style={{
                        fontFamily: "Poppins-Regular",
                        fontSize: 13,
                        color: "#8F96A3",
                        marginTop: 3,
                      }}
                    >
                      {item.subtitle}
                    </Text>
                  </View>

                  {/* ARROW */}
                  <View
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 12,
                      backgroundColor: "#F4F4F8",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Feather name="arrow-right" size={18} color="#5B4CFF" />
                  </View>
                </View>
              </TouchableOpacity>
            ))}

            {/* BIG CTA */}
            <TouchableOpacity
              activeOpacity={0.9}
              style={{
                marginTop: 6,
                backgroundColor: "#5B4CFF",
                borderRadius: 24,
                paddingVertical: 18,
                alignItems: "center",

                shadowColor: "#5B4CFF",
                shadowOpacity: 0.25,
                shadowRadius: 12,
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                elevation: 5,
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-SemiBold",
                  fontSize: 16,
                  color: "#FFFFFF",
                }}
              >
                Start Smart Practice
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
