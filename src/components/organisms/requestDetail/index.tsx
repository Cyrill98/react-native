import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import typography from '../../../constants/typography'

interface RequestDetailsProp {
    requestorFullName: string,
    requestorPhoneNumber: string,
    requestorAddressLine1?: string,
    requestorAddressLine2?: string,
    requestorPostcode?: number,
    requestorCity?: string,
    requestorState?: string,
    requestorLogistic: string,
}

const RequestDetails = (props: RequestDetailsProp) => {
    return (
        <View style={styles.root}>
            {/* Logistic Option */}
            <View style={styles.detailContainer}>
                <Text style={typography.bold}>Logistics</Text>
                <Text style={typography.body}>{props.requestorLogistic}</Text>
            </View>
            {/* Name */}
            <View style={styles.detailContainer}>
                <Text style={typography.bold}>Name</Text>
                <Text style={typography.body}>{props.requestorFullName}</Text>
            </View>
            {/* Phone Number */}
            <View style={styles.detailContainer}>
                <Text style={typography.bold}>Phone Number</Text>
                <Text style={typography.body}>{props.requestorPhoneNumber}</Text>
            </View>
            {/* Address */}
            { props.requestorLogistic === "Delivery" &&
            <View style={styles.detailContainer}>
                <Text style={typography.bold}>Address</Text>
                <Text style={typography.body}>{props.requestorAddressLine1}</Text>
                <Text style={typography.body}>{props.requestorAddressLine2}</Text>
                <Text style={typography.body}>{props.requestorPostcode} {props.requestorCity}</Text>
                <Text style={typography.body}>{props.requestorState}</Text>
            </View>
            }
        </View>
    )
}

export default RequestDetails
