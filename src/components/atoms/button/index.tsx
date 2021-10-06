import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import color from '../../../constants/color';
import textStyles from '../../../constants/typography';
import styles from './styles';

interface buttonProp {
    buttonText: string;
    buttonOption?: () => void;
    onPress?: () => void;
    containerStyles?: object;
    primaryBackground: boolean;
    primaryText: boolean;
}

const CommonButton = (props: buttonProp) => {
    const {primaryBackground, primaryText} = props;
    
    const background_color = primaryBackground ? color.primary : color.primary5;
    const text_color = primaryText ? color.altText : color.primary;
    return (
        <TouchableOpacity style={[styles.button, props.containerStyles ,{backgroundColor: background_color}]} onPress={props.onPress}>
            <Text style={[textStyles.button, {color: text_color}]}>{props.buttonText}</Text>
        </TouchableOpacity>
    )
}

export default CommonButton
