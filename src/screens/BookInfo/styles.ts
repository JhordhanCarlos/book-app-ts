import { StyleSheet, Dimensions } from "react-native";
import { greenButton, primaryBlack, secondaryBlack } from "../../style";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: secondaryBlack,
    paddingHorizontal: 20,
  },
  textHeader: {
    color: "#FFF",
    marginBottom: 20,
    backgroundColor: "#29292E",
    width: Dimensions.get("screen").width,
    height: 50,
    position: "absolute",
    top: 0,
    marginTop: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    position: "relative",
    top: 50,
  },
  card: {
    backgroundColor: primaryBlack,
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
  },
  cardRow: {
    flexDirection: "row",
    backgroundColor: primaryBlack,
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    justifyContent: "space-between",
  },
  progressBar: {
    marginVertical: 20,
    height: 10,
    borderRadius: 10,
    width: "100%",
    backgroundColor: "#FFF",
  },
  progress: {
    position: "absolute",
    bottom: 35,
    left: 12,
    marginVertical: 20,
    height: 15,
    borderRadius: 5,
    width: "0%",
    backgroundColor: "#00875F",
    zIndex: 1,
  },
  buttonAdd: {
    width: "100%",
    backgroundColor: greenButton,
    padding: 20,
    marginTop: 165,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    position: "relative",
  },
});
