import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { RootStackParamList } from '../../router/rootStackParam'
import styles from '../itemDetail/styles.ios'
import ImageCarousel from '../../components/imageCarousel'
import globalStyles from '../../globalstyles/defaultStyles'
import textStyles from '../../globalstyles/textSyles'
import CommonButton from '../../components/button'
import defaultStyle from '../../globalstyles/defaultStyles'

interface ItemDetailProp {
    item: {
        id: string,
        title: string,
        category: string,
        description: string,
        image: string,
        images: string[],
        itemStatus?: string,
        location: string,
        avgRating: number,
        ratings: number,
        saveCount: number,
        requestCount: number,
        uploadTime: string,
        itemCondition: string,
        itemQuantity: string,
        pickupLocation: string,
        pickupTime: string,
        deliveryPrice: string,
        donor: string,
        donorJoinedDate: string,
        donorImage: string,
        donorReview: string,
        reviewer: string,
        reviewerJoinedDate: string,
    }
}

type itemDetailScreenProp = StackNavigationProp<RootStackParamList, 'ItemDetailsScreen'>;

const ItemDetails = (props: ItemDetailProp) => {
    const navigation = useNavigation<itemDetailScreenProp>();
    const route = useRoute();
    //console.warn(route.params);
    const onRequest = () => {
        //console.warn('test')
        navigation.navigate('AddressScreen')
    };
    const itemDetail = props.item;
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {/* Image Carousel */}
            <ImageCarousel images={itemDetail.images}/>
            <View style={styles.container}>
                {/* Item Status */}
                {(!!itemDetail.itemStatus?.includes("Reserved") || 
                !!itemDetail.itemStatus?.includes("Accepted")) && 
                <View style={styles.tag}> 
                    <Text style={[textStyles.button, {textAlign: 'center', color: globalStyles.color.text}]}>{props.item.itemStatus}</Text>
                </View>}
                <View style={styles.detailContainer}>
                    <CommonButton onPress={onRequest} buttonText={'Request'} primaryBackground primaryText/>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 16}}>
                        <View style={{flex:1}}>
                            {/* Title */}
                            <Text style={[textStyles.h3,{paddingRight: 24}]}>{itemDetail.title}</Text>
                            {/* Location */}
                            <Text style={textStyles.extrasmall}>{itemDetail.location}</Text>
                            {/* Donor */}
                            <Text style={textStyles.extrasmall}>by {itemDetail.donor}</Text>
                        </View>
                        <AntDesign name='hearto' size={24} />
                    </View>
                    {/* Save Count */}
                    <View style={styles.detail}>
                        <AntDesign name='hearto' size={24} />
                        <Text style={[textStyles.body, {padding: 8}]}>{itemDetail.saveCount} saves</Text>   
                    </View>
                    
                    {/* Request Count */}
                    <View style={styles.detail}>
                        <MaterialIcons name='emoji-people' size={24} />
                        <Text style={[textStyles.body, {padding: 8}]}>{itemDetail.requestCount} requests</Text>
                    </View>
                    
                    {/* Upload Time */}
                    <View style={styles.detail}>
                        <MaterialIcons name='timer' size={24} />
                        <Text style={[textStyles.body, {padding: 8}]}>{itemDetail.uploadTime}</Text>
                    </View>
                    
                    {/* Condition */}
                    <View style={styles.detail}>
                        <MaterialIcons name='fiber-new' size={24} />
                        <Text style={[textStyles.body, {padding: 8}]}>{itemDetail.itemCondition}</Text>
                    </View>
                    
                    {/* Quantity */}
                    <View style={styles.detail}>
                        <MaterialIcons name='list-alt' size={24} />
                        <Text style={[textStyles.body, {padding: 8}]}>{itemDetail.itemQuantity}</Text>
                    </View>
                    
                    {/* Category */}
                    <View style={styles.detail}>
                        <MaterialIcons name='category' size={24} />
                        <Text style={[textStyles.body, {padding: 8}]}>{itemDetail.category}</Text>
                    </View>
                    
                    {/* Description */}
                    <View style={styles.detail}>
                        <MaterialIcons name='description' size={24} />
                        <Text style={[textStyles.body, {padding: 8, flex: 1, flexWrap: 'wrap'}]}>{itemDetail.description}</Text>
                    </View>
                    
                    {/* Hairline */}
                    <View style={styles.hairline}></View>
                    {/* Logistics */}
                    <View>
                        <Text>Logistics</Text>
                        {/* Pickup */}
                        <View style={styles.detail}>
                            <MaterialIcons name="location-on" size={24} />
                            <Text style={[textStyles.subtitle, {padding: 8}]}>Pickup</Text>
                        </View>
                        <Text style={[textStyles.body, {marginLeft: 32}]}>Kota Damansara {"\n"}Weekday, 5pm - 8pm {"\n"}Weekend, 10am - 4pm</Text>
                        {/* Delivery */}
                        <View style={styles.detail}>
                            <MaterialCommunityIcons name="truck-outline" size={24} />
                            <Text style={[textStyles.subtitle, {padding: 8}]}>Delivery</Text>
                        </View>
                        <Text style={[textStyles.body, {marginLeft: 32}]}>West Malaysia - RM30 {"\n"}East Malaysia - RM50</Text>
                    </View>
                    
                    {/* Hairline */}
                    <View style={styles.hairline}></View>
                    
                    {/* About Donor */}
                    <Text style={[textStyles.h3, {marginBottom: 16}]}>About Donor</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View>
                            <Text style={textStyles.subtitle}>{itemDetail.donor}</Text>
                            <Text style={textStyles.extrasmall}>Joined {itemDetail.donorJoinedDate}</Text>
                            <Text style={textStyles.extrasmall}>Verified</Text> 
                        </View> 
                        <Image source = {{uri : '/Users/ferdmas/Dev/work/SadaqamediaRN/src/data/image/profile/profile-1.png' }} style={styles.donorImage}/>  
                    </View>
                    
                    {/* Hairline */}
                    <View style={[styles.hairline, {marginRight: 96, marginBottom: 8, marginTop:8}]}></View>
                    
                    <View>
                       <Text style={textStyles.small}>Ratings</Text>
                        <View style={styles.ratingContainer}>
                        {[0,0,0,0,0].map((el, i) =>
                        <MaterialIcons
                            key={`${itemDetail.id}-${i}`}
                            style={styles.star}
                            name={i < Math.floor(itemDetail.avgRating) ? 'star' : 'star-border'}
                            size={24}
                            color={i < Math.floor(itemDetail.avgRating) ? defaultStyle.color.stars : defaultStyle.color.backgroundOverlay} />
                        )}
                        <Text>({itemDetail.ratings})</Text>
                        </View>
                        <Text style={textStyles.small}>Review</Text>
                        <View style={{flexDirection: 'row', marginTop:8, marginBottom:8}}>
                            <Image source = {{uri : '/Users/ferdmas/Dev/work/SadaqamediaRN/src/data/image/profile/profile-9.jpg' }} style={styles.donorReviewImage}/> 
                            <View>
                                <Text style={textStyles.extrasmall}>{itemDetail.reviewer}</Text>
                                <Text style={textStyles.extrasmall}>Joined {itemDetail.reviewerJoinedDate}</Text> 
                            </View>
                            
                        </View>
                        
                        <Text style={[textStyles.body, {marginTop:8, marginBottom:8}]}>{itemDetail.donorReview}</Text> 
                    </View>
                    
                    <CommonButton buttonText={'See Reviews'} primaryText primaryBackground/>

                    {/* Hairline */}
                    <View style={styles.hairline}></View>
                </View>
            </View>
        </ScrollView>
    )
}

export default ItemDetails
