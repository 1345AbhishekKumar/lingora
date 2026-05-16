import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView, Alert, Platform, KeyboardAvoidingView } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants/images";
import { Feather, FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { VerificationModal } from "@/components/VerificationModal";
import { useSignUp, useSSO } from "@clerk/expo";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

type SocialStrategy = "oauth_google" | "oauth_facebook" | "oauth_x";

export default function SignUpScreen() {
  const router = useRouter();
  const { signUp } = useSignUp();
  const { startSSOFlow } = useSSO();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClerkError = (error: unknown, fallbackMessage: string) => {
    if (!error || typeof error !== "object") {
      Alert.alert("Sign up failed", fallbackMessage);
      return;
    }

    const clerkError = error as {
      status?: number;
      retryAfter?: number;
      errors?: { message?: string }[];
    };
    
    const message = clerkError.errors && clerkError.errors.length > 0
      ? clerkError.errors.map(err => err.message).join('\n')
      : fallbackMessage;

    if (clerkError.status === 429) {
      const retryAfter = clerkError.retryAfter ?? 60;
      Alert.alert("Too many attempts", `${message}\nTry again in ${retryAfter} seconds.`);
      return;
    }

    Alert.alert("Sign up failed", message);
  };

  const handleSignUp = async () => {
    if (!email || !password || isSubmitting) return;
    setIsSubmitting(true);
    
    try {
      const { error } = await signUp.password({
        emailAddress: email,
        password,
      });
      if (error) {
        console.error("Error signing up:", JSON.stringify(error, null, 2));
        handleClerkError(error, "Please check your details and try again.");
        return;
      }

      const { error: sendCodeError } = await signUp.verifications.sendEmailCode();
      if (sendCodeError) {
        console.error("Error sending verification code:", JSON.stringify(sendCodeError, null, 2));
        handleClerkError(sendCodeError, "We couldn't send the verification code right now.");
        return;
      }
      setModalVisible(true);
    } catch (err: unknown) {
      console.error("Error signing up:", err);
      handleClerkError(err, "Something went wrong while creating your account.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerify = async (code: string) => {
    try {
      const { error } = await signUp.verifications.verifyEmailCode({
        code,
      });
      if (error) {
        console.error("Error verifying sign-up code:", JSON.stringify(error, null, 2));
        return false;
      }

      if (signUp.status === "complete") {
        const { error: finalizeError } = await signUp.finalize();
        if (finalizeError) {
          console.error("Error finalizing sign up:", JSON.stringify(finalizeError, null, 2));
          return false;
        }
        router.replace("/");
        return true;
      } else {
        console.error("Sign up not complete. Current status:", signUp.status);
        return false;
      }
    } catch (err: unknown) {
      console.error("Error verifying:", err);
      return false;
    }
  };

  const handleSocialAuth = async (strategy: SocialStrategy, providerLabel: string) => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy,
        redirectUrl: Linking.createURL("/"),
      });

      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
        router.replace("/");
        return;
      }

      Alert.alert(`${providerLabel} sign in`, "The sign-in flow was not completed.");
    } catch (err: unknown) {
      console.error(`Error signing up with ${providerLabel}:`, err);
      handleClerkError(err, `Couldn't continue with ${providerLabel}. Please try again.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView 
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 24, paddingBottom: 24 }}
        >
          
          {/* Top Navigation Zone */}
          <View style={styles.topNav}>
            <Pressable onPress={() => router.back()} style={styles.backButton}>
              <Feather name="arrow-left" size={24} color="#0A1245" />
            </Pressable>
          </View>

          {/* Hero Zone */}
          <View style={styles.heroZone}>
            <Text style={styles.heading}>Create your account</Text>
            <Text style={styles.subheading}>Start your language journey today ✨</Text>
          </View>

          {/* Mascot Zone */}
          <View style={styles.mascotZone}>
            <Image
              source={images.mascotAuth || images.mascotWelcome}
              style={styles.mascotImage}
              contentFit="contain"
            />
          </View>

          {/* Form Zone */}
          <View style={styles.formZone}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor="#B0B4C9"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Password</Text>
              <View style={styles.passwordInputContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Create a password"
                  placeholderTextColor="#B0B4C9"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                />
                <Pressable 
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeIcon}
                >
                  <Feather name={showPassword ? "eye" : "eye-off"} size={20} color="#7B8199" />
                </Pressable>
              </View>
            </View>
          </View>

          {/* CTA Zone */}
          <View style={styles.ctaZone}>
            <Pressable
              style={({ pressed }) => [
                styles.primaryButton,
                isSubmitting && styles.primaryButtonDisabled,
                pressed && { transform: [{ scale: 0.98 }], opacity: 0.95 }
              ]}
              onPress={handleSignUp}
              disabled={isSubmitting}
            >
              <Text style={styles.primaryButtonText}>
                {isSubmitting ? "Please wait..." : "Sign Up"}
              </Text>
            </Pressable>
          </View>

          {/* Social Login Zone */}
          <View style={styles.socialZone}>
            <View style={styles.dividerContainer}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>or continue with</Text>
              <View style={styles.dividerLine} />
            </View>

            <View style={styles.socialButtonsContainer}>
              <Pressable
                style={styles.socialButton}
                onPress={() => handleSocialAuth("oauth_google", "Google")}
                disabled={isSubmitting}
              >
                <FontAwesome5 name="google" size={24} color="#DB4437" />
              </Pressable>
              <Pressable
                style={styles.socialButton}
                onPress={() => handleSocialAuth("oauth_facebook", "Facebook")}
                disabled={isSubmitting}
              >
                <FontAwesome5 name="facebook" size={24} color="#1877F2" />
              </Pressable>
              <Pressable
                style={styles.socialButton}
                onPress={() => handleSocialAuth("oauth_x", "X")}
                disabled={isSubmitting}
              >
                <FontAwesome6 name="x-twitter" size={24} color="#000000" />
              </Pressable>
            </View>
          </View>

          {/* Footer Zone */}
          <View style={styles.footerZone}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <Pressable onPress={() => router.replace("/(auth)/sign-in")}>
              <Text style={styles.footerLink}>Log in</Text>
            </Pressable>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>

      <VerificationModal 
        visible={modalVisible} 
        onClose={() => setModalVisible(false)} 
        email={email}
        onVerify={handleVerify}
      />
      <View nativeID="clerk-captcha" style={{ width: 1, height: 1 }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topNav: {
    height: 56,
    justifyContent: "center",
    marginBottom: 8,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
  },
  heroZone: {
    marginBottom: 20,
  },
  heading: {
    fontFamily: "Poppins-Bold",
    fontSize: 28,
    color: "#0A1245",
    lineHeight: 36,
    marginBottom: 8,
  },
  subheading: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#7B8199",
  },
  mascotZone: {
    alignItems: "center",
    justifyContent: "center",
    height: 160,
    marginBottom: 24,
    zIndex: 10,
  },
  mascotImage: {
    width: 140,
    height: 140,
    position: "absolute",
    bottom: -10,
  },
  formZone: {
    gap: 16,
    marginBottom: 32,
  },
  inputContainer: {
    gap: 8,
  },
  inputLabel: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: "#0A1245",
    marginLeft: 4,
  },
  input: {
    height: 56,
    backgroundColor: "#F7F7FA",
    borderRadius: 16,
    paddingHorizontal: 16,
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#0A1245",
  },
  passwordInputContainer: {
    height: 56,
    backgroundColor: "#F7F7FA",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  passwordInput: {
    flex: 1,
    height: "100%",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#0A1245",
  },
  eyeIcon: {
    padding: 8,
  },
  ctaZone: {
    marginBottom: 32,
  },
  primaryButton: {
    height: 56,
    backgroundColor: "#5B3DF5",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#5B3DF5",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  primaryButtonDisabled: {
    opacity: 0.7,
  },
  primaryButtonText: {
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    color: "#FFFFFF",
  },
  socialZone: {
    marginBottom: 32,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E5E9F0",
  },
  dividerText: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#7B8199",
    paddingHorizontal: 16,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
  },
  socialButton: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E9F0",
    alignItems: "center",
    justifyContent: "center",
  },
  footerZone: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
  },
  footerText: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#7B8199",
  },
  footerLink: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
    color: "#5B3DF5",
  },
});
