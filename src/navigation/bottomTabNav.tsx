import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ProfileScreen from '../screens/profileScreen';
import defaultStyle from '../globalstyles/defaultStyles';
import HomeStack from './homeStack';
import UploadScreen from '../screens/uploadScreen';
import ProfileStack from './profileStack';
import UploadStack from './uploadStack';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
    return (
            <Tab.Navigator 
                screenOptions={{
                    headerShown: false, 
                    tabBarShowLabel: false,
                    tabBarInactiveTintColor: defaultStyle.color.secondary,
                    tabBarActiveTintColor: defaultStyle.color.primary,
                    }} >
                <Tab.Screen 
                    component={HomeStack} 
                    name='HomeStack' 
                    options={{
                        tabBarIcon: (({color}) => 
                            <Entypo 
                                name='home' 
                                color={color} 
                                size={24}/>
                        ),
                    }}/>
                <Tab.Screen 
                    component={UploadStack} 
                    name='UploadStack' 
                    options={{
                        tabBarIcon: (({color}) => 
                            <Ionicons 
                                name='add-circle-outline' 
                                color={color} 
                                size={48}/>
                        ),
                    }}/>
                <Tab.Screen 
                    component={ProfileStack} 
                    name='ProfileStack' 
                    options={{
                        tabBarIcon: (({color}) => 
                            <Entypo 
                                name='user' 
                                color={color} 
                                size={24}/>
                        ),
                    }}/>
            </Tab.Navigator>
    )
}

export default BottomTabNav
