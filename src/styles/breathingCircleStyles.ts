import { StyleSheet } from "react-native";
import { colors } from "../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop: 80,
    paddingBottom: 60,
  },

  goBackButton: {
    position: "absolute",
    top: 45,
    left: 15,
    flexDirection: "row",
    alignItems: "center",
  },

  goBackPressable: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  pressableText: {
    color: colors.white[100],
    fontSize: 16,
    marginLeft: 4,
  },

  textContainer: {
    marginBottom: 130,
    alignItems: "center",
  },

  instructions: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
  },

  subInstructions: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
  },

  circleWrapper: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: 250,
  },

  circle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: colors.button[100],
  },
});
