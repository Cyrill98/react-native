import React, {useRef, useState} from 'react'
import { View, Text, ScrollView, Image, Share, Alert } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { RootStackParamList } from '../../../navigation/rootStackParam'
import ImageCarousel from '../../atoms/imageCarousel'
import CommonButton from '../../atoms/button'
import StatusTag from '../../atoms/statusTag'
import PopupModal from '../../molecules/popupModal'
import Header from '../header'
import styles from './styles'
import typography from '../../../constants/typography'

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
        requestedBy: string[],
        favouritedBy: string [],
        timeStamp: string,
        itemCondition: string,
        itemQuantity: string,
        pickupLocation: string,
        pickupTime: string,
        deliveryPrice: string,
        donor: string,
        donorJoinedDate: string,
        donorImage: string,
        donorAvgRating: number,
        donorRatingCount: number,
        taker: string,
        takerJoinedDate: string,
        takerImage: string,
        takerReviewToDonor: string,
        donorReviewToTaker: string,
    }
}

type itemDetailScreenProp = StackNavigationProp<RootStackParamList, 'ItemDetailsScreen'>;

const ItemDetails = (props: ItemDetailProp) => {
    const [cancelRequestPopup, setCancelRequestPopup] = useState(false)
    const [markAsUnreservedPopup, setMarkAsUnreservedPopup] = useState(false)
    const [itemReceivedPopup, setItemReceivedPopup] = useState(false)
    const [deletePopup, setDeletePopup] = useState(false)
    const itemDetail = props.item;
    const user = "@lsyakiru"

    const navigation = useNavigation<itemDetailScreenProp>();
    const route = useRoute();
    //console.warn(route.params);
    const onBack = () => {
        navigation.goBack();
    }
    const onShare = async () => {
        try {
            const result = await Share.share({
                title: "Free Items on Sadaqamedia",
                url: 'www.sadaqamedia.my',
                message: "Check out this item listed on Sadaqamedia. If you are interested, it's free. Just sign up and start requesting pre-loved items now."
            });
            if (result.action === Share.sharedAction){
                if(result.activityType){

                } else {

                } 
            } else if (result.action === Share.dismissedAction) {

                }
            } catch (err) {
                Alert.alert(err.message)
            };
    }
    const onReport = () => {

    }
    const onAnalyticsReserved = () => {
        navigation.navigate('AnalyticsReservedScreen', {id: itemDetail.id})
    }
    const onAnalyticsDonated = () => {
        navigation.navigate('AnalyticsDonatedScreen', {id: itemDetail.id})
    }
    const onEdit = () => {
        navigation.navigate('EditItemDetailsScreen', {id: itemDetail.id} )
    }
    const onDelete = () => {
        setDeletePopup(true)
    }
    const onConfirmDelete = () => {
        setDeletePopup(true)
    }
    const onRequest = () => {
        //console.warn('test')
        navigation.navigate('RequestScreen', {id: itemDetail.id})
    };
    const onCancelRequest = () => {
        setCancelRequestPopup(true)
    };
    const onConfirmCancelRequest = () => {
    };
    const onListOfRequestors = () => {
        navigation.navigate('AnalyticsListedScreen', {id: itemDetail.id})
    };
    const onMarkAsUnreserved = () => {
        setMarkAsUnreservedPopup(true)
    };
    const onConfirmMarkAsUnreserved = () => {
    };
    const onItemReceived = () => {
        setItemReceivedPopup(true)
    };
    const onConfirmItemReceived = () => {
    };
    const onLeaveReviewToTaker = () => {
        navigation.navigate('ReviewToTakerScreen')
    };
    const onLeaveReviewToDonor = () => {
        navigation.navigate('ReviewToDonorScreen')
    };

    const HeaderOption = () => {
        // Logic
        // 1. if itemStatus is "Listed", 
        //         if donor is user, then can tap "list of requestors"
        //         else if requestedby list includes user, 
        //              then can tap "Cancel Request" (if user is included in requested by list)
        //              or can tap "Request" (if not included in the list)
        // 2. if itemStatus is "In Process",
        //         if donor is user, then can tap "Mark as Unreserved",
        //         else if taker is user, then can tap "Item Received"
        //         else if donor/taker is not user, no button
        // 3. if itemStatus is "Process Completed",
        //         if donor/taker is user, then can tap "Leave Review"
    
            if (itemDetail.itemStatus == "Listed"){
                //List of Requestors
                if(itemDetail.donor == user){
                    return <Header
                    SearchBar={false}
                    Icon1={ <Ionicons name="chevron-back" size={24} style={{marginLeft: 0}} onPress={onBack}/>}
                    Icon2={ <AntDesign name="sharealt" size={24} style={{paddingLeft: 8}} onPress={onShare}/>}
                    Icon3={ <MaterialIcons name="edit" size={24} style={{paddingLeft: 8}} onPress={onEdit}/> }
                    Icon4={ <MaterialIcons name="delete-outline" size={24} style={{paddingLeft: 8}} onPress={onDelete}/> }
                    />
                } { 
                    //Cancel Request
                    if (itemDetail.requestedBy.includes(user)) {
                        return <Header
                        SearchBar={false}
                        Icon1={ <Ionicons name="chevron-back" size={24} style={{marginLeft: 0}} onPress={onBack}/>}
                        Icon2={ <AntDesign name="sharealt" size={24} style={{paddingLeft: 8}} onPress={onShare}/>}
                        // Icon3={ <MaterialIcons name="report" size={24} style={{paddingLeft: 8}} onPress={onReport}/> }
                        />
                    } {
                        // Request
                        return <Header
                        SearchBar={false}
                        Icon1={ <Ionicons name="chevron-back" size={24} style={{marginLeft: 0}} onPress={onBack}/>}
                        Icon2={ <AntDesign name="sharealt" size={24} style={{paddingLeft: 8}} onPress={onShare}/>}
                        // Icon3={ <MaterialIcons name="report" size={24} style={{paddingLeft: 8}} onPress={onReport}/> }
                        />
                    }  
                }
            } else if (itemDetail.itemStatus == "In Process"){
                // Mark as Unreserved
                if(itemDetail.donor == user){
                    return <Header
                    SearchBar={false}
                    Icon1={ <Ionicons name="chevron-back" size={24} style={{marginLeft: 0}} onPress={onBack}/>}
                    Icon2={ <Ionicons name="md-analytics" size={24} style={{paddingLeft: 8}} onPress={onAnalyticsReserved}/> }
                    Icon3={ <MaterialIcons name="delete-outline" size={24} style={{paddingLeft: 8}} onPress={onDelete}/> }
                    />
                } else if (itemDetail.taker == user) {
                    // Item Received
                    return <Header
                    SearchBar={false}
                    Icon1={ <Ionicons name="chevron-back" size={24} style={{marginLeft: 0}} onPress={onBack}/>}
                    // Icon2={ <MaterialIcons name="report" size={24} style={{paddingLeft: 8}} onPress={onReport}/> }
                    /> 
                }     
            } else if (itemDetail.itemStatus == "Completed"){
                //Leave Review to Taker
                if(itemDetail.donor == user){
                    return <Header
                    SearchBar={false}
                    Icon1={ <Ionicons name="chevron-back" size={24} style={{marginLeft: 0}} onPress={onBack}/>}
                    Icon2={ <Ionicons name="md-analytics" size={24} style={{paddingLeft: 8}} onPress={onAnalyticsDonated}/>}
                    />
                } else if (itemDetail.taker == user) {
                    // Leave Review to Donor
                    return <Header
                    SearchBar={false}
                    Icon1={ <Ionicons name="chevron-back" size={24} style={{marginLeft: 0}} onPress={onBack}/>}
                    />
                } return
            } return
        }

    const ButtonOption = () => {
    // Logic
    // 1. if itemStatus is "Listed", 
    //         if donor is user, then can tap "list of requestors"
    //         else if requestedby list includes user, 
    //              then can tap "Cancel Request" (if user is included in requested by list)
    //              or can tap "Request" (if not included in the list)
    // 2. if itemStatus is "In Process",
    //         if donor is user, then can tap "Mark as Unreserved",
    //         else if taker is user, then can tap "Item Received"
    //         else if donor/taker is not user, no button
    // 3. if itemStatus is "Process Completed",
    //         if donor/taker is user, then can tap "Leave Review"

        if (itemDetail.itemStatus == "Listed"){
            if(itemDetail.donor == user){
                return <CommonButton buttonText={"List of Requestors"} primaryText primaryBackground onPress={onListOfRequestors}/>
            } { 
                if (itemDetail.requestedBy.includes(user)) {
                    return <CommonButton buttonText={"Cancel Request"} primaryText primaryBackground onPress={onCancelRequest}/>
                } {
                    return <CommonButton buttonText={"Request"} primaryText primaryBackground onPress={onRequest}/> 
                }  
            }
        } else if (itemDetail.itemStatus == "In Process"){
            if(itemDetail.donor == user){
                return <CommonButton buttonText={"Mark as Unreserved"} primaryText primaryBackground onPress={onMarkAsUnreserved}/>
            } else if (itemDetail.taker == user) {
                return <CommonButton buttonText={"Item Received"} primaryText primaryBackground onPress={onItemReceived}/>
            }     
        } else if (itemDetail.itemStatus == "Completed"){
            if(itemDetail.donor == user && itemDetail.donorReviewToTaker == ''){
                return <CommonButton buttonText={"Rate your Taker"} primaryText primaryBackground onPress={onLeaveReviewToTaker}/>
            } else if (itemDetail.taker == user && itemDetail.takerReviewToDonor == '') {
                return <CommonButton buttonText={"Rate your Donor"} primaryText primaryBackground onPress={onLeaveReviewToDonor}/>
            } return
        } return
    }

    const ItemTag = () => {
        if (itemDetail.itemStatus == "In Process") {
            if (itemDetail.donor == user) {
                return <StatusTag isItemDetail tagText={"Item Reserved"}/>
            } else if (itemDetail.taker == user) {
                return <StatusTag isItemDetail tagText={"Request Accepted"}/>
            } return
        }
    }


    return (
        <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
            {HeaderOption()}
            {/* Image Carousel */}
            <ImageCarousel images={itemDetail.images}/>
            <View style={styles.container}>
                {/* Item Status */}
                {ItemTag()}
                {/* {(!!itemDetail.itemStatus?.includes("Reserved") || 
                !!itemDetail.itemStatus?.includes("Accepted")) && 
                <View style={styles.tag}> 
                    <Text style={[typography.button, {textAlign: 'center', color: globalStyles.color.text}]}>{props.item.itemStatus}</Text>
                </View>} */}
                <View style={styles.detailContainer}>
                    {/* Action Button */}
                    {ButtonOption()}
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 16}}>
                        <View style={{flex:1}}>
                            {/* Title */}
                            <Text style={[typography.h3,{paddingRight: 24}]}>{itemDetail.title}</Text>
                            {/* Location */}
                            <Text style={typography.extrasmall}>{itemDetail.location}</Text>
                            {/* Donor */}
                            <Text style={typography.extrasmall}>by {itemDetail.donor}</Text>
                        </View>
                        {/* {!itemDetail.donor.includes(user) && <AntDesign name='hearto' size={24} />} */}
                    </View>
                    {/* Save Count */}
                    {/* <View style={styles.detail}>
                        <AntDesign name='hearto' size={24} />
                        <Text style={[typography.body, {padding: 8}]}>{itemDetail.favouritedBy.length} saves</Text>   
                    </View> */}
                    
                    {/* Request Count */}
                    <View style={styles.detail}>
                        <MaterialIcons name='emoji-people' size={24} />
                        <Text style={[typography.body, {padding: 8}]}>{itemDetail.requestedBy.length} requests</Text>
                    </View>
                    
                    {/* Upload Time */}
                    <View style={styles.detail}>
                        <MaterialIcons name='timer' size={24} />
                        <Text style={[typography.body, {padding: 8}]}>{itemDetail.timeStamp}</Text>
                    </View>
                    
                    {/* Condition */}
                    <View style={styles.detail}>
                        <MaterialIcons name='fiber-new' size={24} />
                        <Text style={[typography.body, {padding: 8}]}>{itemDetail.itemCondition}</Text>
                    </View>
                    
                    {/* Quantity */}
                    <View style={styles.detail}>
                        <MaterialIcons name='list-alt' size={24} />
                        <Text style={[typography.body, {padding: 8}]}>{itemDetail.itemQuantity}</Text>
                    </View>
                    
                    {/* Category */}
                    <View style={styles.detail}>
                        <MaterialIcons name='category' size={24} />
                        <Text style={[typography.body, {padding: 8}]}>{itemDetail.category}</Text>
                    </View>
                    
                    {/* Description */}
                    <View style={styles.detail}>
                        <MaterialIcons name='description' size={24} />
                        <Text style={[typography.body, {padding: 8, flex: 1, flexWrap: 'wrap'}]}>{itemDetail.description}</Text>
                    </View>
                    
                    {/* Hairline */}
                    <View style={styles.hairline}></View>
                    {/* Logistics */}
                    <View>
                        <Text>Logistics</Text>
                        {/* Pickup */}
                        <View style={styles.detail}>
                            <MaterialIcons name="location-on" size={24} />
                            <Text style={[typography.subtitle, {padding: 8}]}>Pickup</Text>
                        </View>
                        <Text style={[typography.body, {marginLeft: 32}]}>Kota Damansara {"\n"}Weekday, 5pm - 8pm {"\n"}Weekend, 10am - 4pm</Text>
                        {/* Delivery */}
                        <View style={styles.detail}>
                            <MaterialCommunityIcons name="truck-outline" size={24} />
                            <Text style={[typography.subtitle, {padding: 8}]}>Delivery</Text>
                        </View>
                        <Text style={[typography.body, {marginLeft: 32}]}>West Malaysia - RM30 {"\n"}East Malaysia - RM50</Text>
                    </View>
                    
                    {/* Hairline */}
                    <View style={styles.hairline}></View>
                    
                    {/* About Donor */}
                    <Text style={[typography.h3, {marginBottom: 16}]}>About Donor</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View>
                            <Text style={typography.subtitle}>{itemDetail.donor}</Text>
                            <Text style={typography.extrasmall}>Joined {itemDetail.donorJoinedDate}</Text>
                            <Text style={typography.extrasmall}>Verified</Text> 
                        </View> 
                        <Image source = {{uri : itemDetail.donorImage }} style={styles.donorImage}/>  
                    </View>
                    
                    {/* Hairline */}
                    {/* <View style={[styles.hairline, {marginRight: 96, marginBottom: 8, marginTop:8}]}></View> */}
                    
                    {/* <View>
                       <Text style={typography.small}>Ratings</Text>
                        <View style={styles.ratingContainer}>
                        {[0,0,0,0,0].map((el, i) =>
                        <MaterialIcons
                            key={`${itemDetail.id}-${i}`}
                            style={styles.star}
                            name={i < Math.floor(itemDetail.donorAvgRating) ? 'star' : 'star-border'}
                            size={24}
                            color={i < Math.floor(itemDetail.donorAvgRating) ? defaultStyle.color.stars : defaultStyle.color.backgroundOverlay} />
                        )}
                        <Text>({itemDetail.donorRatingCount})</Text>
                        </View>
                        <Text style={typography.small}>Review</Text>
                        <View style={{flexDirection: 'row', marginTop:8, marginBottom:8}}>
                            <Image source = {{uri : itemDetail.takerImage }} style={styles.takerImage}/> 
                            <View>
                                <Text style={typography.extrasmall}>{itemDetail.taker}</Text>
                                <Text style={typography.extrasmall}>Joined {itemDetail.takerJoinedDate}</Text> 
                            </View>
                            
                        </View>
                        
                        <Text style={[typography.body, {marginTop:8, marginBottom:8}]}>{itemDetail.takerReviewToDonor}</Text> 
                    </View> */}
                    <View style={{marginTop: 16}}>
                        <CommonButton buttonText={"See Profile"} primaryText primaryBackground/>
                    </View>

                    {/* Hairline */}
                    {/* <View style={styles.hairline}></View> */}
                </View>
            </View>
        </ScrollView>
        <PopupModal 
            modalSubtitle="Are you sure you want to cancel the request you sent to this donor?"
            isVisible={cancelRequestPopup}
            button1={ <CommonButton primaryText primaryBackground buttonText="Yes. I am sure." onPress={onConfirmCancelRequest}/> }
            button2={ <CommonButton primaryText={false} primaryBackground={false} buttonText="No. Please Cancel." onPress={() => setCancelRequestPopup(false)}/> }
            />
        <PopupModal 
            modalSubtitle="Are you sure you want to mark this listing as unreserved? The requestor you accepted will be notified they are not selected anymore."
            isVisible={markAsUnreservedPopup}
            button1={ <CommonButton primaryText primaryBackground buttonText="Yes. I am sure." onPress={onConfirmMarkAsUnreserved}/> }
            button2={ <CommonButton primaryText={false} primaryBackground={false} buttonText="No. Please Cancel." onPress={() => setMarkAsUnreservedPopup(false)}/> }
            />
        <PopupModal 
            modalSubtitle="Are you sure you want to delete this listing? Your requestors will be notified that this is listing is no longer available."
            isVisible={deletePopup}
            button1={ <CommonButton primaryText primaryBackground buttonText="Yes. I am sure." onPress={onConfirmDelete}/> }
            button2={ <CommonButton primaryText={false} primaryBackground={false} buttonText="No. Please Cancel." onPress={() => setDeletePopup(false)}/> }
            />
        <PopupModal 
            modalSubtitle="Are you sure you have received this item?"
            isVisible={itemReceivedPopup}
            button1={ <CommonButton primaryText primaryBackground buttonText="Yes. I am sure." onPress={onConfirmItemReceived}/> }
            button2={ <CommonButton primaryText={false} primaryBackground={false} buttonText="No. Please Cancel." onPress={() => setItemReceivedPopup(false)}/> }
            />
       
        </View>
    )
}

export default ItemDetails
