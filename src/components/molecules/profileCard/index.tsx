import React from 'react'
import { View, Text, Image } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import typography from '../../../constants/typography'
import styles from './styles'
import color from '../../../constants/color'
import CommonButton from '../../atoms/button'

interface ProfileDetailProp {
    profile: {
        uid: string,
        username: string,
        name: string,
        image: string,
        joinedDate: string,
        verification: string,
        avgRating: number,
        rating: number,
        followers: number,
        following: number,
        listedItems: number,
        donatedItems: number,
    }
}

const ProfileCard = (props: ProfileDetailProp) => {
    const profile = props.profile
    return (
        <View>
            <View style={styles.container}>
                {/* <Text style={[typography.h3, {color:color.altText, paddingTop: 24, paddingLeft: 24}]}>Profile</Text> */}
                <View style={styles.profileContainer}>
                    <View>
                        <Image source={{uri : profile.image}} style={styles.profileImage} />
                        {/* <CommonButton buttonText={'Follow'} primaryBackground={false} primaryText={false} />  */}
                    </View>
                    <View style={styles.profileDetail}>
                        <View>
                            <Text style={[typography.subtitle, {color:color.altText, paddingVertical: 4}]}>{profile.name}</Text>
                            <Text style={[typography.bold, {color:color.altText}]}>{profile.username}</Text>
                            <Text style={[typography.extrasmall, {color:color.altText}]}>{profile.joinedDate}</Text>
                            <Text style={[typography.body, {color:color.altText, paddingVertical: 8}]}>Identity Verified</Text>
                            <View style={styles.ratingContainer}>
                                {[0,0,0,0,0].map((el, i) => 
                                <MaterialIcons
                                name={i < Math.floor(profile.avgRating) ? 'star' : 'star-border'}
                                color={i < Math.floor(profile.avgRating) ? color.stars : color.altText}
                                size={24}
                                />
                                )}
                                <Text style={[typography.body, {color:color.altText}]}>({profile.rating})</Text>
                            </View> 
                        </View>
                        {/* <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
                            <Text style={[typography.body, {color:color.altText} ]}>{profile.followers} Followers</Text>
                            <Text style={[typography.body, {color:color.altText} ]}>{profile.following} Following</Text>
                        </View>   */}
                    </View>
                </View>
            </View>
        </View>
        
    )
}

export default ProfileCard
