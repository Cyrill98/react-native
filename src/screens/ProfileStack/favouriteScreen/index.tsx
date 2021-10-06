import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Ionicons from 'react-native-vector-icons/Ionicons'

import MainCard from '../../../components/molecules/mainCard'
import Header from '../../../components/organisms/header'
import items from '../../../data/productDetails'
import color from '../../../constants/color'
import typography from '../../../constants/typography'
import styles from './styles'

const FavouriteScreen = () => {
    const navigation = useNavigation();

    const onBack = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.root}>
            <Header 
                SearchBar={false}
                Icon1={ <Ionicons name="chevron-back" size={24} style={{marginLeft: 0}} onPress={onBack}/>}/>
            <FlatList
            data= {items}
            renderItem={({item}) => <MainCard item={item}/>}
            numColumns={2}
            showsVerticalScrollIndicator= {false}
            ListHeaderComponent={<Text style={[typography.h3, {color:color.text, paddingVertical: 16, marginLeft: 24}]}>Your Favourites</Text>}
            />
        </View>  
    )
}

export default FavouriteScreen
