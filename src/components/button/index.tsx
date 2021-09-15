import React from 'react'
import { View, Text, Button, TouchableOpacity, Pressable } from 'react-native'

import defaultStyle from '../../globalstyles/defaultStyles';
import textStyles from '../../globalstyles/textSyles';
import styles from '../button/styles.ios';

interface buttonProp {
    buttonText: string;
    onPress?: () => void;
    //containerStyles?: object;
    primaryBackground: boolean;
    primaryText: boolean;
}

const CommonButton = (props: buttonProp) => {
    const {primaryBackground, primaryText} = props;
    
    const background_color = primaryBackground ? defaultStyle.color.primary : defaultStyle.color.primary5;
    const text_color = primaryText ? defaultStyle.color.altText : defaultStyle.color.primary;
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: background_color}]} onPress={props.onPress}>
            <Text style={[textStyles.button, {color: text_color}]}>{props.buttonText}</Text>
        </TouchableOpacity>
    )
}

export default CommonButton
