import { StyleSheet } from "react-native";
import defaultStyles from "../../globalstyles/defaultStyles";

const styles = StyleSheet.create (
    {
    root: {
        flex: 1,
        flexDirection: 'column',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderWidth: 0,
        borderColor: defaultStyles.color.primary,
        borderRadius: 10,
        backgroundColor: defaultStyles.color.backgroundLightSecondary,
        padding: 0,
        marginVertical: 10,
        marginHorizontal: 10,
        margin: 10,
        height: 256,
    },
    imageContainer: {
        width: "100%",
        height: 156,
    },
    image: {
        flex: 1,
        height: 150,
        width: '100%',
        resizeMode: 'contain',
    },
    detailContainer:{
        padding: 10,
        height: 100,
        flexDirection: "column",
        justifyContent: "space-between",
    },
    itemContainer: {

    },
    titleIconContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        //backgroundColor: 'green'
    },
    title: {
        fontWeight: "bold",
        width: 138,
    },
    donorContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    donorImage: {
        marginRight: 4,
        height: 20,
        width: 20,
        borderRadius: 24,
    }
}
)

export default styles;