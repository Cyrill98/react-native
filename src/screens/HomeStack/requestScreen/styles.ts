import { StyleSheet } from "react-native";
import color from "../../../constants/color";

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 24,
        backgroundColor: color.backgroundLight
    },
    dropdown: {
        marginVertical: 16,
    },
    inputContainer: {
        marginTop: 8,
    },
    input: {
        backgroundColor: color.backgroundLight,
        height: 48,
        marginVertical: 8,
        padding: 8,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: color.text,
    },
    errorLabel: {
        color: color.error,
    },
    buttonContainer: {
        marginVertical: 24,
    },
})

export default styles