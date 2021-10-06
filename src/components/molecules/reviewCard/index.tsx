import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
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
    }
}

type homeScreenProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

const ReviewCard = (props: ItemOverviewProps) => {
    const navigation = useNavigation<homeScreenProp>();
    const item = props.item;
    const onPress = () => {
        navigation.navigate('ReviewScreen', {id: item.id});
    };
    return (
        <Pressable onPress={onPress} style={styles.root}>
            <View style={styles.summaryContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: item.image}}></Image> 
                </View>
                <View style={styles.detailContainer}>
                    {/* Donor */}
                    <Text style={typography.subtitle}>{item.taker}</Text>
                    {/* Joined Date */}
                    <Text style={typography.small}>{item.donorJoinedDate}</Text>
                    {/* Title */}
                    <Text style={typography.small} numberOfLines={1}>{item.title} </Text>
                    {/* Item Condition & Quantity*/}
                    <Text style={typography.extrasmall}>{item.itemCondition} . {item.itemQuantity}</Text>
                </View>
                <View style={styles.profileImageContainer}>
                    <Image style={styles.profileImage} source={{ uri: item.takerImage}}></Image> 
                </View>
            </View>
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
                <Text numberOfLines={3} style={typography.body}>{item.takerReviewToDonor}</Text>
            </View>
        </Pressable>
    )
}

export default ReviewCard
