import { StyleSheet } from "react-native";
import defaultStyle from "../../globalstyles/defaultStyles";

const styles = StyleSheet.create({
    root: {
        borderRadius: 8,
        backgroundColor: defaultStyle.color.backgroundLightSecondary,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        padding: 16,
        marginVertical: 8,
    }
})

export default styles