import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { signOut } from "firebase/auth";
import { doc, getDoc, runTransaction, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  Vibration,
  View,
} from "react-native";
import { auth, firestore } from "../../firebaseConfig";
import { colors } from "../../styles/colors";
import { styles } from "../../styles/homeStyles";
import { showAlert } from "../../utils/showAlert";

export default function Home() {
  const [selectedDays, setSelectedDays] = useState({
    seg: false,
    ter: false,
    qua: false,
    qui: false,
    sex: false,
    sab: false,
    dom: false,
  });
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [vezesNaoFumou, setVezesNaoFumou] = useState(0);
  const [ultimaResistencia, setUltimaResistencia] = useState("");
  const [userImage, setUserImage] = useState<string | null>(null);

  const salvarDadosNoFirestore = async (novosDados: Partial<any>) => {
    try {
      const user = auth.currentUser;
      if (!user) return;
      const docRef = doc(firestore, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        await runTransaction(firestore, async (transaction) => {
          const atual = docSnap.data();
          transaction.update(docRef, { ...atual, ...novosDados });
        });
      } else {
        await setDoc(docRef, { ...novosDados });
      }
    } catch (err) {
      console.error("Erro ao salvar no Firestore:", err);
    }
  };

  const handleLogout = async () => {
    if (Platform.OS === "web") {
      const confirmar = window.confirm("Você tem certeza que deseja sair?");
      if (!confirmar) return;
      try {
        await AsyncStorage.removeItem("imagemUsuario");
        await AsyncStorage.removeItem("vezesNaoFumou");
        await AsyncStorage.removeItem("ultimaResistencia");
        setUserImage(null);
        await signOut(auth);
        router.replace("/");
      } catch (error) {
        console.error("Erro ao sair:", error);
      }
    } else {
      showAlert("Sair do aplicativo", "Você tem certeza que deseja sair?");
      Alert.alert(
        "Sair do aplicativo",
        "Você tem certeza que deseja sair?",
        [
          { text: "Cancelar", style: "cancel" },
          {
            text: "Sair",
            style: "destructive",
            onPress: async () => {
              try {
                await AsyncStorage.removeItem("imagemUsuario");
                await AsyncStorage.removeItem("vezesNaoFumou");
                await AsyncStorage.removeItem("ultimaResistencia");
                setUserImage(null);
                await signOut(auth);
                router.replace("/");
              } catch (error) {
                console.error("Erro ao sair:", error);
              }
            },
          },
        ],
        { cancelable: true }
      );
    }
  };

  useEffect(() => {
    async function carregarDados() {
      try {
        const user = auth.currentUser;
        if (user) {
          const docRef = doc(firestore, "users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const dados = docSnap.data();
            setNomeUsuario(dados.name || "");
            if (dados.selectedDays) setSelectedDays(dados.selectedDays);
            if (dados.vezesNaoFumou) setVezesNaoFumou(dados.vezesNaoFumou);
            if (dados.ultimaResistencia)
              setUltimaResistencia(dados.ultimaResistencia);
            if (dados.userImage) setUserImage(dados.userImage);
          }
        }
        const contagem = await AsyncStorage.getItem("vezesNaoFumou");
        if (contagem) setVezesNaoFumou(parseInt(contagem));
        const data = await AsyncStorage.getItem("ultimaResistencia");
        if (data) setUltimaResistencia(data);
        const imagemSalva = await AsyncStorage.getItem("imagemUsuario");
        if (imagemSalva) setUserImage(imagemSalva);
      } catch (error) {
        console.log("Erro ao carregar dados:", error);
      }
    }
    carregarDados();
  }, []);

  const escolherImagem = async () => {
    if (Platform.OS === "web") {
      const usarCamera = window.confirm(
        "Deseja usar a câmera? (Cancelar = Galeria)"
      );
      if (usarCamera) {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted") {
          showAlert("Permissão negada", "Permita o acesso à câmera.");
          return;
        }
        const resultado = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
        if (!resultado.canceled && resultado.assets.length > 0) {
          salvarLocalmente(resultado.assets[0].uri);
        }
      } else {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          showAlert("Permissão negada", "Permita o acesso à galeria.");
          return;
        }
        const resultado = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
        if (!resultado.canceled && resultado.assets.length > 0) {
          salvarLocalmente(resultado.assets[0].uri);
        }
      }
    } else {
      Alert.alert("Selecionar imagem", "Escolha uma opção", [
        {
          text: "Câmera",
          onPress: async () => {
            const { status } =
              await ImagePicker.requestCameraPermissionsAsync();
            if (status !== "granted") {
              showAlert("Permissão negada", "Permita o acesso à câmera.");
              return;
            }
            const resultado = await ImagePicker.launchCameraAsync({
              allowsEditing: true,
              aspect: [1, 1],
              quality: 1,
            });
            if (!resultado.canceled && resultado.assets.length > 0) {
              salvarLocalmente(resultado.assets[0].uri);
            }
          },
        },
        {
          text: "Galeria",
          onPress: async () => {
            const { status } =
              await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== "granted") {
              showAlert("Permissão negada", "Permita o acesso à galeria.");
              return;
            }
            const resultado = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              allowsEditing: true,
              aspect: [1, 1],
              quality: 1,
            });
            if (!resultado.canceled && resultado.assets.length > 0) {
              salvarLocalmente(resultado.assets[0].uri);
            }
          },
        },
        { text: "Cancelar", style: "cancel" },
      ]);
    }
  };

  const salvarLocalmente = async (uri: string) => {
    try {
      setUserImage(uri);
      await AsyncStorage.setItem("imagemUsuario", uri);
      await salvarDadosNoFirestore({ userImage: uri });
    } catch (err) {
      console.error("Erro ao salvar imagem:", err);
    }
  };

  const toggleDaySelection = (day: keyof typeof selectedDays) => {
    Vibration.vibrate(50);
    setSelectedDays((prev) => {
      const novos = { ...prev, [day]: !prev[day] };
      salvarDadosNoFirestore({ selectedDays: novos });
      return novos;
    });
  };

  const renderDayIcon = (day: keyof typeof selectedDays) => {
    const isSelected = selectedDays[day];
    return (
      <TouchableOpacity onPress={() => toggleDaySelection(day)}>
        <MaterialIcons
          name="check-box"
          size={40}
          style={{
            backgroundColor: isSelected ? "white" : "transparent",
            borderRadius: 5,
            color: isSelected ? "green" : "black",
            textAlign: "center",
          }}
        />
      </TouchableOpacity>
    );
  };

  const handleQueroFumar = async () => {
    try {
      const novaContagem = vezesNaoFumou + 1;
      setVezesNaoFumou(novaContagem);
      await AsyncStorage.setItem("vezesNaoFumou", novaContagem.toString());
      const agora = new Date();
      const dataHora = `${agora.toLocaleDateString(
        "pt-BR"
      )} às ${agora.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      })}`;
      setUltimaResistencia(dataHora);
      await AsyncStorage.setItem("ultimaResistencia", dataHora);
      salvarDadosNoFirestore({
        vezesNaoFumou: novaContagem,
        ultimaResistencia: dataHora,
      });
      router.push("/breathingCircle");
    } catch (error) {
      console.log("Erro ao atualizar contagem ou data:", error);
    }
  };

  return (
    <LinearGradient
      colors={[colors.pink[100], colors.blue[100]]}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.informations}>
          <Image
            source={require("../../assets/images/appLogo.png")}
            style={styles.appLogo}
          />
          <TouchableOpacity onPress={escolherImagem}>
            <Image
              source={
                userImage
                  ? { uri: userImage }
                  : require("../../assets/images/userLogo.png")
              }
              style={styles.userLogo}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.logoutContainer}>
          <Pressable onPress={handleLogout}>
            <MaterialIcons name="logout" size={30} color="white" />
          </Pressable>
        </View>

        <View style={styles.userTextContainer}>
          <Text style={styles.userText}>Bem-vindo {nomeUsuario}</Text>
        </View>

        <View style={styles.weekControlContainer}>
          <Text style={styles.weekText}>Controle da semana</Text>
          <Text style={styles.weekTextTwo}>Dias que você deixou de fumar</Text>

          <View style={styles.calendarDays}>
            {["seg", "ter", "qua", "qui", "sex", "sab", "dom"].map((day) => (
              <Text key={day} style={styles.calendarDaysText}>
                {day.charAt(0).toUpperCase() + day.slice(1)}
              </Text>
            ))}
          </View>

          <View style={styles.calendar}>
            {["seg", "ter", "qua", "qui", "sex", "sab", "dom"].map((day) => (
              <View key={day} style={{ flex: 1, alignItems: "center" }}>
                {renderDayIcon(day as keyof typeof selectedDays)}
              </View>
            ))}
          </View>
        </View>

        <View style={styles.noSmokeContainer}>
          <Text style={styles.noSmokeText}>Vezes que deixou de fumar</Text>
          <Text style={{ fontSize: 22, color: "#fff", fontWeight: "bold" }}>
            {vezesNaoFumou}
          </Text>
          {ultimaResistencia && (
            <Text
              style={{
                color: "#fff",
                fontSize: 16,
                marginTop: 8,
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Última resistência: {ultimaResistencia}
            </Text>
          )}
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/NoSmokeLogo.png")}
              style={styles.noSmokeImage}
            />
          </View>
        </View>

        <View style={styles.smokeButtonContainer}>
          <Pressable onPress={handleQueroFumar}>
            <Text style={styles.smokeButtonText}>Quero Fumar!</Text>
          </Pressable>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
