import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import textStyles from '../../globalstyles/textSyles'
import styles from './styles.ios'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import defaultStyle from '../../globalstyles/defaultStyles'
import CommonButton from '../button'

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
        <ScrollView>
            <View style={styles.container}>
                <Text style={[textStyles.h3, {color:defaultStyle.color.altText, paddingTop: 24, paddingLeft: 24}]}>Profile</Text>
                <View style={styles.profileContainer}>
                    <View>
                        <Image source={{uri : profile.image}} style={styles.profileImage} />
                        <CommonButton buttonText={'Follow'} primaryBackground={false} primaryText={false} /> 
                    </View>
                    <View style={styles.profileDetail}>
                        <View>
                            <Text style={[textStyles.subtitle, {color:defaultStyle.color.altText, paddingVertical: 4}]}>{profile.name}</Text>
                            <Text style={[textStyles.bold, {color:defaultStyle.color.altText}]}>{profile.username}</Text>
                            <Text style={[textStyles.extrasmall, {color:defaultStyle.color.altText}]}>{profile.joinedDate}</Text>
                            <Text style={[textStyles.body, {color:defaultStyle.color.altText, paddingVertical: 8}]}>Identity Verified</Text>
                            <View style={styles.ratingContainer}>
                                {[0,0,0,0,0].map((el, i) => 
                                <MaterialIcons
                                name={i < Math.floor(profile.avgRating) ? 'star' : 'star-border'}
                                color={i < Math.floor(profile.avgRating) ? defaultStyle.color.stars : defaultStyle.color.altText}
                                size={24}
                                />
                                )}
                                <Text style={[textStyles.body, {color:defaultStyle.color.altText}]}>({profile.rating})</Text>
                            </View> 
                        </View>
                        <View>
                            <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
                            <Text style={[textStyles.body, {color:defaultStyle.color.altText} ]}>{profile.followers} Followers</Text>
                            <Text style={[textStyles.body, {color:defaultStyle.color.altText} ]}>{profile.following} Following</Text>
                            </View>  
                        </View> 
                    </View>
                </View>
            </View>
        </ScrollView>
        
    )
}

export default ProfileCard
