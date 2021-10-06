import React from 'react'
import { View, TextInput } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

import styles from './styles'


interface secondHeaderProp {
    Icon1?: object
    SearchBar: boolean
    Icon2?: object
    Icon3?: object
    Icon4?: object
    containerStyle?: object
}

const Header = (props: secondHeaderProp) => {
    return (
        <View style={[styles.root, props.containerStyle]}>
            <View style={styles.backBtnContainer}>
                {props.Icon1}
            </View>
            {!!props.SearchBar &&
            <View style={styles.inputContainer}>
                <Feather name="search" size={24} style={{marginLeft: 8}} />
                <View style={{flexGrow: 1}}>
                <TextInput
                    style={{height: 40, marginLeft: 8, width: '80%', flex: 0}}
                    placeholder="Search..."
                    numberOfLines={1}
                    /> 
                </View>
            </View>
            }
            <View style={styles.rightBtnContainer}>
                {props.Icon2}
                {props.Icon3}
                {props.Icon4}
            </View>
        </View>
    )
}

export default Header
