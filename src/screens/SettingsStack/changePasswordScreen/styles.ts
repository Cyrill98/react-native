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
        marginVertical: 8,
    },
    inputSubContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 8,
        marginVertical: 8,
        height: 48,
        backgroundColor: color.backgroundLightSecondary,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: color.primary5,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,

    },
    input: {
        width: '90%'
    },
    errorLabel: {
        color: color.error,
    },
})

export default styles