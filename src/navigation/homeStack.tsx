import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { RootStackParamList } from './rootStackParam';
import Header from '../components/organisms/header';
import Homescreen from '../screens/HomeStack/homeScreen';
import ItemDetailsScreen from '../screens/HomeStack/itemDetailScreen';
import FavouriteScreen from '../screens/ProfileStack/favouriteScreen';
import MessageScreen from '../screens/ProfileStack/messageScreen';
import RequestScreen from '../screens/HomeStack/requestScreen';
import ConfirmRequestScreen from '../screens/HomeStack/confirmRequestScreen';

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
                            // Icon3={<AntDesign name="hearto" size={24} style={{paddingLeft: 8}} onPress={onFavourite}/>}
                            // Icon4={<AntDesign name="message1" size={24} style={{paddingLeft: 8}} onPress={onMessage}/>}
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
                    component={RequestScreen} 
                    name='RequestScreen'
                    options={{
                        headerShown: true,
                        header: () => 
                            <Header
                            SearchBar={false}
                            Icon1={ <Ionicons name="chevron-back" size={24} style={{marginLeft: 8}} onPress={onBack}/>}
                            />
                        }}/>
                <Stack.Screen 
                    component={ConfirmRequestScreen} 
                    name='ConfirmRequestScreen'
                    options={{
                        headerShown: true,
                        header: () => 
                            <Header
                            SearchBar={false}
                            />
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
                
            </Stack.Navigator>
    )
}

export default HomeStack
