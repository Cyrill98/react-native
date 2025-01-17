import { StyleSheet } from "react-native";
import color from "../../../constants/color";

const styles = StyleSheet.create({
    root: {
        height: '100%',
        backgroundColor: color.backgroundLight
    },
    detailContainer: {
        
    },
    publishCard: {
        marginHorizontal: 40,
        marginVertical: 24,
        paddingVertical: 56,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color.primary,
        borderRadius: 32,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    textStyle: {
        fontStyle: "italic",
        fontSize: 40,
        color:color.altText, 
        textAlign: 'center', 
        padding: 24
    },
    noteContainer: {
        paddingHorizontal: 64,
    },
    buttonContainer: {
        padding: 24,
    },
})

export default styles