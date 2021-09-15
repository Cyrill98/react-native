import { ListViewComponent, StyleSheet } from "react-native"
import defaultStyle from "./defaultStyles"

const textStyles = StyleSheet.create({
    h1: {
        fontSize: defaultStyle.fontSize.xxl,
        fontWeight: "bold",
        letterSpacing: -0.02,
        lineHeight: 38,
        color: defaultStyle.color.text
    },
    h2: {
        fontSize: defaultStyle.fontSize.xl,
        fontWeight: "bold",
        letterSpacing: -0.02,
        lineHeight: 28,
        color: defaultStyle.color.text
    },
    h3: {
        fontSize: defaultStyle.fontSize.l,
        fontWeight: "bold",
        letterSpacing: -0.02,
        lineHeight: 23,
        color: defaultStyle.color.text 
    },
    subtitle: {
        fontSize: defaultStyle.fontSize.m,
        fontWeight: '500',
        letterSpacing: 0,
        lineHeight: 19,
        color: defaultStyle.color.text
    },
    pretitle: {
        fontSize: defaultStyle.fontSize.s,
        fontWeight: "bold",
        letterSpacing: 0.03,
        lineHeight: 16,
        textTransform: "capitalize",
        color: defaultStyle.color.text
    },
    body: {
        fontSize: defaultStyle.fontSize.m,
        fontWeight: "normal",
        letterSpacing: 0,
        lineHeight: 19,
        color: defaultStyle.color.text
    },
    bold: {
        fontSize: defaultStyle.fontSize.m,
        fontWeight: "bold",
        letterSpacing: 0,
        lineHeight: 19,
        color: defaultStyle.color.text
    },
    small: {
        fontSize: defaultStyle.fontSize.s,
        fontWeight: "normal",
        letterSpacing: 0,
        lineHeight: 20,
        color: defaultStyle.color.text
    },
    extrasmall: {
        fontSize: defaultStyle.fontSize.xs,
        fontWeight: "normal",
        letterSpacing: 0,
        lineHeight: 17,
        color: defaultStyle.color.text
    },
    button: {
        fontSize: defaultStyle.fontSize.m,
        fontWeight: "bold",
        letterSpacing: 0.04,
        lineHeight: 19,
        textTransform: "uppercase",
        color: defaultStyle.color.altText
    },
    buttonsmall: {
        fontSize: defaultStyle.fontSize.xxs,
        fontWeight: "bold",
        letterSpacing: 0.04,
        lineHeight: 12,
        textTransform: "uppercase",
        color: defaultStyle.color.text
    },
    link: {
        fontSize: defaultStyle.fontSize.xs,
        fontWeight: "bold",
        letterSpacing: 0,
        lineHeight: 14,
        textDecorationLine: "underline",
        color: defaultStyle.color.text
    },
    
})
export default textStyles