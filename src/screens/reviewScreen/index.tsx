import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Header from '../../components/header'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/core'
import textStyles from '../../globalstyles/textSyles'
import defaultStyle from '../../globalstyles/defaultStyles'
import styles from './styles'
import ReviewSummaryCard from '../../components/reviewSummaryCard copy'
import items from '../../data/productDetails'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import ReviewDetails from '../../components/reviewDetails'

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
            <Text style={[textStyles.h3, {color:defaultStyle.color.text, paddingTop: 24, paddingLeft: 24}]}>Rating Details</Text>
            <View style={styles.container}>
                <ReviewSummaryCard item={items[0]}/>
                <ReviewDetails item={items[0]}/>
            </View>
            
        </ScrollView>
    )
}

export default ReviewScreen
