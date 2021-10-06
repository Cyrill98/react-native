import { StyleSheet } from "react-native";

import color from "../../../constants/color";

const styles = StyleSheet.create ({
    container: {
        backgroundColor: color.backgroundOverlay,
    },
    profileContainer: {
        paddingVertical: 16,
        paddingHorizontal: 24,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    profileImage: {
        height: 136,
        width: 136,
        borderRadius: 40,
        marginBottom: 12, 
    },
    profileDetail: {
        flexDirection: "column",
        justifyContent: "space-between",
        paddingVertical: 8,
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    socialDetail: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
    },
    itemContainer: {
        height: 400,
        backgroundColor: color.backgroundLight,
        borderTopStartRadius: 20,
        borderTopRightRadius: 20,
    }
})

export default styles