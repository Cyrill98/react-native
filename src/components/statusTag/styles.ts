import { StyleSheet } from "react-native";
import defaultStyles from "../../globalstyles/defaultStyles";

const styles = StyleSheet.create({
    detailTag: {
        backgroundColor: defaultStyles.color.secondary,
        justifyContent: "center",
        height: 50,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    miniTag: {
        backgroundColor: defaultStyles.color.secondary,
        justifyContent: "center",
        height: 32,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        marginTop: -32,
    },
    detailTagText: {
        textAlign: 'center', 
        color: defaultStyles.color.text
    },
    cardTagText: {
        textAlign: 'center', 
        color: defaultStyles.color.text
    }
})

export default styles