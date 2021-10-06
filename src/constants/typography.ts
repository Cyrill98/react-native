import { StyleSheet } from "react-native"
import color from "./color"

const textStyles = StyleSheet.create({
    h1: {
        fontSize: 32,
        fontWeight: "bold",
        letterSpacing: -0.02,
        lineHeight: 38,
        color: color.text
    },
    h2: {
        fontSize: 24,
        fontWeight: "bold",
        letterSpacing: -0.02,
        lineHeight: 28,
        color: color.text
    },
    h3: {
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: -0.02,
        lineHeight: 23,
        color: color.text 
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '500',
        letterSpacing: 0,
        lineHeight: 19,
        color: color.text
    },
    pretitle: {
        fontSize: 14,
        fontWeight: "bold",
        letterSpacing: 0.03,
        lineHeight: 16,
        textTransform: "capitalize",
        color: color.text
    },
    body: {
        fontSize: 16,
        fontWeight: "normal",
        letterSpacing: 0,
        lineHeight: 19,
        color: color.text
    },
    bold: {
        fontSize: 16,
        fontWeight: "bold",
        letterSpacing: 0,
        lineHeight: 19,
        color: color.text
    },
    small: {
        fontSize: 14,
        fontWeight: "normal",
        letterSpacing: 0,
        lineHeight: 20,
        color: color.text
    },
    extrasmall: {
        fontSize: 12,
        fontWeight: "normal",
        letterSpacing: 0,
        lineHeight: 17,
        color: color.text
    },
    button: {
        fontSize: 16,
        fontWeight: "bold",
        letterSpacing: 0.04,
        lineHeight: 19,
        textTransform: "uppercase",
        color: color.altText
    },
    buttonsmall: {
        fontSize: 10,
        fontWeight: "bold",
        letterSpacing: 0.04,
        lineHeight: 12,
        textTransform: "uppercase",
        color: color.text
    },
    link: {
        fontSize: 12,
        fontWeight: "bold",
        letterSpacing: 0,
        lineHeight: 14,
        textDecorationLine: "underline",
        color: color.text
    },
    
})
export default textStyles