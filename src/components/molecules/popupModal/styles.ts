import { StyleSheet } from "react-native";
import color from "../../../constants/color";

const styles = StyleSheet.create ({
    root: {
        flex: 1, 
        justifyContent: "flex-end", 
        alignItems: 'center', 
        backgroundColor: "rgba(0,0,0,0.5)"
    },
    modalView: {
        margin: 0,
        backgroundColor: color.backgroundLight,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5
    },
    subtitle: {
        paddingBottom: 16,
        textAlign: "center",
    },
    buttonContainer: {
        width: 300,
    }
})

export default styles