import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import { auth, firestore } from "../firebaseConfig";
import { colors } from "../styles/colors";
import { styles } from "../styles/registerScreenStyles";
import { showAlert } from "../utils/showAlert"; // IMPORTA O showAlert

export default function RegisterScreen() {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    if (!userName.trim()) {
      showAlert("Erro", "Digite seu nome");
      return;
    }
    if (!email.trim()) {
      showAlert("Erro", "Digite seu e-mail");
      return;
    }
    if (!password.trim()) {
      showAlert("Erro", "Digite sua senha");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(firestore, "users", user.uid), {
        name: userName,
        email: user.email,
      });

      showAlert(
        "Sucesso",
        "Usuário cadastrado!",
        [
          {
            text: "OK",
            onPress: () => router.push("/"),
          },
        ],
        { cancelable: false }
      );
    } catch (error: any) {
      showAlert("Erro no cadastro", error.message);
    }
  };

  return (
    <LinearGradient
      colors={[colors.pink[100], colors.blue[100]]}
      style={styles.container}
    >
      <Image
        source={require("../assets/images/appLogo.png")}
        style={styles.appLogo}
      />

      <Text style={styles.loginText}>Cadastro</Text>

      <Text style={styles.labelText}>Nome</Text>
      <TextInput
        placeholder="Digite seu nome"
        style={styles.input}
        value={userName}
        onChangeText={setUserName}
      />

      <Text style={styles.labelText}>E-mail</Text>
      <TextInput
        placeholder="seuemail@exemplo.com"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.labelText}>Senha</Text>
      <TextInput
        placeholder="Digite sua senha"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.containerButton}>
        <Pressable style={styles.loginPressable} onPress={signUp}>
          <Text style={styles.loginButtonText}>Cadastrar</Text>
        </Pressable>
      </View>

      <View style={styles.containerButton}>
        <Pressable
          style={styles.loginPressable}
          onPress={() => router.push("/")}
        >
          <Text style={styles.loginButtonText}>Voltar</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}
