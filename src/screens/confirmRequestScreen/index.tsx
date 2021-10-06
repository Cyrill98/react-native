import { useNavigation, useRoute } from '@react-navigation/core'
import React from 'react'
import { View, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CommonButton from '../../components/button'
import Header from '../../components/header'
import defaultStyle from '../../globalstyles/defaultStyles'
import textStyles from '../../globalstyles/textSyles'
import styles from './styles'
import items from '../../data/productDetails'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../navigation/rootStackParam'

type confirmReviewScreenProp = StackNavigationProp<RootStackParamList>;

const ConfirmRequestScreen = () => {
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
                    <Text style={styles.textStyle}>Request sent successfully</Text>
                </View>
                <View style={styles.noteContainer}>
                     
                    <Text style={[textStyles.body, {textAlign: 'center'}]}>Currently, there are:

                    {'\n'}{'\n'} 
                    
                    {'\n'}{'\n'}Send the donor a message. Tell them how much you need the item!

                    </Text>

                </View>
                <View style={styles.buttonContainer}>
                    <CommonButton buttonText='Explore More Items' primaryBackground primaryText onPress={onExplore}/>
                </View>
            </View>
        </View>
    )
}

export default ConfirmRequestScreen
