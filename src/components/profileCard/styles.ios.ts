import { StyleSheet } from "react-native";
import defaultStyles from "../../globalstyles/defaultStyles";

const styles = StyleSheet.create ({
    container: {
        backgroundColor: defaultStyles.color.backgroundOverlay,
    },
    profileContainer: {
        paddingTop: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 24,
    },
    profileImage: {
        height: 136,
        width: 136,
        borderRadius: 40,
        marginBottom: 24, 
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