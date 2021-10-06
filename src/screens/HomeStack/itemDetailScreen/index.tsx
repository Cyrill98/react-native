import React from 'react'
import { ScrollView, View } from 'react-native'
import { useRoute } from '@react-navigation/core'

import ItemDetails from '../../../components/organisms/itemDetail'
import items from '../../../data/productDetails'

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
