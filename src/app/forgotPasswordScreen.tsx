import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import {
  Alert,
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

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handlePasswordReset = async () => {
    if (!email.trim()) {
      Alert.alert("Aviso", "Por favor, insira seu e-mail.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert("Sucesso", "Link de recuperação enviado para seu e-mail.");
      router.replace("/"); // volta para tela de login
    } catch (error: any) {
      console.error("Erro ao enviar e-mail:", error);
      Alert.alert("Erro", "Falha ao enviar e-mail: " + error.message);
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
        {/* Título */}
        <Text style={styles.pageTitle}>Recuperar Senha</Text>

        {/* Campo de e-mail */}
        <Text style={styles.emailText}>Digite seu e-mail</Text>
        <TextInput
          placeholder="seuemail@exemplo.com"
          style={styles.emailInput}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Botão Enviar */}
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

        {/* Voltar */}
        <View style={styles.containerButton}>
          <Pressable
            style={styles.loginPressable}
            onPress={() => router.back()}
          >
            <Text style={styles.loginButtonText}>Voltar</Text>
          </Pressable>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
