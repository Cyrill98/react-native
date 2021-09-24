import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import Header from '../../components/header'
import defaultStyle from '../../globalstyles/defaultStyles'
import textStyles from '../../globalstyles/textSyles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/core'
import styles from './styles'
import FAQAccordion from '../../components/accordionList'

const FAQScreen = () => {
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
            <Text style={[textStyles.h3, {color:defaultStyle.color.text, paddingTop: 24, paddingLeft: 24}]}>Frequently Asked Questions (FAQ)</Text>
            <View style={styles.container}>
                <FAQAccordion/>
            </View>
        </ScrollView>
    )
}

export default FAQScreen
