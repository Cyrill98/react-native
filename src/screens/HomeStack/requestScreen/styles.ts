import { StyleSheet } from "react-native";
import color from "../../../constants/color";

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 24,
        marginBottom: 64,
        backgroundColor: color.backgroundLight,
    },
    dropdown: {
        marginVertical: 16,
    },
    inputContainer: {
        marginTop: 8,
    },
    input: {
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
    errorLabel: {
        color: color.error,
    },
    buttonContainer: {
        paddingVertical: 4,
        paddingHorizontal: 24,
        backgroundColor: color.primary5,
        width: '100%',
        bottom: '0%',
        position: "absolute",
        alignSelf: "center",
        shadowColor: 'black',
        shadowOffset: {width: 0, height: -2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    activeRadio: {
        backgroundColor: color.primary5,
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        width: 160,
    },
    inactiveRadio: {
        backgroundColor: color.backgroundLightSecondary,
        borderRadius: 8,
        width: 160,
    },
})

export default styles