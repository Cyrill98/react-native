import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

import Header from '../../../components/organisms/header'
import color from '../../../constants/color'
import typography from '../../../constants/typography'
import styles from './styles'

const ContactUsScreen = () => {
    const navigation = useNavigation();
    const onBack = () => {
        navigation.goBack()
    }
    return (
        <ScrollView style={styles.root}>
            <Header
                SearchBar={false}
                Icon1={ <Ionicons name="chevron-back" size={24} style={{marginLeft: 0}} onPress={onBack}/>}
            />
            <Text style={[typography.h3, {color:color.text, paddingTop: 24, paddingLeft: 24}]}>Contact Us</Text>
            <Text style={[typography.body, {color:color.text, paddingTop: 24, paddingHorizontal: 24}]}>
                {/* If you would need help regarding the platform, kindly make your way to the help centre. We have dedicated teams that will address your problem as soon as possible. 
                {"\n"}{"\n"}Otherwise, if you have other matters (e.g advertising, constructive criticism, etc), do hit us up at any one of our channels below. We would love to hear from you. */}
                If you have any issues regarding the platform, or other matters that you would like to talk to us about, do hit us up any any one of the channels below. We will try to get back to you as soon as we can!
            </Text>
            <View style={styles.socialContainer}>
            <View style={styles.socialItems}>
                    <SimpleLineIcons name="social-google" size={24}/>
                    <Text style={[typography.small, {paddingLeft: 16}]}>sadaqamedia@gmail.com</Text>
                </View>
                <View style={styles.socialItems}>
                    <SimpleLineIcons name="social-twitter" size={24}/>
                    <Text style={[typography.small, {paddingLeft: 16}]}>www.twitter.com/sadaqamedia</Text>
                </View>
                <View style={styles.socialItems}>
                    <SimpleLineIcons name="social-instagram" size={24}/>
                    <Text style={[typography.small, {paddingLeft: 16}]}>www.instagram.com/sadaqamedia</Text>
                </View>
                <View style={styles.socialItems}>
                    <SimpleLineIcons name="social-facebook" size={24}/>
                    <Text style={[typography.small, {paddingLeft: 16}]}>www.facebook.com/sadaqamedia</Text>
                </View>
            </View>
            
        </ScrollView>
    )
}

export default ContactUsScreen
