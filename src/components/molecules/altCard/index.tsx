import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { RootStackParamList } from '../../../navigation/rootStackParam'
import styles from './styles'
import typography from '../../../constants/typography';

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

const AltCard = (props: ItemOverviewProps) => {
    const navigation = useNavigation<homeScreenProp>();
    const item = props.item;
    const onPress = () => {
    };
    return (
        <Pressable style={styles.root}>
            <View style={styles.summaryContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: item.image}}></Image> 
                </View>
                <View style={styles.detailContainer}>
                    {/* Title */}
                    <Text style={typography.small} numberOfLines={1}>{item.title} </Text>
                    {/* Item Condition & Quantity*/}
                    <Text style={typography.extrasmall}>{item.itemCondition} . {item.itemQuantity}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default AltCard
