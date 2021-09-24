import { StyleSheet } from "react-native";
import defaultStyle from "../../globalstyles/defaultStyles";

const styles = StyleSheet.create({
    root: {
        backgroundColor: defaultStyle.color.backgroundLight
    },
    container: {
        padding: 24
    },
    header: {
        paddingVertical: 8,
    },
    points: {
        paddingVertical: 4,
    }
})

export default styles