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
        backgroundColor: color.backgroundLightSecondary,
        height: 48,
        marginVertical: 8,
        padding: 8,
        // borderWidth: 1,
        borderRadius: 4,
        borderColor: color.primary5,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    inputDescription: {
        backgroundColor: color.backgroundLightSecondary,
        height: 96,
        marginVertical: 8,
        padding: 8,
        paddingTop: 16,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: color.primary5,
        flexWrap: "wrap",
        shadowColor: 'black',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
})

export default styles