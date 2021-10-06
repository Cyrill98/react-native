import React from 'react'
import { ScrollView, Text } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Header from '../../../components/organisms/header'
import color from '../../../constants/color'
import typography from '../../../constants/typography'
import styles from './styles'

const RoadmapScreen = () => {
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
            <Text style={[typography.h3, {color:color.text, paddingTop: 24, paddingLeft: 24}]}>Roadmap</Text>
            
        </ScrollView>
    )
}

export default RoadmapScreen
