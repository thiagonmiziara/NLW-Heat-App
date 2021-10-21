import { COLORS, FONTS } from "./../../theme";

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  message: {
    fontSize: 15,
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    lineHeight: 20,
    marginTop: 20,
    marginBottom: 5,
  },
  footer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  userName: {
    fontSize: 15,
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE,
    marginLeft: 10,
  },
});
