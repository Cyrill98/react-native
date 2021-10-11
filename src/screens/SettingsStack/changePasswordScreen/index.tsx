import React, {useState} from 'react'
import { View, ScrollView, Text, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Header from '../../../components/organisms/header'
import color from '../../../constants/color'
import typography from '../../../constants/typography'
import styles from './styles'

const ChangePasswordScreen = () => {
    const [currentPassword, setcurrentPassword] = useState('')
    const [newPassword, setnewPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')

    const navigation = useNavigation();
    const onBack = () => {
        navigation.goBack()
    }
    const onSave = () => {
        
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
                    <TextInput 
                    style={styles.input} 
                    placeholder={'Current Password'}
                    value={currentPassword}
                    onChangeText={setcurrentPassword}
                    secureTextEntry
                    /> 
                </View>
                {/* New Password */}
                <View style={styles.inputContainer}>
                    <Text style={typography.subtitle}>New Password</Text>
                    <TextInput 
                    style={styles.input} 
                    placeholder={'New Password'}
                    value={newPassword}
                    onChangeText={setnewPassword}
                    secureTextEntry
                    /> 
                </View>
                {/* Confirm New Password */}
                <View style={styles.inputContainer}>
                    <Text style={typography.subtitle}>Confirm New Password</Text>
                    <TextInput 
                    style={styles.input} 
                    placeholder={'Confirm Password'}
                    value={confirmPassword}
                    onChangeText={setconfirmPassword}
                    secureTextEntry
                    /> 
                </View>
            </View>
        </ScrollView>
    )
}

export default ChangePasswordScreen