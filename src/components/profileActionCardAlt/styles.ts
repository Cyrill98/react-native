import { StyleSheet } from "react-native";
import defaultStyles from "../../globalstyles/defaultStyles";

const styles = StyleSheet.create (
    {
    root: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderRadius: 32,
        backgroundColor: defaultStyles.color.backgroundLightSecondary,
        marginVertical: 10,
    },
    summaryContainer: {
        flexDirection: 'row',
        alignItems: "center",
        paddingRight: 24,
        justifyContent: "space-between",
        height: 64,
    },
    profileContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    imageContainer: {
        width: 64,
        height: 64,
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
        borderRadius: 32,
        overflow: "hidden",
    },
    detailContainer:{
        paddingLeft: 16,
    },
    profileImageContainer: {
        marginHorizontal: 16,
    },
    profileImage: {
        width: 64,
        height: 64,
        resizeMode: "cover",
        borderRadius: 64,
        overflow: "hidden",
    },
    actionContainer: {
        flexDirection: "row",
        alignItems: "center",
    }
}
)

export default styles;