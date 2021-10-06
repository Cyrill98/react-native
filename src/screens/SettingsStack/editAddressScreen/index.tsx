import React from 'react'
import { View, ScrollView, Text, FlatList, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Header from '../../../components/organisms/header'
import AddressCard from '../../../components/molecules/addressCard'
import profile from '../../../data/profile'
import color from '../../../constants/color'
import typography from '../../../constants/typography'
import styles from './styles'

const EditAddressScreen = () => {
    const navigation = useNavigation();
    const onBack = () => {
        navigation.goBack()
    }
    return (
        <ScrollView style={styles.root}>
            <Header
                SearchBar={false}
                Icon1={ <Ionicons name="chevron-back" size={24} style={{marginLeft: 0}} onPress={onBack}/>}
            />
            <Text style={[typography.h3, {color:color.text, paddingTop: 24, paddingLeft: 24}]}>My Addresses</Text>
            <View style={{padding: 24}}>
                <FlatList
                    data={profile[0].myAddresses}
                    renderItem={({item}) => <AddressCard profile={item}/>}
                />
                <Pressable style={styles.card}>
                    <Text style={typography.body}>Add new address</Text>
                </Pressable>
            </View>
            
            
        </ScrollView>
    )
}

export default EditAddressScreen
