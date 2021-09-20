import React from 'react'
import { View, Text } from 'react-native'
import textStyles from '../../globalstyles/textSyles'
import styles from './styles'

interface TagProp {
    tagText: string,
}

const StatusTag = (prop: TagProp) => {
    return (
        <View style={styles.tag}> 
            <Text style={[textStyles.button, styles.tagText]}>{prop.tagText}</Text>
        </View>
    )
}

export default StatusTag
