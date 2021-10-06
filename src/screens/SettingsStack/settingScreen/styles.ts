import { StyleSheet } from "react-native";
import color from "../../../constants/color";


const styles = StyleSheet.create ({
    root: {
        backgroundColor: color.backgroundLight,
        paddingBottom: 56,
    },
    container: {
        padding: 24,
    },
    subContainer: {
        paddingBottom: 24,
    },
    link: {
        padding: 24,
        borderBottomWidth: 1,
        borderBottomColor: color.backgroundAccent 
    }
})

export default styles