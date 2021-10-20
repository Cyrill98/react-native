import React from 'react'
import { View, Text } from 'react-native'
import {useNavigation} from '@react-navigation/core';
import Ionicons from 'react-native-vector-icons/Ionicons';

import typography from '../../../constants/typography';
import color from '../../../constants/color';
import Header from '../../../components/organisms/header'
import styles from './styles';
import ProfileActionCard from '../../../components/molecules/profileActionCard';
import items from '../../../data/productDetails'
import RequestDetails from '../../../components/organisms/requestDetail';

const RequestorDetailsScreen = () => {
    const requestor = items[2].requestedBy[0]
    const navigation = useNavigation();
    const onBack = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.root}>
            <Header
                SearchBar={false}
                Icon1={
                <Ionicons
                    name="chevron-back"
                    size={24}
                    style={{marginLeft: 0}}
                    onPress={onBack}
                />
                }
            />
            <Text style={[typography.h3,{color: color.text, paddingTop: 24, paddingLeft: 24}]}>
            Requestor Details
            </Text>
            <View style={styles.container}>
                <View style={{paddingBottom: 16}}>
                    <Text style={typography.subtitle}>Requestor</Text>
                    <ProfileActionCard
                        item={items[2].requestedBy[0]}
                        actionMessage
                    />
                </View>
                <View>
                    <Text style={typography.subtitle}>Request Information</Text>
                    <RequestDetails 
                        requestorFullName={requestor.fullName}
                        requestorPhoneNumber={requestor.phoneNumber}
                        requestorAddressLine1={requestor.addressLine1}
                        requestorAddressLine2={requestor.addressLine2}
                        requestorCity={requestor.city}
                        requestorPostcode={requestor.postcode}
                        requestorState={requestor.state}
                        requestorLogistic={requestor.logistic}
                        />
                </View>
            </View>
        </View>
    )
}

export default RequestorDetailsScreen
