import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { RootStackParamList } from '../../navigation/rootStackParam'
import styles from './styles'
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
        takerJoinedDate: string
        takerRatingToDonor: number,
        takerReviewToDonor: string,
    },
    actionCheck: boolean,
    actionClose: boolean,
    actionMessage: boolean,
    actionReview: boolean,
}

type homeScreenProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

const ProfileActionCard = (props: ItemOverviewProps) => {
    const navigation = useNavigation<homeScreenProp>();
    const item = props.item;
    const onPress = () => {
    };
    return (
        <Pressable style={styles.root}>
            <View style={styles.summaryContainer}>
                <View style={styles.profileContainer}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{ uri: item.takerImage}}></Image> 
                    </View>
                    <View style={styles.detailContainer}>
                        {/* Taker */}
                        <Text style={textStyles.subtitle} numberOfLines={1}>{item.taker} </Text>
                        {/* Item Condition & Quantity*/}
                        <Text style={textStyles.small}>Joined {item.takerJoinedDate}</Text>
                    </View>
                </View>
                <View style={styles.actionContainer}>
                    {!!props.actionCheck &&
                        <Ionicons name= "checkmark" size={24} style={{paddingLeft: 4}}/>
                    }
                    {!!props.actionClose &&
                        <Ionicons name= "close-outline" size={26} style={{paddingLeft: 4}}/>
                    }
                    {!!props.actionReview &&
                        <MaterialIcons name= "rate-review" size={22} style={{paddingLeft: 4}}/>
                    }
                    {!!props.actionMessage &&
                        <Ionicons name= "chatbox-ellipses-outline" size={22} style={{paddingLeft: 4}}/>
                    }
                </View>
            </View>
        </Pressable>
    )
}

export default ProfileActionCard
