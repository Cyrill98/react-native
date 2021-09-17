import React from 'react'
import { Text, ScrollView, View, FlatList } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/core'


import ProfileCard from '../../components/profileCard'
import Profile from '../../data/profile'
import defaultStyle from '../../globalstyles/defaultStyles'
import styles from './styles.ios'
import MainCard from '../../components/mainCard'
import items from '../../data/products'
import textStyles from '../../globalstyles/textSyles'
import OptionButton from '../../components/segmentedControls'
import ProfileTabs from '../../components/tabInProfile'
import Header from '../../components/header'
import { RootStackParamList } from '../../navigation/rootStackParam'
import { StackNavigationProp } from '@react-navigation/stack'

type profileScreenProp = StackNavigationProp<RootStackParamList, 'ProfileScreen'>;

const ProfileScreen = () => {

    const navigation = useNavigation<profileScreenProp>();
    const onSettings = () => {
        navigation.navigate('SettingScreen')
    }
    const onFavourite = () => {
        navigation.navigate('FavouriteScreen')
    }
    const onMessage = () => {
        navigation.navigate('MessageScreen')
    }

    return (
        <View style={styles.root}>
            <Header 
                containerStyle={{backgroundColor: defaultStyle.color.backgroundOverlay}}
                SearchBar={false}
                Icon2={ <Ionicons name="settings-outline" size={24} style={{marginLeft: 0, color: defaultStyle.color.altText}} onPress={onSettings}/>}
                Icon3={ <AntDesign name="hearto" size={24} style={{paddingLeft: 8, color: defaultStyle.color.altText}} onPress={onFavourite}/>}
                Icon4={ <AntDesign name="message1" size={24} style={{paddingLeft: 8, color: defaultStyle.color.altText}} onPress={onMessage}/> }
                />
            <ProfileCard profile={Profile[0]}/>
            <View style={styles.itemContainer}>
                <ProfileTabs/>
            </View>
        </View>
    )
}

export default ProfileScreen
