import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Feather from 'react-native-vector-icons/Feather'

import styles from '../header/styles.ios'


interface secondHeaderProp {
    Icon1?: object
    SearchBar: boolean
    Icon2?: object
    Icon3?: object
    Icon4?: object
}

const Header = (props: secondHeaderProp) => {
    const navigation = useNavigation();

    const onBack = () => {
        navigation.goBack();
        return
    }
    return (
        <View style={styles.root}>
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
