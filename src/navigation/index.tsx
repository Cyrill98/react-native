import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import BottomTabNav from './bottomTabNav';
import FavouriteScreen from '../screens/favouriteScreen';
import MessageScreen from '../screens/messageScreen';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen component={BottomTabNav} name='HomeTabs'/>
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
        </NavigationContainer>
    )
}

export default Router
