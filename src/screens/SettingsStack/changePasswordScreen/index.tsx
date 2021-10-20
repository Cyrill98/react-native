import React, {useState} from 'react'
import { View, ScrollView, Text, TextInput, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Header from '../../../components/organisms/header'
import color from '../../../constants/color'
import typography from '../../../constants/typography'
import styles from './styles'

const ChangePasswordScreen = () => {
    const [currentPassword, setcurrentPassword] = useState('')
    const [isCurrentPassHidden, setIsCurrentPassHidden] = useState(true)
    const [newPassword, setnewPassword] = useState('')
    const [isNewPassHidden, setIsNewPassHidden] = useState(true)
    const [newPassError, setNewPassError] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [isConfirmPassHidden, setIsConfirmPassHidden] = useState(true)
    const [confirmPassError, setConfirmPassError] = useState('')

    const validateNewPass = () => {
        if(newPassword.length < 8){
            setNewPassError("Password cannot be less than 8 characters.")
        } if (confirmPassword != "" && newPassword != confirmPassword){
            setConfirmPassError("Password does not match")
        }
    }

    const validateConfirmPass = () => {
        if(confirmPassword != newPassword){
            setConfirmPassError('Password does not match.')
        }
    }

    const navigation = useNavigation();
    const onBack = () => {
        navigation.goBack()
    }
    const onSave = () => {
        if(!!newPassError || !!confirmPassError){
            Alert.alert("Please fix all errors before submitting.")
        } else
        if(confirmPassword != newPassword) {
            Alert.alert("Password does not match.")
        }
    }
    return (
        <ScrollView style={styles.root}>
            <Header
                SearchBar={false}
                Icon1={ <Ionicons name="chevron-back" size={24} style={{marginLeft: 0}} onPress={onBack}/>}
                Icon4={ <Ionicons name="checkmark-sharp" size={24} style={{marginLeft: 0}} onPress={onSave}/>}
            />
            <Text style={[typography.h3, {color:color.text, padding: 24}]}>Change Password</Text>
            <View style={styles.detailContainer}>
                {/* Current Password */}
                <View style={styles.inputContainer}>
                    <Text style={typography.subtitle}>Current Password</Text>
                    <View style={styles.inputSubContainer}>
                        <TextInput 
                        style={styles.input} 
                        placeholder={'Current Password'}
                        value={currentPassword}
                        onChangeText={setcurrentPassword}
                        secureTextEntry={isCurrentPassHidden}
                        /> 
                        {isCurrentPassHidden === true ? 
                        <Ionicons name="eye-off-outline" size={24} color={color.subtleText} onPress={() => setIsCurrentPassHidden(!isCurrentPassHidden)}/> :
                        <Ionicons name="eye-outline" size={24} onPress={() => setIsCurrentPassHidden(!isCurrentPassHidden)}/>
                        }                   
                    </View>
                </View>
                {/* New Password */}
                <View style={styles.inputContainer}>
                    <Text style={typography.subtitle}>New Password</Text>
                    <View style={styles.inputSubContainer}>
                        <TextInput 
                        style={styles.input} 
                        placeholder={'New Password'}
                        value={newPassword}
                        onChangeText={(text) => { 
                            setnewPassword(text)
                            setNewPassError('')
                            setConfirmPassError('')
                        }}
                        onEndEditing={validateNewPass}
                        secureTextEntry={isNewPassHidden}
                        /> 
                        {isNewPassHidden === true ? 
                        <Ionicons name="eye-off-outline" color={color.subtleText} size={24} onPress={() => setIsNewPassHidden(!isNewPassHidden)}/> :
                        <Ionicons name="eye-outline" size={24} onPress={() => setIsNewPassHidden(!isNewPassHidden)}/>
                        }
                    </View>
                    {!!newPassError && <Text style={styles.errorLabel}>{newPassError}</Text>}
                </View>
                {/* Confirm New Password */}
                <View style={styles.inputContainer}>
                    <Text style={typography.subtitle}>Confirm New Password</Text>
                    <View style={styles.inputSubContainer}>
                        <TextInput 
                        style={styles.input} 
                        placeholder={'Confirm Password'}
                        value={confirmPassword}
                        onChangeText={(text) => {
                            setconfirmPassword(text)
                            setConfirmPassError('')
                        }}
                        onEndEditing={validateConfirmPass}
                        secureTextEntry={isConfirmPassHidden}
                        /> 
                        {isConfirmPassHidden === true ? 
                        <Ionicons name="eye-off-outline" size={24} color={color.subtleText} onPress={() => setIsConfirmPassHidden(!isConfirmPassHidden)}/> :
                        <Ionicons name="eye-outline" size={24} onPress={() => setIsConfirmPassHidden(!isConfirmPassHidden)}/>
                        } 
                    </View>
                    {!!confirmPassError && <Text style={styles.errorLabel}>{confirmPassError}</Text>}
                </View>
            </View>
        </ScrollView>
    )
}

export default ChangePasswordScreen
