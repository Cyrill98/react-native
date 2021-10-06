import { StyleSheet } from "react-native";
import defaultStyle from "../../globalstyles/defaultStyles";

const styles = StyleSheet.create({
    root: {
        backgroundColor: defaultStyle.color.backgroundLight,
        height: '100%'
    },
    detailContainer: {
        paddingHorizontal: 24
    },
    ratingContainer: {

    },
    starContainer: {
        paddingBottom: 16
    },
    reviewContainer: {

    },
    input: {
        backgroundColor: defaultStyle.color.backgroundLight,
        height: 120,
        paddingTop: 16,
        paddingLeft: 16,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: defaultStyle.color.text,
    }
})

export default styles