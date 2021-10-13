import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { RootStackParamList } from '../../../navigation/rootStackParam'
import ProfileCard from '../../../components/molecules/profileCard'
import ProfileTabs from '../../../components/organisms/tabInProfile'
import Header from '../../../components/organisms/header'
import Profile from '../../../data/profile'
import color from '../../../constants/color'
import styles from './styles'

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
                containerStyle={{backgroundColor: color.backgroundOverlay}}
                SearchBar={false}
                Icon2={ <Ionicons name="settings-outline" size={24} style={{marginLeft: 0, color: color.altText}} onPress={onSettings}/>}
                // Icon3={ <AntDesign name="hearto" size={24} style={{paddingLeft: 8, color: color.altText}} onPress={onFavourite}/>}
                // Icon4={ <AntDesign name="message1" size={24} style={{paddingLeft: 8, color: color.altText}} onPress={onMessage}/> }
                />
            <ProfileCard profile={Profile[0]}/>
            <View style={styles.itemContainer}>
                <ProfileTabs/>
            </View>
        </View>
    )
}

export default ProfileScreen
