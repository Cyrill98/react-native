import { StyleSheet } from "react-native";
import color from "../../../constants/color";

const styles = StyleSheet.create({
    root: {
        height: '100%',
        padding: 0,
        backgroundColor: color.backgroundLight
    },
    title: {
        paddingHorizontal: 24,
        paddingTop: 24,
    },
    detailContainer: {
        margin: 24,
    },
    inputContainer: {
        marginTop: 16,
    },
    inputTitle: {
        backgroundColor: color.backgroundLight,
        height: 48,
        marginVertical: 8,
        padding: 8,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: color.text,
    },
    inputDescription: {
        backgroundColor: color.backgroundLight,
        height: 96,
        marginVertical: 8,
        padding: 8,
        paddingTop: 16,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: color.text,
        flexWrap: "wrap",
    },
})

export default styles