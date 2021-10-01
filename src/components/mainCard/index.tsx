import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { RootStackParamList } from '../../navigation/rootStackParam'
import styles from './styles.ios'
import StatusTag from '../statusTag';

interface ItemOverviewProps {
    item: {
        id: string,
        title: string,
        image: string,
        itemCondition: string,
        itemQuantity: string,
        itemStatus: string,
        donor: string,
        donorImage: string,
        taker: string,
    }
}

type homeScreenProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

const MainCard = (props: ItemOverviewProps) => {
    const user = "@lsyakiru"
    const navigation = useNavigation<homeScreenProp>();
    const item = props.item;
    const onPress = () => {
        navigation.navigate('ItemDetailsScreen', {id: item.id});
    };

    const ItemTag = () => {
        if (item.itemStatus == "In Process") {
            if (item.donor == user) {
                return <StatusTag isCard tagText={"Item Reserved"}/>
            } else if (item.taker == user) {
                return <StatusTag isCard tagText={"Request Accepted"}/>
            } return
        }
    }

    return (
        <Pressable onPress={onPress} style={styles.root}>
            <View style={styles.imageContainer}>
               <Image style={styles.image} source={{ uri: item.image}}></Image> 
            </View>
            <View style={styles.detailContainer}>
                {ItemTag()}
                <View style={styles.itemContainer}>
                    <View style={styles.titleIconContainer}>
                        {/* Title */}
                        <Text style={styles.title} numberOfLines={2}>{item.title} </Text>
                        <AntDesign name='hearto' size={16} style={{paddingVertical: 4}}/>
                    </View>
                    <View>
                        {/* Item Condition & Quantity*/}
                        <Text>{item.itemCondition} . {item.itemQuantity}</Text>
                    </View>
                </View>
                {/* Donor */}
                <View style={styles.donorContainer}>
                    <Image source = {{uri : item.donorImage }} style={styles.donorImage}/>
                    <Text >{item.donor}</Text>
                </View>
            </View>  
        </Pressable>
    )
}

export default MainCard
