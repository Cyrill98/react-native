import React, { useRef, useState } from 'react'
import { View, ScrollView, Text, Pressable, Linking, Alert } from 'react-native'
import  Animated  from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { RootStackParamList } from '../../../navigation/rootStackParam'
import CommonButton from '../../../components/atoms/button'
import Header from '../../../components/organisms/header'
import styles from './styles'
import typography from '../../../constants/typography'
import color from '../../../constants/color'
import BottomOption from '../../../components/molecules/bottomSheet'
import PopupModal from '../../../components/molecules/popupModal'

type settingScreenProp = StackNavigationProp<RootStackParamList>;

const SettingScreen = () => {
    // const sheetRef = useRef(null);
    const [logoutPopup, setLogoutPopup] = useState(false)

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
        // navigation.navigate('TNCScreen')
        Linking.openURL('https://www.sadaqamedia.examedia.my/terms-conditions/') .catch(err => {
            console.error("Failed opening page because: ", err)
            Alert.alert('Failed to open page')
        })
    }
    const onPrivacyPolicy = () => {
        // navigation.navigate('PrivacyPolicyScreen')
        Linking.openURL('https://www.sadaqamedia.examedia.my/privacy-policy/') .catch(err => {
            console.error("Failed opening page because: ", err)
            Alert.alert('Failed to open page')
        })
    }
    const onLogout = () => {
        // sheetRef.current.snapTo(0)
        setLogoutPopup(true)
    }
    const onConfirmLogout = () => {
    }

    // const fall = new Animated.Value(1)

    return (
        <View style={styles.root}>
        <ScrollView>
            <Header 
                SearchBar={false}
                Icon1={ <Ionicons name="chevron-back" size={24} style={{marginLeft: 0}} onPress={onBack}/>}/>
            <Text style={[typography.h3, {color:color.text, paddingTop: 24, paddingLeft: 24}]}>Settings</Text>
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <Text style={typography.subtitle}>Account</Text>
                    <Pressable style={styles.link} onPress={onEditProfile}>
                        <Text style={typography.body}>My Profile</Text>
                    </Pressable> 
                    {/* <Pressable style={styles.link} onPress={onEditAddress}>
                        <Text style={typography.body}>My Addresses</Text>
                    </Pressable>  */}
                    <Pressable style={styles.link} onPress={onChangePassword}>
                        <Text style={typography.body}>Change Password</Text>
                    </Pressable> 
                    {/* <Pressable style={styles.link} onPress={onVerification}>
                        <Text style={typography.body}>Verification</Text>
                    </Pressable>  */}
                </View>
                {/* <View style={styles.subContainer} >
                    <Text style={typography.subtitle}>Settings</Text>
                    <Pressable style={styles.link} onPress={onEditNotification}>
                        <Text style={typography.body}>Notification Settings</Text>
                    </Pressable> 
                    <Pressable style={styles.link} onPress={onEditPrivacy}>
                        <Text style={typography.body}>Privacy Settings</Text>
                    </Pressable> 
                </View> */}
                <View style={styles.subContainer}>
                    <Text style={typography.subtitle}>Support</Text>
                    {/* <Pressable style={styles.link} onPress={onHelpCentre}>
                        <Text style={typography.body}>Help Centre</Text>
                    </Pressable>  */}
                    <Pressable style={styles.link} onPress={onContactUs}>
                        <Text style={typography.body}>Contact Us</Text>
                    </Pressable> 
                    {/* <Pressable style={styles.link} onPress={onCommunityRules}>
                        <Text style={typography.body}>Community Rules</Text>
                    </Pressable>  */}
                    <Pressable style={styles.link} onPress={onTips}>
                        <Text style={typography.body}>Tips</Text>
                    </Pressable> 
                    <Pressable style={styles.link} onPress={onFAQ}>
                        <Text style={typography.body}>Frequently Asked Questions (FAQ)</Text>
                    </Pressable> 
                </View>
                <View style={styles.subContainer}>
                    <Text style={typography.subtitle}>From Us</Text>
                    <Pressable style={styles.link} onPress={onAboutSadaqamedia}>
                        <Text style={typography.body}>About Sadaqamedia</Text>
                    </Pressable> 
                    {/* <Pressable style={styles.link} onPress={onRoadmap}>
                        <Text style={typography.body}>Roadmap</Text>
                    </Pressable>  */}
                    <Pressable style={styles.link} onPress={onTnC}>
                        <Text style={typography.body}>Terms & Conditions</Text>
                    </Pressable>  
                    <Pressable style={styles.link} onPress={onPrivacyPolicy}>
                        <Text style={typography.body}>Privacy Policy</Text>
                    </Pressable>  
                </View>
                <CommonButton buttonText={"Logout"} primaryBackground primaryText onPress={onLogout}/>
            </View>        
        </ScrollView>
        <PopupModal 
            modalSubtitle="You will be logged out from the application. Are you sure?"
            isVisible={logoutPopup}
            button1={ <CommonButton primaryText primaryBackground buttonText="Yes. I am sure." onPress={onConfirmLogout}/> }
            button2={ <CommonButton primaryText={false} primaryBackground={false} buttonText="No. Please Cancel." onPress={() => setLogoutPopup(false)}/> }
            />
        {/* <BottomOption 
        ref={sheetRef}
        callBackNode={fall}
        panelTitle="Logout?" 
        panelSubtitle="You will be logged out from the application. Are you sure?"
        snapPoints={['33%', '0', '-1%']}
        button1={
            <CommonButton 
                primaryText 
                primaryBackground 
                buttonText="Yes. I am sure."
                onPress={onConfirmLogout}
                />}
        button2={
            <CommonButton 
                primaryText={false}
                primaryBackground={false}
                buttonText="No. Please cancel."
                onPress={()=> sheetRef.current.snapTo(2)}
                />}
        />   */}
        </View>  
    )
}

export default SettingScreen
