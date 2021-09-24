import { StyleSheet } from "react-native";
import defaultStyle from "../../globalstyles/defaultStyles";

const styles = StyleSheet.create({
    headerContainer: {
        paddingVertical: 16,
        marginBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: defaultStyle.color.backgroundAccent
    },
    contentContainer: {
        paddingVertical: 8,
        
    }
})

export default styles