import { StyleSheet } from "react-native";
import defaultStyles from "../../globalstyles/defaultStyles";

const styles = StyleSheet.create ({
    container: {
        backgroundColor: defaultStyles.color.backgroundOverlay,
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
        backgroundColor: defaultStyles.color.backgroundLight,
        borderTopStartRadius: 20,
        borderTopRightRadius: 20,
    }
})

export default styles