import { StyleSheet } from "react-native";
import defaultStyle from "../../globalstyles/defaultStyles";

const styles = StyleSheet.create({
    root: {
        backgroundColor: defaultStyle.color.backgroundLight
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