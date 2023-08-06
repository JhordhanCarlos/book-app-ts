import { StyleSheet } from "react-native";
import { greenButton, primaryBlack, secondaryBlack } from "../../style";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: secondaryBlack,
    height: "100%",
    color: "#FFF",
    justifyContent: "space-between",
  },
  input: {
    backgroundColor: primaryBlack,
    padding: 10,
    borderRadius: 5,
    color: "#FFF",
    marginVertical: 5,
  },
  buttonAdd: {
    width: "100%",
    backgroundColor: greenButton,
    padding: 20,
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    position: "relative",
  },
  buttonAddText: {
    color: "#FFF",
  },
});
