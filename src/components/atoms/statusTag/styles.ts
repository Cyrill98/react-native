import { StyleSheet } from "react-native";

import color from "../../../constants/color";

const styles = StyleSheet.create({
    detailTag: {
        backgroundColor: color.secondary,
        justifyContent: "center",
        height: 50,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    miniTag: {
        backgroundColor: color.secondary,
        justifyContent: "center",
        height: 32,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        marginTop: -32,
    },
    detailTagText: {
        textAlign: 'center', 
        color: color.text
    },
    cardTagText: {
        textAlign: 'center', 
        color: color.text
    }
})

export default styles