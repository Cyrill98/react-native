import { StyleSheet } from "react-native";

import color from "../../../constants/color";

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: color.secondary,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            marginTop: -12,
        },
        tag: {
            backgroundColor: color.secondary,
            justifyContent: "center",
            height: 50,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
        },
        detailContainer: {
            padding: 20,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            backgroundColor: color.backgroundLight,
        },
        detail: {
            flexDirection: "row",
            alignItems: 'center',
        },
        title: {

        },
        location: {

        },
        donor: {

        },
        hairline: {
            borderBottomColor: color.backgroundAccent,
            borderBottomWidth: 1,
            marginTop: 24,
            marginBottom: 24,
        },
        donorImage: {
            height: 64,
            width: 64,
            borderRadius: 64,
        },
        ratingContainer: {
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 5,
        },
        takerImage: {
            height: 24,
            width: 24,
            borderRadius: 24,
            alignContent: "center",
            margin: 4,
        },
        star:{},
    }
)

export default styles