import React, {useState} from 'react'
import { View, Text, TextInput, ScrollView, Alert, KeyboardAvoidingView, Platform } from 'react-native'
import { useWindowDimensions } from 'react-native';

import defaultStyle from '../../globalstyles/defaultStyles'
import textStyles from '../../globalstyles/textSyles'
import styles from './styles.ios'
import DropdownPicker from '../../components/dropdownPicker'
import CommonButton from '../../components/button'
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/rootStackParam';

type requestScreenProp = StackNavigationProp<RootStackParamList>;

const RequestScreen = () => {
    const navigate = useNavigation<requestScreenProp>();
    const window = useWindowDimensions();
    const [fullname, setFullname] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    
    const [ addressline1, setAddressline1 ] = useState('');
    const [ addressline2, setAddressline2 ] = useState('');
    const [addressError, setaddressError] = useState('Invalid Address');

    const [ city, setCity ] = useState('');
    const [ state, setState ] = useState('');

    const onConfirm = () => {
        if (!!addressError) {
            Alert.alert('Fix all field with errors before submitting')
            return;
        }
        if (!fullname) {
            Alert.alert("Please fill in the required fields");
            return;
        }navigate.navigate('ConfirmRequestScreen')
    }

    const validateAddress = () => {
        if (addressline1.length < 3) {
            setaddressError('Address is too short')
        }
        if (addressline1.length > 20) {
            setaddressError('Address is too long')
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{flex: 1}}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
            <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
                <Text style={[textStyles.h3, {color:defaultStyle.color.text, paddingTop: 24}]}>Request Details</Text>
                <Text style={[textStyles.subtitle, {color:defaultStyle.color.text, paddingTop: 8}]}>Please provide specific details for your preference of logistics for the requested items.   </Text>
                <View style={styles.dropdown}>
                    <DropdownPicker defaultText={"Choose your logistic method"} options={["Pickup", "Delivery"]}/>
                </View>
                <Text style={[textStyles.subtitle, {color:defaultStyle.color.text, paddingTop: 8}]}>Pickup</Text>
                <View style={styles.dropdown}>
                    <DropdownPicker defaultText={"Choose your time slot"} options={["Anytime"]}/>
                </View>
                <Text style={[textStyles.subtitle, {color:defaultStyle.color.text, paddingTop: 8}]}>Delivery</Text>
                <View style={styles.dropdown}>
                    <DropdownPicker defaultText={"Choose your delivery address"} options={["Default address", "New adress"]}/>
                </View>
                {/* Fullname */}
                <View style={styles.inputContainer}>
                    <Text style={textStyles.bold}>First Name and Last Name</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder={"Full Name"}
                    value={fullname}
                    onChangeText={setFullname}
                    /> 
                </View>
                {/* Phone Number */}
                <View style={styles.inputContainer}>
                    <Text style={textStyles.bold}>Phone Number</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder={"Phone Number"}
                    value={phonenumber}
                    onChangeText={setPhonenumber}
                    keyboardType={'number-pad'}
                    /> 
                </View>
                {/* Address line 1 */}
                <View style={styles.inputContainer}>
                    <Text style={textStyles.bold}>Address Line 1</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder={"Address Line 1"}
                    value={addressline1}
                    onEndEditing={validateAddress}
                    onChangeText={(text) => {
                        setAddressline1(text);
                        setaddressError('')
                    }
                    }
                    /> 
                    {!!addressError && <Text style={styles.errorLabel}>{addressError}</Text>}
                </View>
                {/* Address line 2*/}
                <View style={styles.inputContainer}>
                    <Text style={textStyles.bold}>Address Line 2</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder={"Address Line 2"}
                    value={addressline2}
                    onChangeText={setAddressline2}
                    /> 
                </View>
                {/* Address city*/}
                <View style={styles.inputContainer}>
                    <Text style={textStyles.bold}>City</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder={"Address Line 1"}
                    value={city}
                    onChangeText={setCity}
                    /> 
                </View>
                {/* Address state  */}
                <View style={styles.inputContainer}>
                    <Text style={textStyles.bold}>State</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder={"State"}
                    value={state}
                    onChangeText={setState}
                    /> 
                </View>
                <View style={styles.buttonContainer}>
                    <CommonButton buttonText={"Confirm"} primaryBackground primaryText onPress={onConfirm}/>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
        
    )
}

export default RequestScreen
