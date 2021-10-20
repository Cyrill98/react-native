import { StyleSheet } from "react-native";
import color from "../../../constants/color";

const styles = StyleSheet.create({
    root: {
        backgroundColor: color.backgroundOverlay
    },
    container: {
        margin: 24,
    },
    profileImage: {
        height: 136,
        width: 136,
        borderRadius: 40,
        marginBottom: 12, 
        alignSelf: "center",
    },
    detailContainer: {
        paddingHorizontal: 24,
        height: 420,
        backgroundColor: color.backgroundLight,
        borderTopStartRadius: 20,
        borderTopRightRadius: 20,
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
})

export default styles