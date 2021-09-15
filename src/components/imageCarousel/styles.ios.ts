import { StyleSheet } from "react-native";
import defaultStyles from "../../globalstyles/defaultStyles";

const styles = StyleSheet.create ({
    root: {
        backgroundColor: defaultStyles.color.backgroundLightSecondary
    },
    image: {
        height: 390,
        resizeMode: 'contain'
    },
})

export default styles