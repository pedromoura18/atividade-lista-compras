import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  top: {
    backgroundColor: "#7A4A9E",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "#F2F2F2",
    fontSize: 18,
    fontFamily: "Inter",
    fontStyle: "normal",
    lineHeight: 25.2,
    marginTop: 76,
    marginBottom: 72,
    fontWeight: "700",
  },
  input: {
        flex: 1,
        height: 56,
        padding: 16,
        backgroundColor:"#F2F2F2", 
        borderRadius: 6,
        borderWidth: 0.5,
        borderColor: "##808080",
        width: 289,
        marginRight: 4,
    },
    form: {
        flexDirection: "row",
        marginTop: 18,
        marginBottom: 36,
        padding: 24,
        top: "11.5%",
        position: "absolute"
    },
    button:{
        backgroundColor:"#31C667",
        height: 56,
        width: 56, 
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
    },
  
});
