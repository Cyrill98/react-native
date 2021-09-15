import { StyleSheet } from "react-native";
import defaultStyle from "../../globalstyles/defaultStyles";

const styles = StyleSheet.create ({
    root: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        margin: 0, 
        padding: 8,
        height: 56,
        backgroundColor: defaultStyle.color.backgroundLight, 
    },
    backBtnContainer: {
        justifyContent: "flex-start",
        marginRight: 0,
        padding: 0,
    },
    inputContainer: {
        marginLeft: 0,
        width: 200,
        backgroundColor: defaultStyle.color.backgroundLightSecondary,
        flexDirection: 'row',
        flexGrow: 1,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderRadius: 4,
    },
    rightBtnContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end' , 
        margin: 0, 
        paddingLeft: 0,
    },

})

export default styles