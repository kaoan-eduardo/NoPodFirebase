import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import { styles } from "../../styles/greetingsStyles";

export default function Greetings() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={[colors.pink[100], colors.blue[100]]}
      style={styles.container}
    >
      <View>
        <Image
          source={require("../../assets/images/greetings.png")}
          style={styles.image}
        ></Image>
      </View>
      <View style={styles.congratulationsTextContainer}>
        <Text style={styles.congratulationsTexuppercase}>PARABÉNS!!!</Text>
        <Text style={styles.congratulationsTextlowercase}>continue assim!</Text>
      </View>

      <View>
        <Pressable
          onPress={() => router.push("./home")}
          style={styles.goBackPressable}
        >
          <Text style={styles.goBackPressableText}>Voltar</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}
