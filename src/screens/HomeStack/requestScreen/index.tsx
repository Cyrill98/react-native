import React, {useState} from 'react'
import { View, Text, TextInput, ScrollView, Alert, KeyboardAvoidingView, Platform } from 'react-native'
import { useWindowDimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RadioButton } from 'react-native-paper'

import { RootStackParamList } from '../../../navigation/rootStackParam';
import DropdownPicker from '../../../components/atoms/dropdownPicker'
import CommonButton from '../../../components/atoms/button'
import color from '../../../constants/color'
import typography from '../../../constants/typography'
import styles from './styles'

type requestScreenProp = StackNavigationProp<RootStackParamList>;

const RequestScreen = () => {
    const navigate = useNavigation<requestScreenProp>();
    const route = useRoute();
    const { id } = route.params;
    const window = useWindowDimensions();

    const [ logistic, setLogistic] = useState('');
    const [ fullname, setFullname] = useState('');
    const [ phonenumber, setPhoneNumber] = useState('');
    const [ phoneNumberError, setPhoneNumberError] = useState('');
    const [ addressLine1, setAddressLine1 ] = useState('');
    const [ addressLine1Error, setAddressLine1Error] = useState('');
    const [ addressLine2, setAddressLine2 ] = useState('');
    const [ addressLine2Error, setAddressLine2Error] = useState('');
    const [ postcode, setPostcode] = useState('');
    const [ postcodeError, setPostcodeError] = useState('')
    const [ city, setCity ] = useState('');
    const [ cityError, setCityError ] = useState('');
    const [ state, setState ] = useState('');
    const [ stateError, setStateError ] = useState('');

    const onConfirm = () => {
        if (!!phoneNumberError || !!addressLine1Error || !!addressLine2Error || !!postcodeError || !!cityError || !!stateError) {
            Alert.alert('Fix all field with errors before submitting')
            return;
        }
        if (logistic === "Delivery" && (!fullname || !phonenumber || !addressLine1 || !addressLine2 || !postcode || !city || !state)) {
            Alert.alert("Please fill in all the fields");
            return;
        } else {
            navigate.navigate('ConfirmRequestScreen', {id: id})
            setFullname('')
            setPhoneNumber('')
            setAddressLine1('')
            setAddressLine2('')
            setPostcode('')
            setCity('')
            setState('')
        }
    }

    const validatePhoneNumber = () => {
        if (phonenumber.length < 10) {
            setPhoneNumberError('Number is too short')
        }
        if (phonenumber.length > 11) {
            setPhoneNumberError('Number is too long')
        }
    }
    const validateAddressLine1 = () => {
        if (addressLine1.length < 1) {
            setAddressLine1Error('Address is too short')
        }
        if (addressLine1.length > 50) {
            setAddressLine1Error('Address is too long')
        }
    }
    const validateAddressLine2 = () => {
        if (addressLine2.length < 1) {
            setAddressLine2Error('Address is too short')
        }
        if (addressLine2.length > 50) {
            setAddressLine2Error('Address is too long')
        }
    }
    const validatePostcode = () => {
        if (postcode.length < 5) {
            setPostcodeError('Postcode is too short')
        }
        if (postcode.length > 5) {
            setPostcodeError('Postcode is too long')
        }
    }
    const validateCity = () => {
        if (city.length < 5) {
            setCityError('City is invalid')
        }
        if (city.length > 20) {
            setCityError('City is invalid')
        }
    }
    const validateState = () => {
        if (state.length < 5) {
            setStateError('State is invalid')
        }
        if (state.length > 20) {
            setStateError('State is invalid')
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{flex: 1}}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
            <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
                <Text style={[typography.h3, {color:color.text, paddingTop: 24}]}>Request Details</Text>
                <Text style={[typography.subtitle, {color:color.text, paddingTop: 8}]}>Please provide specific details for your preference of logistics for the requested items.   </Text>
                <View style={styles.dropdown}>
                    <RadioButton.Group onValueChange={logistic => setLogistic(logistic)} value={logistic}>
                    <Text style={[typography.subtitle, {marginVertical: 8}]}>Choose your logistic method</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <RadioButton.Item label="Pickup" value="Pickup" 
                                style={logistic === "Pickup" ? styles.activeRadio: styles.inactiveRadio}/>
                            <RadioButton.Item label="Delivery" value="Delivery" 
                                style={ logistic === "Delivery" ? styles.activeRadio: styles.inactiveRadio}/>
                        </View>
                    </RadioButton.Group>
                    {/* <DropdownPicker defaultText={"Choose your logistic method"} options={["Pickup", "Delivery"]}/> */}
                </View>
                {/* <Text style={[typography.subtitle, {color:color.text, paddingTop: 8}]}>Pickup</Text>
                <View style={styles.dropdown}>
                    {<DropdownPicker defaultText={"Choose your time slot"} options={["Anytime"]}/>}
                </View>
                <Text style={[typography.subtitle, {color:color.text, paddingTop: 8}]}>Delivery</Text>
                <View style={styles.dropdown}>
                    <DropdownPicker defaultText={"Choose your delivery address"} options={["Default address", "New adress"]}/>
                </View> */}
                {logistic === "Pickup" && 
                <View>
                    <Text style={typography.body}>You can pickup the item at .... Please discuss with the donor the exact location for the item.</Text>
                </View>}
                {logistic === "Delivery" && <View>
                    {/* Fullname */}
                    <View style={styles.inputContainer}>
                        <Text style={typography.bold}>Full Name</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder={"First and Last name"}
                        value={fullname}
                        onChangeText={setFullname}
                        /> 
                    </View>
                    {/* Phone Number */}
                    <View style={styles.inputContainer}>
                        <Text style={typography.bold}>Phone Number</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder={"eg. 0123456789"}
                        value={phonenumber}
                        onChangeText={(text) => {
                            setPhoneNumber(text)
                            setPhoneNumberError('')
                        }}
                        onEndEditing={validatePhoneNumber}
                        keyboardType={'number-pad'}
                        /> 
                        {!!phoneNumberError && <Text style={styles.errorLabel}>{phoneNumberError}</Text>}
                    </View>
                    {/* Address line 1 */}
                    <View style={styles.inputContainer}>
                        <Text style={typography.bold}>Address Line 1</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder={"Unit, Building"}
                        value={addressLine1}
                        onEndEditing={validateAddressLine1}
                        onChangeText={(text) => {
                            setAddressLine1(text);
                            setAddressLine1Error('')
                        }
                        }
                        /> 
                        {!!addressLine1Error && <Text style={styles.errorLabel}>{addressLine1Error}</Text>}
                    </View>
                    {/* Address line 2*/}
                    <View style={styles.inputContainer}>
                        <Text style={typography.bold}>Address Line 2</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder={"Street, Town"}
                        onEndEditing={validateAddressLine2}
                        value={addressLine2}
                        onChangeText={(text) => {
                            setAddressLine2(text)
                            setAddressLine2Error('')
                        }}
                        />
                    {!!addressLine2Error && <Text style={styles.errorLabel}>{addressLine2Error}</Text>}
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        {/* Address postcode*/}
                        <View style={[styles.inputContainer, {flex: 1, marginRight: 8}]}>
                            <Text style={typography.bold}>Postcode</Text>
                            <TextInput 
                            style={styles.input} 
                            placeholder={"Postcode"}
                            value={postcode}
                            onEndEditing={validatePostcode}
                            onChangeText={(text) => {
                                setPostcode(text)
                                setPostcodeError('')
                            }}
                            keyboardType={'number-pad'}
                            />
                            {!!postcodeError && <Text style={styles.errorLabel}>{postcodeError}</Text>} 
                        </View>
                        {/* Address city*/}
                        <View style={[styles.inputContainer, {flex: 2}]}>
                            <Text style={typography.bold}>City</Text>
                        <TextInput 
                            style={styles.input} 
                            placeholder={"City"}
                            value={city}
                            // onEndEditing={validateCity}
                            onChangeText={(text) => {
                                setCity(text)
                                setCityError('')
                            }}
                            /> 
                            {!!cityError && <Text style={styles.errorLabel}>{cityError}</Text>} 
                        </View>
                    </View>
                    {/* Address state  */}
                    <View style={styles.inputContainer}>
                        <Text style={typography.bold}>State</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder={"State"}
                        value={state}
                        // onEndEditing={validateState}
                        onChangeText={(text) => {
                            setState(text)
                            setStateError('')
                        }}
                        /> 
                        {!!stateError && <Text style={styles.errorLabel}>{stateError}</Text>} 
                    </View>
                </View>
                }
            </ScrollView>
            <View style={styles.buttonContainer}>
                <CommonButton buttonText={"Confirm"} primaryBackground primaryText onPress={onConfirm}/>
            </View>
        </KeyboardAvoidingView>
        
    )
}

export default RequestScreen
