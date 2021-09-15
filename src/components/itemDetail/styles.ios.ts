import { StyleSheet } from "react-native";
import defaultStyles from "../../globalstyles/defaultStyles";

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: defaultStyles.color.secondary,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            marginTop: -12,
        },
        tag: {
            backgroundColor: defaultStyles.color.secondary,
            justifyContent: "center",
            height: 50,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
        },
        detailContainer: {
            padding: 20,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            backgroundColor: defaultStyles.color.backgroundLight,
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
            borderBottomColor: defaultStyles.color.backgroundAccent,
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