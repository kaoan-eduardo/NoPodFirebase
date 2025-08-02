import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    alignItems: "center",
    gap: 5,
  },

  appLogo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 10,
  },

  loginText: {
    color: colors.white[100],
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    width: "100%",
  },

  labelText: {
    textAlign: "center",
    color: colors.white[100],
    fontSize: 16,
    marginBottom: 5,
    width: 300,
  },

  input: {
    width: 300,
    backgroundColor: colors.white[100],
    borderRadius: 30,
    textAlign: "center",
    fontStyle: "italic",
    paddingVertical: 10,
    marginBottom: 15,
    fontSize: 16,
  },

  containerButton: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },

  loginPressable: {
    height: 60,
    backgroundColor: colors.button[100],
    borderRadius: 20,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
  },

  loginButtonText: {
    color: colors.white[100],
    fontWeight: "bold",
    fontSize: 20,
  },
});
