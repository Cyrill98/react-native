import React from 'react'
import { useState } from 'react'
import { View, ScrollView, Text, TextInput, Platform, KeyboardAvoidingView } from 'react-native'
import Header from '../../components/header'
import defaultStyle from '../../globalstyles/defaultStyles'
import textStyles from '../../globalstyles/textSyles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/core'
import styles from './styles'

const ReviewToDonorScreen = () => {
    const [review, setReview] = useState('')
    const navigation = useNavigation();
    const onBack = () => {
        navigation.goBack()
    }
    const onSave = () => {
    }
    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'position': undefined}
            style={{flex: 1}}
            >
        <ScrollView style={styles.root}>
            <Header
                SearchBar={false}
                Icon1={ <Ionicons name="chevron-back" size={24} style={{marginLeft: 0}} onPress={onBack}/>}
                Icon4={ <Ionicons name="checkmark-sharp" size={24} style={{marginLeft: 0}} onPress={onSave}/>}
            />
            <Text style={[textStyles.h3, {color:defaultStyle.color.text, padding: 24}]}>Rate and Review Your Donor</Text>
            <View style={styles.detailContainer}>
                <View style={styles.ratingContainer}>
                    <Text style={[textStyles.subtitle, {paddingBottom: 16}]}>Rating</Text>
                    <Text style={[textStyles.body, {paddingBottom: 16}]}>Now that you have received the item from the donor, it is time to give some rating to them. This would absolutely help them get more taker in the future and in turn encourage them to donate more!</Text>
                </View>
                <View style={styles.reviewContainer}>
                <Text style={[textStyles.subtitle, {paddingBottom: 16}]}>Review</Text>
                    <Text style={[textStyles.body, {paddingBottom: 16}]}>Sometimes, words can describe more than stars can. Tell your donor how much you appreciate their deeds. Say thanks or give some suggestions.</Text>
                    <TextInput
                    style={styles.input} 
                    placeholder={'Describe your experience here'}
                    value={review}
                    onChangeText={setReview}
                    secureTextEntry
                    multiline
                    />
                </View>
            </View>
        </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default ReviewToDonorScreen
