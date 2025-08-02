import { StyleSheet } from "react-native";
import { colors } from "../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
    gap: 15,
  },

  appLogo: {
    width: 250,
    height: 250,
    marginBottom: 20,
    resizeMode: "contain",
  },

  loginText: {
    color: colors.white[100],
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    width: "100%",
  },

  emailText: {
    color: colors.white[100],
    fontSize: 16,
    marginBottom: 5,
    width: 300,
    textAlign: "center",
  },

  passwordText: {
    color: colors.white[100],
    fontSize: 16,
    marginBottom: 5,
    width: 300,
    textAlign: "center",
  },

  emailInput: {
    borderColor: colors.white[100],
    backgroundColor: colors.white[100],
    borderRadius: 30,
    textAlign: "center",
    width: 300,
    fontStyle: "italic",
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 15,
    fontSize: 16,
  },

  passwordInput: {
    borderColor: colors.white[100],
    backgroundColor: colors.white[100],
    borderRadius: 30,
    textAlign: "center",
    width: 300,
    fontStyle: "italic",
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 15,
    fontSize: 16,
  },

  resetPasswordButtonText: {
    color: colors.white[100],
    marginTop: 10,
    marginBottom: 20,
    textAlign: "center",
    textDecorationLine: "underline",
  },

  containerButton: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  containerButtonRegister: {
    marginTop: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  loginButtonText: {
    color: colors.white[100],
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },

  loginPressable: {
    height: 60,
    backgroundColor: colors.button[100],
    borderRadius: 20,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
  },
});
