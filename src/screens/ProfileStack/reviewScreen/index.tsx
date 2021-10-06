import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Ionicons from 'react-native-vector-icons/Ionicons'

import ReviewSummaryCard from '../../../components/molecules/reviewSummaryCard copy'
import Header from '../../../components/organisms/header'
import ReviewDetails from '../../../components/organisms/reviewDetails'
import items from '../../../data/productDetails'
import typography from '../../../constants/typography'
import color from '../../../constants/color'
import styles from './styles'

const ReviewScreen = () => {
    const navigation = useNavigation();

    const onBack = () => {
        navigation.goBack();
    }
    return (
        <ScrollView style={styles.root}>
            <Header
                SearchBar={false}
                Icon1={ <Ionicons name="chevron-back" size={24} style={{marginLeft: 0}} onPress={onBack}/>}
            />
            <Text style={[typography.h3, {color:color.text, paddingTop: 24, paddingLeft: 24}]}>Rating Details</Text>
            <View style={styles.container}>
                <ReviewSummaryCard item={items[0]}/>
                <ReviewDetails item={items[0]}/>
            </View>
            
        </ScrollView>
    )
}

export default ReviewScreen
