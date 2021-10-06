import React from 'react'
import { useNavigation } from '@react-navigation/core';
import { createStackNavigator } from '@react-navigation/stack'

import AboutScreen from '../screens/SettingsStack/aboutScreen';
import ChangePasswordScreen from '../screens/SettingsStack/changePasswordScreen';
import CommunityRulesScreen from '../screens/SettingsStack/communityRulesScreen';
import ContactUsScreen from '../screens/SettingsStack/contactUsScreen';
import EditAddressScreen from '../screens/SettingsStack/editAddressScreen';
import EditProfileScreen from '../screens/SettingsStack/editProfileScreen';
import FAQScreen from '../screens/SettingsStack/faqScreen';
import HelpCentreScreen from '../screens/SettingsStack/helpCentreScreen';
import NotificationSettingsScreen from '../screens/SettingsStack/notificationSettingsScreen';
import TNCScreen from '../screens/SettingsStack/tncScreen';
import PrivacySettingsScreen from '../screens/SettingsStack/privacySettingsScreen';
import RoadmapScreen from '../screens/SettingsStack/roadmapScreen';
import SettingScreen from '../screens/SettingsStack/settingScreen';
import TipsScreen from '../screens/SettingsStack/tipsScreen';
import PrivacyPolicyScreen from '../screens/SettingsStack/privacyPolicyScreen';
import VerificationScreen from '../screens/SettingsStack/verificationScreen';


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
