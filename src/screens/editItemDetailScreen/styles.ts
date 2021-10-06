import { StyleSheet } from "react-native";
import defaultStyle from "../../globalstyles/defaultStyles";

const styles = StyleSheet.create({
    root: {
        height: '100%',
        padding: 0,
        backgroundColor: defaultStyle.color.backgroundLight
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
        backgroundColor: defaultStyle.color.backgroundLight,
        height: 48,
        marginVertical: 8,
        padding: 8,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: defaultStyle.color.text,
    },
    inputDescription: {
        backgroundColor: defaultStyle.color.backgroundLight,
        height: 96,
        marginVertical: 8,
        padding: 8,
        paddingTop: 16,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: defaultStyle.color.text,
        flexWrap: "wrap",
    },
})

export default styles