import React from 'react'
import { Text, ScrollView, View, FlatList } from 'react-native'

import ProfileCard from '../../components/profileCard'
import Profile from '../../data/profile'
import defaultStyle from '../../globalstyles/defaultStyles'
import styles from './styles.ios'
import MainCard from '../../components/mainCard'
import items from '../../data/products'
import textStyles from '../../globalstyles/textSyles'
import OptionButton from '../../components/segmentedControls'

const ProfileScreen = () => {
    return (
        <ScrollView 
            showsVerticalScrollIndicator={false}
            style={styles.root}>
            <ProfileCard profile={Profile[0]}/>
            <View style={styles.itemContainer}>
            <OptionButton options={["Items", "Reviews"]}/>
            <FlatList
            data= {items}
            renderItem={({item}) => <MainCard item={item}/>}
            numColumns={2}
            showsVerticalScrollIndicator= {false}
            // ListHeaderComponent={<Text style={[textStyles.h3, {color:defaultStyle.color.text, paddingVertical: 16, marginLeft: 24}]}>Your Daily Picks</Text>}
            />
            </View>
        </ScrollView>
    )
}

export default ProfileScreen
