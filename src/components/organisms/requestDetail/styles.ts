import { StyleSheet } from "react-native";
import color from "../../../constants/color";

const styles = StyleSheet.create({
    root: {
        marginVertical: 16,
        padding: 24,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderRadius: 16,
        backgroundColor: color.backgroundLightSecondary,
    },
    detailContainer: {
        paddingBottom: 16,
    }
})

export default styles