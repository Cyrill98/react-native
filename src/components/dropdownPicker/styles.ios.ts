import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    dropdownBtnStyle: {
        width: "100%",
        height: 50,
        backgroundColor: "#FFF",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#444",
      },
      dropdownBtnTxtStyle: { color: "#444", textAlign: "left" },
      dropdownDropdownStyle: { backgroundColor: "#EFEFEF" },
      dropdownRowStyle: {
        backgroundColor: "#EFEFEF",
        borderBottomColor: "#C5C5C5",
      },
      dropdownRowTxtStyle: { color: "#444", textAlign: "left" },
      dropdownRowChildStyle: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 18,
      },
      dropdownRowTxt: {
        color: "#F1F1F1",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 24,
        marginHorizontal: 12,
      },
})

export default styles