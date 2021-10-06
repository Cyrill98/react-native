import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation} from '@react-navigation/core'

import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../navigation/rootStackParam'
import CommonButton from '../../../components/atoms/button'
import Header from '../../../components/organisms/header'
import typography from '../../../constants/typography'
import styles from './styles'

type confirmReviewScreenProp = StackNavigationProp<RootStackParamList>;

const ConfirmUploadScreen = () => {
    const user = '@lsyakiru'
    const navigation = useNavigation<confirmReviewScreenProp>();
    const onExplore = () => {
        navigation.navigate('HomeScreen')
    }

    return (
        <View style={styles.root}>
            <Header
                SearchBar={false}
            />
            <View style={styles.detailContainer}>
                <View style={styles.publishCard}>
                    <Text style={styles.textStyle}>Item published successfully</Text>
                </View>
                <View style={styles.noteContainer}>
                     
                    <Text style={[typography.body, {textAlign: 'center'}]}>Congratulations on your giveaway. We will review it and inform you when it is published.

                    {'\n'}{'\n'} Remember, the more you give, the more you get back!</Text>

                </View>
                <View style={styles.buttonContainer}>
                    <CommonButton buttonText='Explore More Items' primaryBackground primaryText onPress={onExplore}/>
                </View>
            </View>
        </View>
    )
}

export default ConfirmUploadScreen
