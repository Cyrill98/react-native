import { useNavigation } from '@react-navigation/core';
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import AboutScreen from '../screens/aboutScreen';
import ChangePasswordScreen from '../screens/changePasswordScreen';
import CommunityRulesScreen from '../screens/communityRulesScreen';
import ContactUsScreen from '../screens/contactUsScreen';
import EditAddressScreen from '../screens/editAddressScreen';
import EditProfileScreen from '../screens/editProfileScreen';
import FAQScreen from '../screens/faqScreen';
import HelpCentreScreen from '../screens/helpCentreScreen';
import NotificationSettingsScreen from '../screens/notificationSettingsScreen';
import TNCScreen from '../screens/tncScreen';
import PrivacySettingsScreen from '../screens/privacySettingsScreen';
import RoadmapScreen from '../screens/roadmapScreen';
import SettingScreen from '../screens/settingScreen';
import TipsScreen from '../screens/tipsScreen';
import PrivacyPolicyScreen from '../screens/privacyPolicyScreen';
import VerificationScreen from '../screens/verificationScreen';


const SettingsStack = () => {
    const Stack = createStackNavigator();
    const navigation = useNavigation();

    return (
        <Stack.Navigator>
            <Stack.Screen
                component={SettingScreen}
                name="SettingsScreen"
                options={{
                    title: '',
                    headerShown: false
                }}
                />
            <Stack.Screen
                component={EditProfileScreen}
                name="EditProfileScreen"
                options={{
                    title: '',
                    headerShown: false
                }}
                />
            <Stack.Screen
                component={EditAddressScreen}
                name="EditAddressScreen"
                options={{
                    title: '',
                    headerShown: false
                }}
                />
            <Stack.Screen
                component={ChangePasswordScreen}
                name="ChangePasswordScreen"
                options={{
                    title: '',
                    headerShown: false
                }}
                />
            <Stack.Screen
                component={VerificationScreen}
                name="VerificationScreen"
                options={{
                    title: '',
                    headerShown: false
                }}
                />
            <Stack.Screen
                component={NotificationSettingsScreen}
                name="NotificationSettingsScreen"
                options={{
                    title: '',
                    headerShown: false
                }}
                />
            <Stack.Screen
                component={PrivacySettingsScreen}
                name="PrivacySettingsScreen"
                options={{
                    title: '',
                    headerShown: false
                }}
                />
            <Stack.Screen
                component={HelpCentreScreen}
                name="HelpCentreScreen"
                options={{
                    title: '',
                    headerShown: false
                }}
                />
            <Stack.Screen
                component={ContactUsScreen}
                name="ContactUsScreen"
                options={{
                    title: '',
                    headerShown: false
                }}
                />
            <Stack.Screen
                component={CommunityRulesScreen}
                name="CommunityRulesScreen"
                options={{
                    title: '',
                    headerShown: false
                }}
                />
            <Stack.Screen
                component={TipsScreen}
                name="TipsScreen"
                options={{
                    title: '',
                    headerShown: false
                }}
                />
            <Stack.Screen
                component={FAQScreen}
                name="FAQScreen"
                options={{
                    title: '',
                    headerShown: false
                }}
                />
            <Stack.Screen
                component={AboutScreen}
                name="AboutScreen"
                options={{
                    title: '',
                    headerShown: false
                }}
                />
            <Stack.Screen
                component={RoadmapScreen}
                name="RoadmapScreen"
                options={{
                    title: '',
                    headerShown: false
                }}
                />
            <Stack.Screen
                component={TNCScreen}
                name="TNCScreen"
                options={{
                    title: '',
                    headerShown: false
                }}
                />
            <Stack.Screen
                component={PrivacyPolicyScreen}
                name="PrivacyPolicyScreen"
                options={{
                    title: '',
                    headerShown: false
                }}
                />
        </Stack.Navigator>
    )
}

export default SettingsStack
