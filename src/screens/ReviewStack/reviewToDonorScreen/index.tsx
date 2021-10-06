import React from 'react'
import { useState } from 'react'
import { View, Text, TextInput, Platform, KeyboardAvoidingView, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { Rating } from 'react-native-rating-element'
import { StackNavigationProp } from '@react-navigation/stack'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { RootStackParamList } from '../../../navigation/rootStackParam'
import Header from '../../../components/organisms/header'
import color from '../../../constants/color'
import typography from '../../../constants/typography'
import styles from './styles'

type confirmReviewScreenProp = StackNavigationProp<RootStackParamList>;

const ReviewToDonorScreen = () => {
    const [review, setReview] = useState('')
    const [rating, setRating] = useState(0)
    const navigation = useNavigation<confirmReviewScreenProp>();
    const onBack = () => {
        navigation.goBack()
    }
    const onPublish = () => {
        navigation.navigate('ConfirmReviewToDonorScreen')
    }
    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'position': undefined}
            style={{flex: 1}}
            >
        <View style={styles.root}>
            <Header
                SearchBar={false}
                Icon1={ <Ionicons name="chevron-back" size={24} style={{marginLeft: 0}} onPress={onBack}/>}
                Icon4={ <Ionicons name="checkmark-sharp" size={24} style={{marginLeft: 0}} onPress={onPublish}/>}
            />
            <Text style={[typography.h3, {color:color.text, padding: 24}]}>Rate and Review Your Donor</Text>
            <View style={styles.detailContainer}>
                <View style={styles.ratingContainer}>
                    <Text style={[typography.subtitle, {paddingBottom: 16}]}>Rating</Text>
                    <Text style={[typography.body, {paddingBottom: 16}]}>Now that you have received the item from the donor, it is time to give some rating to them. This would absolutely help them get more taker in the future and in turn encourage them to donate more!</Text>
                    <View style={styles.starContainer}>
                        <Rating
                            rated={rating}
                            totalCount={5}
                            ratingColor={color.stars}
                            ratingBackgroundColor="#d4d4d4"
                            size={24}
                            icon="ios-star"
                            direction="row"
                            onIconTap={position => {
                                setRating(position)
                            }}
                        />
                    </View>
                </View>
                <View style={styles.reviewContainer}>
                <Text style={[typography.subtitle, {paddingBottom: 16}]}>Review</Text>
                    <Text style={[typography.body, {paddingBottom: 16}]}>Sometimes, words can describe more than stars can. Tell your donor how much you appreciate their deeds. Say thanks or give some suggestions.</Text>
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
        </View>
        </KeyboardAvoidingView>
    )
}

export default ReviewToDonorScreen
