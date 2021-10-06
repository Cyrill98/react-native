import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { RootStackParamList } from '../../../navigation/rootStackParam'
import styles from './styles'
import typography from '../../../constants/typography';
import color from '../../../constants/color';

interface ItemOverviewProps {
    item: {
        id: string,
        title: string,
        image: string,
        itemCondition: string,
        itemQuantity: string,
        donorJoinedDate: string,
        taker: string,
        takerImage: string
        takerRatingToDonor: number,
        takerReviewToDonor: string,
        donorReviewReplyToTaker: string,
    }
}

type homeScreenProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

const ReviewDetails = (props: ItemOverviewProps) => {
    const navigation = useNavigation<homeScreenProp>();
    const item = props.item;
    return (
            <View style={styles.reviewContainer}>
                <View style={styles.ratingContainer}>
                    <Text style={typography.bold}>Overall Rating</Text>
                    <View style={styles.starRatingContainer}>
                        {[0,0,0,0,0].map((el, i) => 
                        <MaterialIcons
                        name={i < Math.floor(item.takerRatingToDonor) ? 'star' : 'star-border'}
                        color={i < Math.floor(item.takerRatingToDonor) ? color.stars : color.subtleText}
                        size={24}
                        />
                        )}
                    </View> 
                </View>
                {/* Hairline */}
                <View style={styles.hairline}></View>
                {/* Review */}
                <Text style={typography.bold}>Review</Text>
                <Text style={[typography.body, {paddingTop: 16}]}>{item.takerReviewToDonor}</Text>
                {/* Review Reply */}
                <Text style={[typography.bold, {paddingTop: 16}]}>Review Reply</Text>
                <Text style={[typography.body, {paddingTop: 16}]}>{item.donorReviewReplyToTaker}</Text>
            </View>
    )
}

export default ReviewDetails
