import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../../router/rootStackParam'
import styles from './styles.ios'

interface ItemOverviewProps {
    item: {
        id: string,
        title: string,
        image: string,
        itemCondition: string,
        itemQuantity: string,
        donor: string,
        saveCount: number,

    }
}

type homeScreenProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

const MainCard = (props: ItemOverviewProps) => {
    const navigation = useNavigation<homeScreenProp>();
    const item = props.item;
    const onPress = () => {
        navigation.navigate('ItemDetailsScreen', {id: item.id});
    };
    return (
        <Pressable onPress={onPress} style={styles.root}>
            <View style={styles.imageContainer}>
               <Image style={styles.image} source={{ uri: item.image}}></Image> 
            </View>
            <View style={styles.detailContainer}>
                {/* Title */}
                <Text style={styles.title} numberOfLines={2}>{item.title} </Text>
                {/* Item Condition & Quantity*/}
                <Text>{item.itemCondition} . {item.itemQuantity}</Text>
                {/* Donor */}
                <Text>{item.donor}</Text>
            </View>  
        </Pressable>
    )
}

export default MainCard
