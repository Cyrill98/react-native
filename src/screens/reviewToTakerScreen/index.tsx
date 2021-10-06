import React from 'react'
import { useState } from 'react'
import { View, ScrollView, Text, TextInput, Platform, KeyboardAvoidingView, Alert } from 'react-native'
import { Rating } from 'react-native-rating-element'
import Header from '../../components/header'
import defaultStyle from '../../globalstyles/defaultStyles'
import textStyles from '../../globalstyles/textSyles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/core'
import styles from './styles'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../navigation/rootStackParam'
import items from '../../data/productDetails'


type confirmReviewScreenProp = StackNavigationProp<RootStackParamList>;

const ReviewToTakerScreen = () => {
    const [review, setReview] = useState('')
    const [rating, setRating] = useState(0)
    const navigation = useNavigation<confirmReviewScreenProp>();
    const onBack = () => {
        navigation.goBack()
    }
    const onPublish = () => {
        navigation.navigate('ConfirmReviewToTakerScreen')
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
            <Text style={[textStyles.h3, {color:defaultStyle.color.text, padding: 24}]}>Rate and Review Your Taker</Text>
            <View style={styles.detailContainer}>
                <View style={styles.ratingContainer}>
                    <Text style={[textStyles.subtitle, {paddingBottom: 16}]}>Rating</Text>
                    <Text style={[textStyles.body, {paddingBottom: 16}]}>Now that the item has been received by the taker, it is time to give some rating to them. This would absolutely help them gain trust from other donors in the future and in turn encourage them to donate as well!</Text>
                    <View style={styles.starContainer}>
                        <Rating
                            rated={rating}
                            totalCount={5}
                            ratingColor={defaultStyle.color.stars}
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
                <Text style={[textStyles.subtitle, {paddingBottom: 16}]}>Review</Text>
                    <Text style={[textStyles.body, {paddingBottom: 16}]}>Sometimes, words can describe more than stars can. Tell your taker how grateful you are that your items now has a new life.</Text>
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

export default ReviewToTakerScreen
