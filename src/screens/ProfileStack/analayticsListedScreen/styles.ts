import { StyleSheet } from "react-native";

import color from "../../../constants/color";

const styles = StyleSheet.create({
    root: {
        backgroundColor: color.backgroundLight
    },
    itemDetailContainer: {
        padding: 16
    },
    analyticsContainer: {
        backgroundColor: color.primary,
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
        backgroundColor: color.backgroundLight,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: '100%'
    }
})

export default styles