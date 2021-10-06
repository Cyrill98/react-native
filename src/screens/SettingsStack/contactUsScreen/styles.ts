import { StyleSheet } from "react-native";
import color from "../../../constants/color";

const styles = StyleSheet.create({
    root: {
        backgroundColor: color.backgroundLight
    },
    socialContainer: {
        padding: 24,
    },
    socialItems: {
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 8
        
    }
})

export default styles