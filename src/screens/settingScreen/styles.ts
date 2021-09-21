import { StyleSheet } from "react-native";
import defaultStyle from "../../globalstyles/defaultStyles";


const styles = StyleSheet.create ({
    root: {
        backgroundColor: defaultStyle.color.backgroundLight,
        paddingBottom: 56,
    },
    container: {
        padding: 24,
    },
    subContainer: {
        paddingBottom: 24,
    },
    link: {
        padding: 24,
        borderBottomWidth: 1,
        borderBottomColor: defaultStyle.color.backgroundAccent 
    }
})

export default styles