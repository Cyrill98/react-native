import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList } from './rootStackParam';
import ItemDetailsScreen from '../screens/HomeStack/itemDetailScreen';
import FavouriteScreen from '../screens/ProfileStack/favouriteScreen';
import MessageScreen from '../screens/ProfileStack/messageScreen';
import ProfileScreen from '../screens/ProfileStack/profileScreen';
import ReviewScreen from '../screens/ProfileStack/reviewScreen';
import SettingsStack from './settingsStack';
import AnalyticsListedScreen from '../screens/ProfileStack/analayticsListedScreen';
import AnalyticsReservedScreen from '../screens/ProfileStack/analayticsReservedScreen';
import AnalyticsDonatedScreen from '../screens/ProfileStack/analayticsDonatedScreen';
import EditItemDetailsScreen from '../screens/ProfileStack/editItemDetailScreen';
import ReviewToDonorScreen from '../screens/ReviewStack/reviewToDonorScreen';
import ReviewToTakerScreen from '../screens/ReviewStack/reviewToTakerScreen';
import ConfirmReviewToDonorScreen from '../screens/ReviewStack/confirmReviewToDonorScreen';
import ConfirmReviewToTakerScreen from '../screens/ReviewStack/confirmReviewToTakerScreen';
import RequestorDetailsScreen from '../screens/ProfileStack/requestorDetailScreen';

const ProfileStack = () => {
    const Stack = createStackNavigator<RootStackParamList>();

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
                    component={EditItemDetailsScreen} 
                    name='EditItemDetailsScreen'
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
                    component={AnalyticsListedScreen} 
                    name='AnalyticsListedScreen'
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
                    component={RequestorDetailsScreen} 
                    name='RequestorDetailsScreen'
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
                    component={AnalyticsReservedScreen} 
                    name='AnalyticsReservedScreen'
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
                    component={AnalyticsDonatedScreen} 
                    name='AnalyticsDonatedScreen'
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
                    component={ReviewToDonorScreen} 
                    name='ReviewToDonorScreen'
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
                    component={ReviewToTakerScreen} 
                    name='ReviewToTakerScreen'
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
                    component={ConfirmReviewToDonorScreen} 
                    name='ConfirmReviewToDonorScreen'
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
                    component={ConfirmReviewToTakerScreen} 
                    name='ConfirmReviewToTakerScreen'
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
                    component={SettingsStack} 
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
