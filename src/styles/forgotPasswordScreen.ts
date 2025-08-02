import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 40,
    alignItems: "center",
    gap: 30,
  },

  appLogo: {
    width: 300,
    height: 300,
    marginBottom: 0,
  },

  pageTitle: {
    color: colors.white[100],
    fontSize: 20,
  },

  emailText: {
    color: colors.white[100],
  },

  emailInput: {
    borderColor: colors.white[100],
    backgroundColor: colors.white[100],
    borderRadius: 30,
    textAlign: "center",
    width: 300,
    fontStyle: "italic",
  },

  containerButton: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  loginButtonText: {
    textAlign: "center",
    justifyContent: "center",
    color: colors.white[100],
    fontWeight: "bold",
    fontSize: 20,
  },

  loginPressable: {
    alignSelf: "center",
    textAlign: "center",
    justifyContent: "center",
    height: 60,
    backgroundColor: colors.button[100],
    borderRadius: 20,
    width: 300,
  },
});
