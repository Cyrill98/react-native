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

type homeScreenProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

const HomeStack = () => {
    const Stack = createStackNavigator<RootStackParamList>();
    const navigation = useNavigation<homeScreenProp>();
    const onFavourite = () => {
        navigation.navigate('FavouriteScreen')
    }
    const onMessage = () => {
        navigation.navigate('MessageScreen')
    }
    const onBack = () => {
        navigation.goBack();
    }

    return (
            <Stack.Navigator 
                screenOptions={{
                }}>
                <Stack.Screen 
                    component={Homescreen} 
                    name='HomeScreen'
                    options={{
                        title: '',
                        headerShown: true,
                        header: () => <Header 
                            SearchBar
                            Icon3={<AntDesign name="hearto" size={24} style={{paddingLeft: 8}} onPress={onFavourite}/>}
                            Icon4={<AntDesign name="message1" size={24} style={{paddingLeft: 8}} onPress={onMessage}/>}
                            />     
                        }}/>
                <Stack.Screen 
                    component={ItemDetailsScreen} 
                    name='ItemDetailsScreen'
                    options={{
                        headerShown: false,
                        title:'',
                        }}/>
                <Stack.Screen 
                    component={AddressScreen} 
                    name='AddressScreen'
                    options={{
                        headerShown: true,
                        header: () => 
                            <Header
                            SearchBar={false}
                            Icon1={ <Ionicons name="chevron-back" size={24} style={{marginLeft: 8}} onPress={onBack}/>}
                            />
                        }}/>
                <Stack.Screen 
                    component={FavouriteScreen} 
                    name='FavouriteScreen'
                    options={{
                        headerShown: true,
                        header: () => 
                            <Header
                            SearchBar={false}
                            Icon1={ <Ionicons name="chevron-back" size={24} style={{marginLeft: 8}} onPress={onBack}/>}
                            />
                        }}/>
                <Stack.Screen 
                    component={MessageScreen} 
                    name='MessageScreen'
                    options={{
                        headerShown: true,
                        header: () => 
                            <Header
                            SearchBar={false}
                            Icon1={ <Ionicons name="chevron-back" size={24} style={{marginLeft: 8}} onPress={onBack}/>}
                            />
                        }}/>
            </Stack.Navigator>
    )
}

export default HomeStack
