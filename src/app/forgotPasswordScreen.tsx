import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { auth } from "../firebaseConfig";
import { colors } from "../styles/colors";
import { styles } from "../styles/forgotPasswordScreen";
import { showAlert } from "../utils/showAlert";

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handlePasswordReset = async () => {
    if (!email.trim()) {
      showAlert("Aviso", "Por favor, insira seu e-mail.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      showAlert("Sucesso", "Link de recuperação enviado para seu e-mail."); // ✅ Aqui
      router.replace("/");
    } catch (error: any) {
      console.error("Erro ao enviar e-mail:", error);
      showAlert("Erro", "Falha ao enviar e-mail: " + error.message); // ✅ Aqui
    }
  };

  return (
    <LinearGradient
      colors={[colors.pink[100], colors.blue[100]]}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require("../assets/images/appLogo.png")}
          style={styles.appLogo}
        />
        <Text style={styles.pageTitle}>Recuperar Senha</Text>

        <Text style={styles.emailText}>Digite seu e-mail</Text>
        <TextInput
          placeholder="seuemail@exemplo.com"
          style={styles.emailInput}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <View style={styles.containerButton}>
          <Pressable
            style={styles.loginPressable}
            onPress={handlePasswordReset}
          >
            <Text style={styles.loginButtonText}>
              Enviar link de recuperação
            </Text>
          </Pressable>
        </View>

        <View style={styles.containerButton}>
          <Pressable
            style={styles.loginPressable}
            onPress={() => router.push("./")}
          >
            <Text style={styles.loginButtonText}>Voltar</Text>
          </Pressable>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
