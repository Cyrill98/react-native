import React from 'react'
import { View, ScrollView, Text, FlatList, Pressable } from 'react-native'
import Header from '../../components/header'
import defaultStyle from '../../globalstyles/defaultStyles'
import textStyles from '../../globalstyles/textSyles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/core'
import styles from './styles'
import AddressCard from '../../components/addressCard'
import profile from '../../data/profile'

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
            <Text style={[textStyles.h3, {color:defaultStyle.color.text, paddingTop: 24, paddingLeft: 24}]}>My Addresses</Text>
            <View style={{padding: 24}}>
                <FlatList
                    data={profile[0].myAddresses}
                    renderItem={({item}) => <AddressCard profile={item}/>}
                />
                <Pressable style={styles.card}>
                    <Text style={textStyles.body}>Add new address</Text>
                </Pressable>
            </View>
            
            
        </ScrollView>
    )
}

export default EditAddressScreen
