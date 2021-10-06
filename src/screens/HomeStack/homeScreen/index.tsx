import React from 'react'
import { View, Text, FlatList, } from 'react-native'

import MainCard from '../../../components/molecules/mainCard'
import items from '../../../data/productDetails'
import color from '../../../constants/color'
import typography from '../../../constants/typography'
import styles from './styles'




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
            ListHeaderComponent={<Text style={[typography.h3, {color:color.text, paddingVertical: 16, marginLeft: 24}]}>Your Daily Picks</Text>}
            />
        </View>  
        
    )
}

export default Homescreen
