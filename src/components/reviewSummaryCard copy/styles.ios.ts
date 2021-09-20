import { StyleSheet } from "react-native";
import defaultStyles from "../../globalstyles/defaultStyles";

const styles = StyleSheet.create (
    {
    root: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderRadius: 10,
        backgroundColor: defaultStyles.color.backgroundLightSecondary,
        margin: 10,
    },
    summaryContainer: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between", 
        borderBottomWidth: 1,
        borderBottomColor: defaultStyles.color.backgroundAccent    
    },
    imageContainer: {
        width: 96,
        height: 96,
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        overflow: "hidden",
    },
    detailContainer:{
        padding: 10,
        width: 160,
    },
    profileImageContainer: {
        marginHorizontal: 16,
    },
    profileImage: {
        width: 64,
        height: 64,
        resizeMode: "cover",
        backgroundColor: 'red',
        borderRadius: 64,
        overflow: "hidden",
    },
    reviewContainer: {
        padding: 16
    },
    ratingContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 8,
    },
    starRatingContainer: {
        flexDirection: "row",
        justifyContent: "center",
    }
}
)

export default styles;