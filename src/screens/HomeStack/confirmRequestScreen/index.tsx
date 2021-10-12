import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'

import { RootStackParamList } from '../../../navigation/rootStackParam'
import CommonButton from '../../../components/atoms/button'
import items from '../../../data/productDetails'
import typography from '../../../constants/typography'
import styles from './styles'

type confirmReviewScreenProp = StackNavigationProp<RootStackParamList>;

const ConfirmRequestScreen = () => {
    const user = '@lsyakiru'
    const navigation = useNavigation<confirmReviewScreenProp>();
    const route = useRoute();
    const { id } = route.params;
    const onExplore = () => {
        navigation.navigate('HomeScreen')
    }

    return (
        <View style={styles.root}>
            <View style={styles.detailContainer}>
                <View style={styles.publishCard}>
                    <Text style={styles.textStyle}>Request sent successfully</Text>
                </View>
                <View style={styles.noteContainer}>    
                    <Text style={[typography.body, {textAlign: 'center'}]}>Currently, there are: </Text>
                    <Text style={[typography.bold, {textAlign: 'center'}]}>{'\n'} {items[id].requestedBy.length} Requests </Text>
                    <Text style={[typography.body, {textAlign: 'center'}]}>{'\n'}{'\n'}Send the donor a message. Tell them how much you need the item!</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <CommonButton buttonText='Explore More Items' primaryBackground primaryText onPress={onExplore}/>
                </View>
            </View>
        </View>
    )
}

export default ConfirmRequestScreen
