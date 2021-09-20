import { StyleSheet } from "react-native";
import defaultStyles from "../../globalstyles/defaultStyles";

const styles = StyleSheet.create({
    tag: {
        backgroundColor: defaultStyles.color.secondary,
        justifyContent: "center",
        height: 50,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    tagText: {
        textAlign: 'center', 
        color: defaultStyles.color.text
    }
})

export default styles