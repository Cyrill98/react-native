import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/core'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import Header from '../../components/header'
import ItemDetails from '../../components/itemDetail'
import itemDetails from '../../data/productDetails'

const ItemDetailsScreen = () => {
    const navigate = useNavigation();
    const route = useRoute();
    const {id} = route.params;

    const onBack = () => {
        navigate.goBack();
    }

    const onShare = () => {}

    const onReport = () => {}

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <Header 
                    SearchBar={false}
                    Icon1={ <Ionicons name="chevron-back" size={24} style={{marginLeft: 0}} onPress={onBack}/>}
                    Icon2={ <AntDesign name="sharealt" size={24} style={{paddingLeft: 8}} onPress={onShare}/>}
                    Icon3={ <MaterialIcons name="error-outline" size={24} style={{paddingLeft: 8}} onPress={onReport}/> }
                    />
                <ItemDetails item={itemDetails[id]}/>
                {/* <Text style={[textStyles.h3, {marginBottom: 16}]}>Similar Items</Text>
                <Text style={[textStyles.h3, {marginBottom: 16}]}>Other Items From Donor</Text> */}
            </View>
            
        </ScrollView>
    )
}

export default ItemDetailsScreen
