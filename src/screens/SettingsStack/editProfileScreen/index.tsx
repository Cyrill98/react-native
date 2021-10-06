import React, {useState} from 'react'
import { View, ScrollView, SafeAreaView, Text, TextInput, Image } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Header from '../../../components/organisms/header'
import profile from '../../../data/profile'
import color from '../../../constants/color'
import typography from '../../../constants/typography'
import styles from './styles'

const EditProfileScreen = () => {
    const navigation = useNavigation();
    const onBack = () => {
        navigation.goBack()
    }
    const onSave = () => {
    }
    const [username, setUsername] = useState('')
    const [fullname, setFullname] = useState('')
    const [orgnumber, setOrgnumber] = useState('')
    const [sitelink, setSitelink] = useState('')
    const [biodata, setBiodata] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [gender, setGender] = useState('')
    const [birthDate, setBirthDate] = useState('')
    return (
        <SafeAreaView style={styles.root}>
            <Header
                SearchBar={false}
                Icon1={ <Ionicons name="chevron-back" color={color.altText} size={24} style={{marginLeft: 0}} onPress={onBack}/>}
                Icon4={ <Ionicons name="checkmark-sharp" color={color.altText} size={24} style={{marginLeft: 0}} onPress={onSave}/>}
                containerStyle={{backgroundColor: color.backgroundOverlay}}
            />
            <Text style={[typography.h3, {color:color.altText, paddingTop: 24, paddingLeft: 24}]}>My Profile</Text>
            <View style={styles.container}>
                <Image source={{uri : profile[0].image}} style={styles.profileImage} />
            </View>
            <ScrollView style={styles.detailContainer} showsVerticalScrollIndicator={false}>
                    <Text style={[typography.bold, {paddingTop: 32, paddingBottom: 8}]}>Public Info</Text>
                        {/* Username */}
                        <View style={styles.inputContainer}>
                            <Text style={typography.subtitle}>Username</Text>
                            <TextInput 
                            style={styles.input} 
                            placeholder={profile[0].username}
                            value={username}
                            onChangeText={setUsername}
                            /> 
                        </View>
                        {/* Fullname */}
                        <View style={styles.inputContainer}>
                            <Text style={typography.subtitle}>Full Name</Text>
                            <TextInput 
                            style={styles.input} 
                            placeholder={profile[0].name}
                            value={fullname}
                            onChangeText={setFullname}
                            /> 
                        </View>
                        {/* Organization number */}
                        <View style={styles.inputContainer}>
                            <Text style={typography.subtitle}>Organization Number</Text>
                            <TextInput 
                            style={styles.input} 
                            placeholder={profile[0].orgNumber}
                            value={orgnumber}
                            onChangeText={setOrgnumber}
                            /> 
                        </View>
                        {/* Site Link */}
                        <View style={styles.inputContainer}>
                            <Text style={typography.subtitle}>Site Link</Text>
                            <TextInput 
                            style={styles.input} 
                            placeholder={`www.sadaqamedia.my/${profile[0].username}`}
                            value={sitelink}
                            onChangeText={setSitelink}
                            /> 
                        </View>
                        {/* Bio */}
                        <View style={styles.inputContainer}>
                            <Text style={typography.subtitle}>Biodata</Text>
                            <TextInput 
                            style={styles.input} 
                            placeholder={profile[0].biodata}
                            value={biodata}
                            onChangeText={setBiodata}
                            /> 
                        </View>
                    <Text style={[typography.bold, {paddingTop: 32, paddingBottom: 8}]}>Private Info</Text>
                        {/* Email */}
                        <View style={styles.inputContainer}>
                            <Text style={typography.subtitle}>Email</Text>
                            <TextInput 
                            style={styles.input} 
                            placeholder={profile[0].email}
                            value={email}
                            onChangeText={setEmail}
                            /> 
                        </View>
                        {/* Mobile */}
                        <View style={styles.inputContainer}>
                            <Text style={typography.subtitle}>Phone Number</Text>
                            <TextInput 
                            style={styles.input} 
                            placeholder={profile[0].phoneNumber}
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                            /> 
                        </View>
                        {/* Gender */}
                        <View style={styles.inputContainer}>
                            <Text style={typography.subtitle}>Gender</Text>
                            <TextInput 
                            style={styles.input} 
                            placeholder={profile[0].gender}
                            value={gender}
                            onChangeText={setGender}
                            /> 
                        </View>
                        {/* Birthday */}
                        <View style={styles.inputContainer}>
                            <Text style={typography.subtitle}>Date of Birth</Text>
                            <TextInput 
                            style={styles.input} 
                            placeholder={profile[0].birthDate}
                            value={birthDate}
                            onChangeText={setBirthDate}
                            /> 
                        </View>
            </ScrollView>   
        </SafeAreaView>
    )
}

export default EditProfileScreen
