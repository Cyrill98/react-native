import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import Header from '../../components/header'
import defaultStyle from '../../globalstyles/defaultStyles'
import textStyles from '../../globalstyles/textSyles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/core'
import styles from './styles'

const AboutScreen = () => {
    const navigation = useNavigation();
    const onBack = () => {
        navigation.goBack()
    }
    return (
        <ScrollView style={styles.root}>
            <Header
                SearchBar={false}
                Icon1={ <Ionicons name="chevron-back" size={24} style={{marginLeft: 0}} onPress={onBack}/>}
            />
            <Text style={[textStyles.h3, {color:defaultStyle.color.text, paddingTop: 24, paddingLeft: 24}]}>About Sadaqamedia</Text>
            <View style={styles.container}>
                <Text style={[textStyles.bold, styles.header]}>Our story</Text>
                <Text style={textStyles.body}>SadaqaMedia is the first ever online donation platform that allows people to exchange or give out items for free one-to-one without going through any third parties. SadaqaMedia creates a harmonious ecosystem in the community with the practice of giving away unused items to the people who are in need in an effort to improve their wellbeing.</Text>
            </View>
            <View style={styles.container}>
                <Text style={[textStyles.bold, styles.header]}>Why Donate With Us</Text>
                <Text style={[textStyles.body, styles.points]}>We target the most vulnerable groups.</Text>
                <Text style={[textStyles.body, styles.points]}>We are not tied to any political party.</Text>
                <Text style={[textStyles.body, styles.points]}>We donate to every race and religions.</Text>
                <Text style={[textStyles.body, styles.points]}>We simplify the process so it is transparent.</Text>
                <Text style={[textStyles.body, styles.points]}>It is for everyone. Free. Forever.</Text>
            </View>
            <View style={styles.container}>
                <Text style={[textStyles.bold, styles.header]}>What Can You Donate</Text>
                <Text style={[textStyles.body, styles.points]}>Men's Fashion</Text>
                <Text style={[textStyles.body, styles.points]}>Women's Fashion</Text>
                <Text style={[textStyles.body, styles.points]}>Kitchen & Appliances</Text>
                <Text style={[textStyles.body, styles.points]}>Home & Furnishing</Text>
                <Text style={[textStyles.body, styles.points]}>Food & Beverage</Text>
                <Text style={[textStyles.body, styles.points]}>Sports & Fitness</Text>
                <Text style={[textStyles.body, styles.points]}>Automative & Accessories</Text>
                <Text style={[textStyles.body, styles.points]}>Health & Beauty</Text>
                <Text style={[textStyles.body, styles.points]}>Electronics</Text>
                <Text style={[textStyles.body, styles.points]}>Pets & Accesories</Text>
                <Text style={[textStyles.body, styles.points]}>Kids & Babies</Text>
                <Text style={[textStyles.body, styles.points]}>Toys & Games</Text>
                <Text style={[textStyles.body, styles.points]}>Books & Stationeries</Text>
                <Text style={[textStyles.body, styles.points]}>Crafts & Arts</Text>
                <Text style={[textStyles.body, styles.points]}>Music & Media</Text>
                <Text style={[textStyles.body, styles.points]}>Antiques & Collectibles</Text>
            </View>
            
        </ScrollView>
    )
}

export default AboutScreen
