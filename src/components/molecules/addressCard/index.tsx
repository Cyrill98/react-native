import React from 'react'
import { Text, Pressable } from 'react-native'

import typography from '../../../constants/typography'
import styles from './styles'

interface AdressCardProp {
    profile: {
            name: string,
            phoneNumber: string,
            addressLine1: string,
            addressLine2: string,
            postcode: number,
            city: string,
            state: string
    }
    onPress?: () => void
}

const AddressCard = (props: AdressCardProp) => {
    return (
        <Pressable style={styles.root} onPress={props.onPress}>
            <Text style={[typography.bold, {paddingBottom: 8}]}>{props.profile.name}</Text>
            <Text style={[typography.body, {paddingBottom: 8}]}>{props.profile.phoneNumber}</Text>
            <Text style={typography.body}>{props.profile.addressLine1},</Text>
            <Text style={typography.body}>{props.profile.addressLine2},</Text>
            <Text style={typography.body}>{props.profile.postcode} {props.profile.city},</Text>
            <Text style={typography.body}>{props.profile.state}.</Text>
        </Pressable>
    )
}

export default AddressCard
