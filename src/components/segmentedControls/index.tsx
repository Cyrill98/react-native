import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import {SegmentedControls} from 'react-native-radio-buttons'
import defaultStyle from '../../globalstyles/defaultStyles'

interface OptionProp {
    options: string[]
}

// function setSelectedOption(selectedOption){
//     this.setState({
//         selectedOption
//     });
// }

// function renderOption(option, selected, onSelect, index){
//     const style = selected ? { fontWeight: 'bold'} : {};
 
//     return (
//       <TouchableWithoutFeedback onPress={onSelect} key={index}>
//         <Text style={style}>{option}</Text>
//       </TouchableWithoutFeedback>
//     );
//   }

//   function renderContainer(optionNodes){
//     return <View>{optionNodes}</View>;
//   }

const OptionButton = (props:OptionProp) => {
    return (
        <View>
            <SegmentedControls
                options = { props.options }
                tint = { defaultStyle.color.primary }
                backTint = {'#c2c8c1'}
                selectedTint = { defaultStyle.color.altText}
                selectedBackgroundColor = {defaultStyle.color.primary}
                containerBorderTint = {'#c2c8c1'}
                separatorTint = {defaultStyle.color.backgroundLight}
                paddingTop = {16}
                paddingBottom = {16}
                allowFontScaling
            />
        </View>
    )
}

export default OptionButton
