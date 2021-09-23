import { StyleSheet } from "react-native";
import defaultStyle from "../../globalstyles/defaultStyles";

const styles = StyleSheet.create({
    root: {
        backgroundColor: defaultStyle.color.backgroundLight
    },
    detailContainer: {
        paddingHorizontal: 24,
        height: 420,
        backgroundColor: defaultStyle.color.backgroundLight,
        borderTopStartRadius: 20,
        borderTopRightRadius: 20,
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
})

export default styles