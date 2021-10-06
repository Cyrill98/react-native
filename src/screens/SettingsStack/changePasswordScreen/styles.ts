import { StyleSheet } from "react-native";
import color from "../../../constants/color";

const styles = StyleSheet.create({
    root: {
        backgroundColor: color.backgroundLight
    },
    detailContainer: {
        paddingHorizontal: 24,
        height: 420,
        backgroundColor: color.backgroundLight,
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
})

export default styles