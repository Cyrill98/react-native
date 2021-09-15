import { StyleSheet } from "react-native";
import defaultStyle from "../../globalstyles/defaultStyles";

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 24,
        backgroundColor: defaultStyle.color.backgroundLight
    },
    dropdown: {
        marginVertical: 16,
    },
    inputContainer: {
        marginTop: 8,
    },
    input: {
        backgroundColor: defaultStyle.color.backgroundLight,
        height: 48,
        marginVertical: 8,
        padding: 8,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: defaultStyle.color.text,
    },
    errorLabel: {
        color: defaultStyle.color.error,
    },
    buttonContainer: {
        marginVertical: 24,
    },
})

export default styles