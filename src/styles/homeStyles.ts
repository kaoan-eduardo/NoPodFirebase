import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
  scrollContent: {
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 40,
    flexGrow: 1,
    gap: 10,
  },

  logoutContainer: {
    position: "absolute",
    top: 77,
    right: 20,
  },

  informations: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },

  appLogo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },

  userLogo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    borderRadius: 50,
    borderWidth: 0.01,
    borderColor: colors.white[100],
    marginRight: 40,
    backgroundColor: colors.white[100],
  },

  userTextContainer: {},

  userText: {
    paddingHorizontal: 10,
    color: colors.white[100],
    fontSize: 20,
  },

  weekControlContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 15,
    padding: 20,
  },

  weekText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },

  weekTextTwo: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },

  calendarDays: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  calendarDaysText: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
    textTransform: "capitalize",
  },

  calendar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  weekIcons: {
    fontSize: 32,
  },

  noSmokeContainer: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 15,
  },

  noSmokeText: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 5,
  },

  imageContainer: {
    marginTop: 10,
  },

  noSmokeImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },

  smokeButtonContainer: {
    marginTop: 50,
    backgroundColor: colors.button[100],
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
  },

  smokeButtonText: {
    fontSize: 25,
    color: colors.white[100],
  },
});
