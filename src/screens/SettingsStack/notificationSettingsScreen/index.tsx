import React, {useState} from 'react'
import { View, ScrollView, Text } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Header from '../../../components/organisms/header'
import ToggleSwitch from 'toggle-switch-react-native'
import color from '../../../constants/color'
import typography from '../../../constants/typography'
import styles from './styles'

interface State {
    newRequestPN: boolean,
    
}

const NotificationSettingsScreen = () => {
    const navigation = useNavigation();
    const onBack = () => {
        navigation.goBack()
    }
   
    const [allPushNotification, setAllPushNotification] = useState(false)
    const [newRequestPN, setNewRequestPN] = useState(false)
    const [newLikesPN, setNewLikesPN] = useState(false)
    const [newMessagesPN, setNewMessagesPN] = useState(false)
    const [newReviewsPN, setNewReviewsPN] = useState(false)
    const [updateRequestPN, setUpdateRequestPN] = useState(false)
    const [updateLikesPN, setUpdateLikesPN] = useState(false)
    const [promotionsPN, setPromotionsPN] = useState(false)
   
    const [allEmailNotification, setAllEmailNotification] = useState(false)
    const [newListingEN, setNewListingEN] = useState(false)
    const [newRequestEN, setNewRequestEN] = useState(false)
    const [newLikesEN, setNewLikesEN] = useState(false)
    const [newMessagesEN, setNewMessagesEN] = useState(false)
    const [newReviewsEN, setNewReviewsEN] = useState(false)
    const [updateRequestEN, setUpdateRequestEN] = useState(false)
    const [updateLikesEN, setUpdateLikesEN] = useState(false)
    const [promotionsEN, setPromotionsEN] = useState(false)
    
    return (
        <ScrollView style={styles.root}>
            <Header
                SearchBar={false}
                Icon1={ <Ionicons name="chevron-back" size={24} style={{marginLeft: 0}} onPress={onBack}/>}
            />
            <Text style={[typography.h3, {color:color.text, paddingTop: 24, paddingLeft: 24}]}>Notification Settings</Text>
            <View style={styles.detailContainer}>
                <View style={styles.subContainer}>
                    <Text style={typography.bold}>Push Notifications</Text>
                    {/* <ToggleSwitch
                        isOn={allPushNotification}
                        onColor="green"
                        offColor={color.backgroundAccent}
                        labelStyle={{ color: "black", fontWeight: "900" }}
                        size='medium'
                        onToggle={allPushNotification => {
                                setAllPushNotification(allPushNotification)
                        }}
                    /> */}
                </View>
                <View style={styles.subInnerContainer}>
                    <View style={styles.items}>
                        <Text style={typography.body}>New Request on Listings</Text>
                        <ToggleSwitch
                            isOn={newRequestPN}
                            onColor="green"
                            offColor={color.backgroundAccent}
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size='medium'
                            onToggle={newRequestPN => {setNewRequestPN(newRequestPN)}}
                        />
                    </View>
                    <View style={styles.items}>
                        <Text style={typography.body}>New Likes on Listings</Text>
                        <ToggleSwitch
                            isOn={newLikesPN}
                            onColor="green"
                            offColor={color.backgroundAccent}
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size='medium'
                            onToggle={newLikesPN => {setNewLikesPN(newLikesPN)}}
                        />
                    </View>
                    <View style={styles.items}>
                        <Text style={typography.body}>New Messages</Text>
                        <ToggleSwitch
                            isOn={newMessagesPN}
                            onColor="green"
                            offColor={color.backgroundAccent}
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size='medium'
                            onToggle={newMessagesPN => {setNewMessagesPN(newMessagesPN)}}
                        />
                    </View>
                    <View style={styles.items}>
                        <Text style={typography.body}>New Reviews</Text>
                        <ToggleSwitch
                            isOn={newReviewsPN}
                            onColor="green"
                            offColor={color.backgroundAccent}
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size='medium'
                            onToggle={newReviewsPN => {setNewReviewsPN(newReviewsPN)}}
                        />
                    </View>
                    <View style={styles.items}>
                        <Text style={typography.body}>Update on Requested Items</Text>
                        <ToggleSwitch
                            isOn={updateRequestPN}
                            onColor="green"
                            offColor={color.backgroundAccent}
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size='medium'
                            onToggle={updateRequestPN => {setUpdateRequestPN(updateRequestPN)}}
                        />
                    </View>
                    <View style={styles.items}>
                        <Text style={typography.body}>Update on Liked Items</Text>
                        <ToggleSwitch
                            isOn={updateLikesPN}
                            onColor="green"
                            offColor={color.backgroundAccent}
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size='medium'
                            onToggle={updateLikesPN => {setUpdateLikesPN(updateLikesPN)}}
                        />
                    </View>
                    <View style={styles.items}>
                        <Text style={typography.body}>Promotions</Text>
                        <ToggleSwitch
                            isOn={promotionsPN}
                            onColor="green"
                            offColor={color.backgroundAccent}
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size='medium'
                            onToggle={promotionsPN => {setPromotionsPN(promotionsPN)}}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.detailContainer}>
                <View style={styles.subContainer}>
                    <Text style={typography.bold}>Email Notifications</Text>
                    {/* <ToggleSwitch
                        isOn={allEmailNotification}
                        onColor="green"
                        offColor={color.backgroundAccent}
                        labelStyle={{ color: "black", fontWeight: "900" }}
                        size='medium'
                        onToggle={allEmailNotification => {setAllEmailNotification(allEmailNotification)}}
                    /> */}
                </View>
                <View style={styles.subInnerContainer}>
                    <View style={styles.items}>
                        <Text style={typography.body}>Item Listed for Donations</Text>
                        <ToggleSwitch
                            isOn={newListingEN}
                            onColor="green"
                            offColor={color.backgroundAccent}
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size='medium'
                            onToggle={newListingEN => {setNewListingEN(newListingEN)}}
                        />
                    </View>
                    <View style={styles.items}>
                        <Text style={typography.body}>New Requests</Text>
                        <ToggleSwitch
                            isOn={newRequestEN}
                            onColor="green"
                            offColor={color.backgroundAccent}
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size='medium'
                            onToggle={newRequestEN => {setNewRequestEN(newRequestEN)}}
                        />
                    </View>
                    <View style={styles.items}>
                        <Text style={typography.body}>New Likes</Text>
                        <ToggleSwitch
                            isOn={newLikesEN}
                            onColor="green"
                            offColor={color.backgroundAccent}
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size='medium'
                            onToggle={newLikesEN => {setNewLikesEN(newLikesEN)}}
                        />
                    </View>
                    <View style={styles.items}>
                        <Text style={typography.body}>New Messages</Text>
                        <ToggleSwitch
                            isOn={newMessagesEN}
                            onColor="green"
                            offColor={color.backgroundAccent}
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size='medium'
                            onToggle={newMessagesEN => {setNewMessagesEN(newMessagesEN)}}
                        />
                    </View>
                    <View style={styles.items}>
                        <Text style={typography.body}>New Reviews</Text>
                        <ToggleSwitch
                            isOn={newReviewsEN}
                            onColor="green"
                            offColor={color.backgroundAccent}
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size='medium'
                            onToggle={newReviewsEN => {setNewReviewsEN(newReviewsEN)}}
                        />
                    </View>
                    <View style={styles.items}>
                        <Text style={typography.body}>Update on Requested Items</Text>
                        <ToggleSwitch
                            isOn={updateRequestEN}
                            onColor="green"
                            offColor={color.backgroundAccent}
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size='medium'
                            onToggle={updateRequestEN => {setUpdateRequestEN(updateRequestEN)}}
                        />
                    </View>
                    <View style={styles.items}>
                        <Text style={typography.body}>Update on Liked Items</Text>
                        <ToggleSwitch
                            isOn={updateLikesEN}
                            onColor="green"
                            offColor={color.backgroundAccent}
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size='medium'
                            onToggle={updateLikesEN => {setUpdateLikesEN(updateLikesEN)}}
                        />
                    </View>
                    <View style={styles.items}>
                        <Text style={typography.body}>Promotions</Text>
                        <ToggleSwitch
                            isOn={promotionsEN}
                            onColor="green"
                            offColor={color.backgroundAccent}
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size='medium'
                            onToggle={promotionsEN => {setPromotionsEN(promotionsEN)}}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default NotificationSettingsScreen
