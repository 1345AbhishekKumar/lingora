import React, { useState, useRef } from "react";
import { 
  View, 
  Text, 
  Modal, 
  TextInput, 
  Pressable, 
  StyleSheet, 
  KeyboardAvoidingView, 
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator
} from "react-native";
import { Feather } from "@expo/vector-icons";

interface VerificationModalProps {
  visible: boolean;
  onClose: () => void;
  email: string;
  onVerify: (code: string) => Promise<boolean>;
}

export const VerificationModal = ({ visible, onClose, email, onVerify }: VerificationModalProps) => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [isVerifying, setIsVerifying] = useState(false);
  const inputs = useRef<(TextInput | null)[]>([]);

  const handleTextChange = async (text: string, index: number) => {
    // Only allow numbers
    const cleanText = text.replace(/[^0-9]/g, "");
    if (text && !cleanText) return;

    const newCode = [...code];
    newCode[index] = cleanText;
    setCode(newCode);

    if (cleanText && index < 5) {
      inputs.current[index + 1]?.focus();
    }

    if (newCode.every(digit => digit !== "") && newCode.join("").length === 6) {
      setIsVerifying(true);
      const success = await onVerify(newCode.join(""));
      setIsVerifying(false);
      if (success) {
        onClose();
        setCode(["", "", "", "", "", ""]);
      } else {
        setCode(["", "", "", "", "", ""]);
        inputs.current[0]?.focus();
      }
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
      const newCode = [...code];
      newCode[index - 1] = "";
      setCode(newCode);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modalOverlay}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.keyboardView}
          >
            <View style={styles.modalContent}>
              <Pressable style={styles.closeButton} onPress={onClose} disabled={isVerifying}>
                <Feather name="x" size={24} color="#7B8199" />
              </Pressable>

              <View style={styles.headerZone}>
                <Text style={styles.heading}>Check your email</Text>
                <Text style={styles.subheading}>
                  We&apos;ve sent a 6-digit code to{"\n"}
                  <Text style={styles.emailText}>{email}</Text>
                </Text>
              </View>

              <View style={styles.codeContainer}>
                {code.map((digit, index) => (
                  <TextInput
                    key={index}
                    ref={(ref) => {
                      inputs.current[index] = ref;
                    }}
                    style={[
                      styles.codeInput,
                      digit !== "" && styles.codeInputFilled
                    ]}
                    value={digit}
                    onChangeText={(text) => handleTextChange(text, index)}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                    keyboardType="number-pad"
                    maxLength={1}
                    selectTextOnFocus
                    editable={!isVerifying}
                  />
                ))}
              </View>

              {isVerifying ? (
                <ActivityIndicator size="large" color="#5B3DF5" style={{ marginBottom: 40 }} />
              ) : null}

              <View style={styles.footerZone}>
                <Text style={styles.resendText}>Didn&apos;t receive code? </Text>
                <Pressable disabled={isVerifying}>
                  <Text style={styles.resendLink}>Resend</Text>
                </Pressable>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(10, 18, 69, 0.5)",
    justifyContent: "flex-end",
  },
  keyboardView: {
    width: "100%",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: Platform.OS === "ios" ? 60 : 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 20,
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  headerZone: {
    alignItems: "center",
    marginBottom: 32,
  },
  heading: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    color: "#0A1245",
    marginBottom: 12,
  },
  subheading: {
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    color: "#7B8199",
    textAlign: "center",
    lineHeight: 22,
  },
  emailText: {
    color: "#0A1245",
    fontFamily: "Poppins-Medium",
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 40,
  },
  codeInput: {
    width: 45,
    height: 60,
    backgroundColor: "#F7F7FA",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E5E9F0",
    textAlign: "center",
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    color: "#0A1245",
  },
  codeInputFilled: {
    borderColor: "#5B3DF5",
    backgroundColor: "#F0F4FF",
    color: "#5B3DF5",
  },
  footerZone: {
    flexDirection: "row",
    alignItems: "center",
  },
  resendText: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#7B8199",
  },
  resendLink: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
    color: "#5B3DF5",
  },
});

