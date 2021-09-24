import { StyleSheet } from "react-native";
import defaultStyle from "../../globalstyles/defaultStyles";

const styles = StyleSheet.create({
    root: {
        backgroundColor: defaultStyle.color.backgroundLight
    },
    socialContainer: {
        padding: 24,
    },
    socialItems: {
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 8
        
    }
})

export default styles