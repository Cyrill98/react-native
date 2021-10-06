import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/core'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import Header from '../../components/header'
import ItemDetails from '../../components/itemDetail'
import items from '../../data/productDetails'

const ItemDetailsScreen = () => {
    const route = useRoute();
    const {id} = route.params;

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <ItemDetails item={items[id]}/>
                {/* <Text style={[textStyles.h3, {marginBottom: 16}]}>Similar Items</Text>
                <Text style={[textStyles.h3, {marginBottom: 16}]}>Other Items From Donor</Text> */}
            </View>
            
        </ScrollView>
    )
}

export default ItemDetailsScreen
