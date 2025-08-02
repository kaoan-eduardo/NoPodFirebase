import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    marginBottom: 30,
  },

  congratulationsTextContainer: {
    alignItems: "center",
    marginBottom: 40,
  },

  congratulationsTexuppercase: {
    textAlign: "center",
    color: colors.white[100],
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
  },

  congratulationsTextlowercase: {
    textAlign: "center",
    color: colors.white[100],
    fontSize: 18,
  },

  goBackPressable: {
    height: 60,
    backgroundColor: colors.button[100],
    borderRadius: 20,
    width: 250,
    alignItems: "center",
    justifyContent: "center",
  },

  goBackPressableText: {
    color: colors.white[100],
    fontWeight: "bold",
    fontSize: 20,
  },
});
