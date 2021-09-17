import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core'
import { RootStackParamList } from './rootStackParam';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Header from '../components/header';
import Homescreen from '../screens/homeScreen';
import ItemDetailsScreen from '../screens/itemDetailScreen';
import AddressScreen from '../screens/addressScreen';
import FavouriteScreen from '../screens/favouriteScreen';
import MessageScreen from '../screens/messageScreen';
import ProfileScreen from '../screens/profileScreen';
import ReviewScreen from '../screens/reviewScreen';
import SettingScreen from '../screens/settingScreen';

type profileScreenProp = StackNavigationProp<RootStackParamList, 'ProfileScreen'>;

const ProfileStack = () => {
    const Stack = createStackNavigator<RootStackParamList>();
    const navigation = useNavigation<profileScreenProp>();
    const onBack = () => {
        navigation.goBack();
    }

    return (
            <Stack.Navigator 
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen 
                    component={ProfileScreen} 
                    name='ProfileScreen'
                    options={{
                        title: '',
                        headerShown: false,
                        // header: () => <Header 
                        //     SearchBar
                        //     Icon3={<AntDesign name="hearto" size={24} style={{paddingLeft: 8}} onPress={onFavourite}/>}
                        //     Icon4={<AntDesign name="message1" size={24} style={{paddingLeft: 8}} onPress={onMessage}/>}
                        //     />     
                        }}/>
                <Stack.Screen 
                    component={ItemDetailsScreen} 
                    name='ItemDetailsScreen'
                    options={{
                        headerShown: false,
                        title:'',
                        // header: () => 
                        //     <Header
                        //     SearchBar={false}
                        //     Icon1={ <Ionicons name="chevron-back" size={24} style={{marginLeft: 8}} onPress={onBack}/>}
                        //     />
                        }}/>
                <Stack.Screen 
                    component={ReviewScreen} 
                    name='ReviewScreen'
                    options={{
                        headerShown: false,
                        // header: () => 
                        //     <Header
                        //     SearchBar={false}
                        //     Icon1={ <Ionicons name="chevron-back" size={24} style={{marginLeft: 8}} onPress={onBack}/>}
                        //     />
                        }}/>
                        <Stack.Screen 
                    component={FavouriteScreen} 
                    name='FavouriteScreen'
                    options={{
                        headerShown: false,
                        // header: () => 
                        //     <Header
                        //     SearchBar={false}
                        //     Icon1={ <Ionicons name="chevron-back" size={24} style={{marginLeft: 8}} onPress={onBack}/>}
                        //     />
                        }}/>
                <Stack.Screen 
                    component={MessageScreen} 
                    name='MessageScreen'
                    options={{
                        headerShown: false,
                        // header: () => 
                        //     <Header
                        //     SearchBar={false}
                        //     Icon1={ <Ionicons name="chevron-back" size={24} style={{marginLeft: 8}} onPress={onBack}/>}
                        //     />
                        }}/>
                <Stack.Screen 
                    component={SettingScreen} 
                    name='SettingScreen'
                    options={{
                        headerShown: false,
                        // header: () => 
                        //     <Header
                        //     SearchBar={false}
                        //     Icon1={ <Ionicons name="chevron-back" size={24} style={{marginLeft: 8}} onPress={onBack}/>}
                        //     />
                        }}/>
            </Stack.Navigator>
    )
}

export default ProfileStack
