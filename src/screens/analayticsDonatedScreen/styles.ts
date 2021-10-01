import { StyleSheet } from "react-native";
import defaultStyle from "../../globalstyles/defaultStyles";

const styles = StyleSheet.create({
    root: {
        backgroundColor: defaultStyle.color.backgroundLight
    },
    itemDetailContainer: {
        padding: 16
    },
    analyticsContainer: {
        backgroundColor: defaultStyle.color.primary,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    analyticsSubContainer: {
        paddingVertical: 24,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    analyticsElement: {
        alignItems: "center"
    },
    requestorContainer: {
        padding: 24,
        backgroundColor: defaultStyle.color.backgroundLight,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: '100%'
    }
})

export default styles