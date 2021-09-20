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
    }
}

type homeScreenProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

const ReviewSummaryCard = (props: ItemOverviewProps) => {
    const navigation = useNavigation<homeScreenProp>();
    const item = props.item;
    return (
        <Pressable style={styles.root}>
            <View style={styles.summaryContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: item.image}}></Image> 
                </View>
                <View style={styles.detailContainer}>
                    {/* Donor */}
                    <Text style={textStyles.subtitle}>{item.taker}</Text>
                    {/* Joined Date */}
                    <Text style={textStyles.small}>{item.donorJoinedDate}</Text>
                    {/* Title */}
                    <Text style={textStyles.small} numberOfLines={1}>{item.title} </Text>
                    {/* Item Condition & Quantity*/}
                    <Text style={textStyles.extrasmall}>{item.itemCondition} . {item.itemQuantity}</Text>
                </View>
                <View style={styles.profileImageContainer}>
                    <Image style={styles.profileImage} source={{ uri: item.takerImage}}></Image> 
                </View>
            </View>
        </Pressable>
    )
}

export default ReviewSummaryCard
