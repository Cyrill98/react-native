import { StyleSheet } from "react-native";
import color from "../../../constants/color";

const styles = StyleSheet.create({
    root: {
        backgroundColor: color.backgroundLight,
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
        backgroundColor: color.backgroundLight,
        height: 120,
        paddingTop: 16,
        paddingLeft: 16,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: color.text,
    }
})

export default styles