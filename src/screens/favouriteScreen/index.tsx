import React from 'react'
import { View, ScrollView, Text, FlatList } from 'react-native'
import MainCard from '../../components/mainCard'
import defaultStyle from '../../globalstyles/defaultStyles'
import textStyles from '../../globalstyles/textSyles'
import items from '../../data/productDetails'
import styles from './styles'
import Header from '../../components/header'
import { useNavigation } from '@react-navigation/core'
import Ionicons from 'react-native-vector-icons/Ionicons'

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
            ListHeaderComponent={<Text style={[textStyles.h3, {color:defaultStyle.color.text, paddingVertical: 16, marginLeft: 24}]}>Your Favourites</Text>}
            />
        </View>  
    )
}

export default FavouriteScreen
