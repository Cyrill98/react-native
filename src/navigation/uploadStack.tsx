import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList } from './rootStackParam';
import UploadScreen from '../screens/UploadStack/uploadScreen';
import ConfirmUploadScreen from '../screens/UploadStack/confirmListingScreen';

const UploadStack = () => {
    const Stack = createStackNavigator<RootStackParamList>();

    return (
            <Stack.Navigator 
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen 
                    component={UploadScreen} 
                    name='UploadScreen'
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
                    component={ConfirmUploadScreen} 
                    name='ConfirmUploadScreen'
                    options={{
                        headerShown: false,
                        title:'',
                        // header: () => 
                        //     <Header
                        //     SearchBar={false}
                        //     Icon1={ <Ionicons name="chevron-back" size={24} style={{marginLeft: 8}} onPress={onBack}/>}
                        //     />
                        }}/>
            </Stack.Navigator>
    )
}

export default UploadStack
