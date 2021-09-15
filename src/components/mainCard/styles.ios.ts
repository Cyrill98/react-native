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
    },
    title: {
        fontWeight: "bold",
    },
}
)

export default styles;