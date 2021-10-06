import { StyleSheet } from "react-native";
import color from "../../../constants/color";

const styles = StyleSheet.create({
    root: {
        backgroundColor: color.backgroundLight
    },
    detailContainer: {
        paddingHorizontal: 24,
    },
    subContainer: {
        paddingVertical: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    subInnerContainer: {
        paddingHorizontal: 24,
        justifyContent: "space-between",
    },
    items: {
        paddingVertical: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    }
})

export default styles