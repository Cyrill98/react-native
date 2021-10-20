import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'

import { RootStackParamList } from '../../../navigation/rootStackParam'
import CommonButton from '../../../components/atoms/button'
import Header from '../../../components/organisms/header'
import typography from '../../../constants/typography'
import styles from './styles'

type confirmReviewScreenProp = StackNavigationProp<RootStackParamList>;

const ConfirmReviewToDonorScreen = () => {
    const user = '@lsyakiru'
    const navigation = useNavigation<confirmReviewScreenProp>();

    const onExplore = () => {
        navigation.navigate('HomeScreen')
        navigation.popToTop();
    }

    return (
        <View style={styles.root}>
            <Header
                SearchBar={false}
            />
            <View style={styles.detailContainer}>
                <View style={styles.publishCard}>
                    <Text style={styles.textStyle}>Review published successfully</Text>
                </View>
                <View style={styles.noteContainer}>
                     
                    <Text style={[typography.body, {textAlign: 'center'}]}>Thank you for your review! Your review has been published and can be seen only by the donor. You will have 7 days to resolve any conflict with the donor and edit any review you have. After the 7-day period, all reviews will be published publicly, and no editing will be allowed.</Text>

                </View>
                <View style={styles.buttonContainer}>
                    <CommonButton buttonText='Explore More Items' primaryBackground primaryText onPress={onExplore}/>
                </View>
            </View>
        </View>
    )
}

export default ConfirmReviewToDonorScreen
