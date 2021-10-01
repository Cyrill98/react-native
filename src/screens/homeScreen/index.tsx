import React from 'react'
import { View, Text, FlatList, } from 'react-native'

import defaultStyle from '../../globalstyles/defaultStyles'
import textStyles from '../../globalstyles/textSyles'
import styles from './styles.ios'
import MainCard from '../../components/mainCard'
import items from '../../data/productDetails'




const Homescreen = () => {
    const user = "@lsyakiru"
    const userData = items.filter(e => e.itemStatus.includes("Listed")).filter(e => !e.donor.includes(user))
    return (
        <View style={styles.root}>
            <FlatList
            data = {userData}
            renderItem={({item}) => <MainCard item={item}/>}
            numColumns={2}
            showsVerticalScrollIndicator= {false}
            ListHeaderComponent={<Text style={[textStyles.h3, {color:defaultStyle.color.text, paddingVertical: 16, marginLeft: 24}]}>Your Daily Picks</Text>}
            />
        </View>  
        
    )
}

export default Homescreen
