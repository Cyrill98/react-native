import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { RootStackParamList } from '../../navigation/rootStackParam'
import styles from './styles.ios'
import textStyles from '../../globalstyles/textSyles';
import defaultStyle from '../../globalstyles/defaultStyles';

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
                    <Text style={textStyles.bold}>Overall Rating</Text>
                    <View style={styles.starRatingContainer}>
                        {[0,0,0,0,0].map((el, i) => 
                        <MaterialIcons
                        name={i < Math.floor(item.takerRatingToDonor) ? 'star' : 'star-border'}
                        color={i < Math.floor(item.takerRatingToDonor) ? defaultStyle.color.stars : defaultStyle.color.subtleText}
                        size={24}
                        />
                        )}
                    </View> 
                </View>
                {/* Hairline */}
                <View style={styles.hairline}></View>
                {/* Review */}
                <Text style={textStyles.bold}>Review</Text>
                <Text style={[textStyles.body, {paddingTop: 16}]}>{item.takerReviewToDonor}</Text>
                {/* Review Reply */}
                <Text style={[textStyles.bold, {paddingTop: 16}]}>Review Reply</Text>
                <Text style={[textStyles.body, {paddingTop: 16}]}>{item.donorReviewReplyToTaker}</Text>
            </View>
    )
}

export default ReviewDetails
