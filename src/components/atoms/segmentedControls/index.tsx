import React from 'react'
import { View } from 'react-native'
import { SegmentedControls } from 'react-native-radio-buttons'

import color from '../../../constants/color'

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
                tint = { color.primary }
                backTint = {'#c2c8c1'}
                selectedTint = { color.altText}
                selectedBackgroundColor = {color.primary}
                containerBorderTint = {'#c2c8c1'}
                separatorTint = {color.backgroundLight}
                paddingTop = {16}
                paddingBottom = {16}
                allowFontScaling
            />
        </View>
    )
}

export default OptionButton
