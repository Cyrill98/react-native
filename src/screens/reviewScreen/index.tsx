import React from 'react'
import { View, Text } from 'react-native'
import Header from '../../components/header'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/core'

const ReviewScreen = () => {
    const navigation = useNavigation();

    const onBack = () => {
        navigation.goBack();
    }
    return (
        <View>
            <Header
                SearchBar={false}
                Icon1={ <Ionicons name="chevron-back" size={24} style={{marginLeft: 0}} onPress={onBack}/>}

            />
            <Text>This is the review Screen</Text>
        </View>
    )
}

export default ReviewScreen
