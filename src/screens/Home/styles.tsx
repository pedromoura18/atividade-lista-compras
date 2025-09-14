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
    borderColor: "#808080",
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
  contadorContainer:{
    flexDirection: "row",
    justifyContent: "space-between", 
    alignItems: "center",
    marginTop: 30,
    borderBottomWidth: 1,
    paddingBottom: 21,
    borderBottomColor: "#d9d9d9",
  },
  bottom:{
    paddingHorizontal: 24,
    paddingTop: 33,
  },
  contadorTexto:{
    fontWeight: "bold",
    fontSize: 14,
    marginRight: 6
  },
  contadorNumero:{
    backgroundColor: "#D9D9D9",
    color: "#000",
    fontWeight: "bold",
    fontSize: 12,
    width: 24,
    height: 24,
    textAlign: "center", 
    borderRadius: 12,
    lineHeight: 23,
    justifyContent: "center",
  },
  finalizados:{
    color: "purple",
  },
  produtos:{
    color: "green",
  },
  contadorItem:{
    alignItems: "center",
    flexDirection: "row",
  },
  containerVazio:{
    paddingTop: 48,
    paddingHorizontal: 24,
    flex: 1,
    alignItems: "center",
  },
  imagemVazia:{
    width: 56,
    height: 56,
    marginBottom: 16,
    resizeMode: "contain",
  },
  textoVazio:{
    fontSize: 14,
    fontWeight: "700",
    color: "#808080", 
    padding: 1,
    borderRadius: 4,
    textAlign: "center",
  },
  subtituloVazio:{
    fontSize: 14,
    color: "#808080",
    fontWeight: "400",
    textAlign: "center",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#808080",
    paddingVertical: 15,
    paddingLeft: 12,
    paddingRight: 8,
    paddingHorizontal: 16,
    marginBottom: 8,
    marginHorizontal: 22.5,
    minHeight: 56,
  },
  checkButton: {
    marginRight: 12,
  },
  checkIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  itemText: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    marginLeft: -2,
  },
  itemTextDone: {
    textDecorationLine: "line-through",
    color: "#808080",
  },
});
