import { StyleSheet } from "react-native";
import color from "../../../constants/color";

const styles = StyleSheet.create({
    root: {
        backgroundColor: color.backgroundLight
    },
    card: {
        borderRadius: 8,
        backgroundColor: color.backgroundLightSecondary,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        padding: 16,
        marginVertical: 8,
    }
})

export default styles