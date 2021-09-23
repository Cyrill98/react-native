import React from 'react'
import { View, ScrollView, Text, Pressable } from 'react-native'
import Header from '../../components/header'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './styles'
import { useNavigation } from '@react-navigation/core'
import textStyles from '../../globalstyles/textSyles'
import defaultStyle from '../../globalstyles/defaultStyles'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../navigation/rootStackParam'
import CommonButton from '../../components/button'

type settingScreenProp = StackNavigationProp<RootStackParamList>;

const SettingScreen = () => {
    const navigation = useNavigation<settingScreenProp>();

    const onBack = () => {
        navigation.goBack()
    }
    const onEditProfile = () => {
        navigation.navigate('EditProfileScreen')
    }
    const onEditAddress = () => {
        navigation.navigate('EditAddressScreen')
    }
    const onChangePassword = () => {
        navigation.navigate('ChangePasswordScreen')
    }
    const onVerification = () => {
        navigation.navigate('VerificationScreen')
    }
    const onEditNotification = () => {
        navigation.navigate('NotificationSettingsScreen')
    }
    const onEditPrivacy = () => {
        navigation.navigate('PrivacySettingsScreen')
    }
    const onHelpCentre = () => {
        navigation.navigate('HelpCentreScreen')
    }
    const onContactUs = () => {
        navigation.navigate('ContactUsScreen')
    }
    const onCommunityRules = () => {
        navigation.navigate('CommunityRulesScreen')
    }
    const onTips = () => {
        navigation.navigate('TipsScreen')
    }
    const onFAQ = () => {
        navigation.navigate('FAQScreen')
    }
    const onAboutSadaqamedia = () => {
        navigation.navigate('AboutScreen')
    }
    const onRoadmap = () => {
        navigation.navigate('RoadmapScreen')
    }
    const onTnC = () => {
        navigation.navigate('TNCScreen')
    }
    const onLogout = () => {
        
    }

    return (
        <ScrollView style={styles.root}>
            <Header 
                SearchBar={false}
                Icon1={ <Ionicons name="chevron-back" size={24} style={{marginLeft: 0}} onPress={onBack}/>}/>
            <Text style={[textStyles.h3, {color:defaultStyle.color.text, paddingTop: 24, paddingLeft: 24}]}>Settings</Text>
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <Text style={textStyles.subtitle}>Account</Text>
                    <Pressable style={styles.link} onPress={onEditProfile}>
                        <Text style={textStyles.body}>My Profile</Text>
                    </Pressable> 
                    <Pressable style={styles.link} onPress={onEditAddress}>
                        <Text style={textStyles.body}>My Addresses</Text>
                    </Pressable> 
                    <Pressable style={styles.link} onPress={onChangePassword}>
                        <Text style={textStyles.body}>Change Password</Text>
                    </Pressable> 
                    <Pressable style={styles.link} onPress={onVerification}>
                        <Text style={textStyles.body}>Verification</Text>
                    </Pressable> 
                </View>
                <View style={styles.subContainer} >
                    <Text style={textStyles.subtitle}>Settings</Text>
                    <Pressable style={styles.link} onPress={onEditNotification}>
                        <Text style={textStyles.body}>Notification Settings</Text>
                    </Pressable> 
                    <Pressable style={styles.link} onPress={onEditPrivacy}>
                        <Text style={textStyles.body}>Privacy Settings</Text>
                    </Pressable> 
                </View>
                <View style={styles.subContainer}>
                    <Text style={textStyles.subtitle}>Support</Text>
                    <Pressable style={styles.link} onPress={onHelpCentre}>
                        <Text style={textStyles.body}>Help Centre</Text>
                    </Pressable> 
                    <Pressable style={styles.link} onPress={onContactUs}>
                        <Text style={textStyles.body}>Contact Us</Text>
                    </Pressable> 
                    <Pressable style={styles.link} onPress={onCommunityRules}>
                        <Text style={textStyles.body}>Community Rules</Text>
                    </Pressable> 
                    <Pressable style={styles.link} onPress={onTips}>
                        <Text style={textStyles.body}>Tips</Text>
                    </Pressable> 
                    <Pressable style={styles.link} onPress={onFAQ}>
                        <Text style={textStyles.body}>Frequently Asked Questions (FAQ)</Text>
                    </Pressable> 
                </View>
                <View style={styles.subContainer}>
                    <Text style={textStyles.subtitle}>From Us</Text>
                    <Pressable style={styles.link} onPress={onAboutSadaqamedia}>
                        <Text style={textStyles.body}>About Sadaqamedia</Text>
                    </Pressable> 
                    <Pressable style={styles.link} onPress={onRoadmap}>
                        <Text style={textStyles.body}>Roadmap</Text>
                    </Pressable> 
                    <Pressable style={styles.link} onPress={onTnC}>
                        <Text style={textStyles.body}>Terms & Conditions</Text>
                    </Pressable>  
                </View>
                <CommonButton buttonText={"Logout"} primaryBackground primaryText onPress={onLogout}/>
                
            </View>
                   
        </ScrollView>
    )
}

export default SettingScreen
