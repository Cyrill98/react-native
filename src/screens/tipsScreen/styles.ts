import { StyleSheet } from "react-native";
import defaultStyle from "../../globalstyles/defaultStyles";

const styles = StyleSheet.create({
    root: {
        backgroundColor: defaultStyle.color.backgroundLight   
    },
    container: {
        padding: 24,
    },
    items: {
        paddingTop: 16,
        paddingBottom: 8,
    }
})

export default styles