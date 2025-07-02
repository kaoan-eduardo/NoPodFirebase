import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../firebaseConfig";
import { colors } from "../styles/colors";
import { styles } from "../styles/indexStyle";
import { showAlert } from "../utils/showAlert"; // import showAlert

export default function Index() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/home");
    } catch (error: any) {
      console.error("Erro ao fazer login:", error);
      showAlert("Erro", "Falha no login: " + error.message);
    }
  };

  return (
    <LinearGradient
      colors={[colors.pink[100], colors.blue[100]]}
      style={styles.container}
    >
      <SafeAreaView style={{ flex: 1, width: "100%" }}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
            paddingVertical: 20,
            paddingHorizontal: 20,
          }}
          keyboardShouldPersistTaps="handled"
        >
          {/* Logotipo */}
          <Image
            source={require("../assets/images/appLogo.png")}
            style={styles.appLogo}
          />

          {/* Texto de login */}
          <Text style={styles.loginText}>Login</Text>

          {/* Campo de e-mail */}
          <Text style={styles.emailText}>E-mail</Text>
          <TextInput
            placeholder="seuemail@exemplo.com"
            style={styles.emailInput}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* Campo de senha */}
          <Text style={styles.passwordText}>Senha</Text>
          <TextInput
            placeholder="Digite sua senha"
            style={styles.passwordInput}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {/* Botão Esqueci minha senha */}
          <Pressable onPress={() => router.push("/forgotPasswordScreen")}>
            <Text style={styles.resetPasswordButtonText}>
              Esqueci minha senha
            </Text>
          </Pressable>

          {/* Botão Entrar */}
          <View style={styles.containerButton}>
            <Pressable style={styles.loginPressable} onPress={signIn}>
              <Text style={styles.loginButtonText}>Entrar</Text>
            </Pressable>
          </View>

          {/* Botão Cadastrar */}
          <View style={styles.containerButtonRegister}>
            <Pressable
              style={styles.loginPressable}
              onPress={() => router.push("/registerScreen")}
            >
              <Text style={styles.loginButtonText}>Cadastrar</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
