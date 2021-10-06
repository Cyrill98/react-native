import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/core'

import Header from '../../../components/organisms/header'
import Ionicons from 'react-native-vector-icons/Ionicons'

const MessageScreen = () => {
    const navigation = useNavigation();

    const onBack = () => {
        navigation.goBack();
    }

    return (
        <View>
            <Header 
                SearchBar={false}
                Icon1={ <Ionicons name="chevron-back" size={24} style={{marginLeft: 0}} onPress={onBack}/>}/>
            <Text>This is the message screen</Text>
        </View>
    )
}

export default MessageScreen
