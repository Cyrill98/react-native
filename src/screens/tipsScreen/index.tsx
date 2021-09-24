import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import Header from '../../components/header'
import defaultStyle from '../../globalstyles/defaultStyles'
import textStyles from '../../globalstyles/textSyles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/core'
import styles from './styles'

const TipsScreen = () => {
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
            <Text style={[textStyles.h3, {color:defaultStyle.color.text, paddingTop: 24, paddingLeft: 24}]}>Tips</Text>
            <View style={styles.container}>
                <Text style={textStyles.body}>We are dedicated to lending new donors a hand in their SadaqaMedia experience, here are a few tips to help you reach out to more potential takers: </Text>
                    <Text style={[textStyles.bold, styles.items]}>Make it the center of attraction</Text>
                    <Text style={textStyles.body}>
                        Allow takers to know what you are donating at a glance. No guesses needed.
                    </Text>
                    <Text style={[textStyles.bold, styles.items]}>Good Lighting = Good Photo</Text>
                    <Text style={textStyles.body}>
                        Sunlight is probably your best friend. Take your time, adjust the angle and snap your shot!
                    </Text>
                    <Text style={[textStyles.bold, styles.items]}>Focus of focusing</Text>
                    <Text style={textStyles.body}>
                        When taking a photo, tap on the area you want to focus on. With clear images, takers are able to see more details of the item and this helps them make a decision.
                    </Text>
                    <Text style={[textStyles.bold, styles.items]}>Snap up to 10 photos!</Text>
                    <Text style={textStyles.body}>
                        Flaunt your items at different angles. Takers would definitely appreciate being able to see details of the item before they make a decision!
                    </Text>
                    <Text style={[textStyles.bold, styles.items]}>Write convincing product title and description</Text>
                    <Text style={textStyles.body}>
                        Put yourself in the takers’ shoes and detail all the necessary info you would want to know before buying it! Remember that buyers are not always looking for brand new items in perfect condition. Preloved items are sought after too.
                    </Text>
                    <Text style={[textStyles.bold, styles.items]}>Place your items in the right category</Text>
                    <Text style={textStyles.body}>
                        It allows buyers to find your items easily
                    </Text>
                    <Text style={[textStyles.bold, styles.items]}>Write short and clear titles</Text>
                    <Text style={textStyles.body}>
                        Buyers will not spend more than 3 seconds to read your title while browsing the platform. Being concise always helps!
                    </Text>
                    
                    
            </View>
            
        </ScrollView>
    )
}

export default TipsScreen
