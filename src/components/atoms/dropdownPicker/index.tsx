import React from 'react'
import { View } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import color from '../../../constants/color'

import styles from './styles'

interface DropdownProp {
  options: string[],
  defaultText: string,
}

const DropdownPicker = (props: DropdownProp) => {
    return (
        <View>
            <SelectDropdown
                    data={props.options} 
                    onSelect= {(selectedItem, index) => {
                        console.warn(selectedItem,index)
                    }}
                    buttonTextAfterSelection={(selectedItem,index) => selectedItem}
                    rowTextForSelection={(item, index) => item}
                    defaultButtonText={props.defaultText}
                    buttonStyle={styles.dropdownBtnStyle}
                    buttonTextStyle={styles.dropdownBtnTxtStyle}
                    renderDropdownIcon={() => {
                      return (
                        <FontAwesome name="chevron-down" color={color.subtleText} size={16} />
                      );
                    }}
                    dropdownIconPosition={"right"}
                    dropdownStyle={styles.dropdownDropdownStyle}
                    rowStyle={styles.dropdownRowStyle}
                    rowTextStyle={styles.dropdownRowTxtStyle}
                  />      
        </View>
    )
}

export default DropdownPicker
