import React from 'react'
import { View, Text } from 'react-native'
import textStyles from '../../globalstyles/textSyles'
import styles from './styles'

interface TagProp {
    tagText: string,
    isCard?: boolean,
    isItemDetail?: boolean,
}

const StatusTag = (prop: TagProp) => {
    return (
        <View>
            {!!prop.isItemDetail &&
            <View style={styles.detailTag}> 
                <Text style={[textStyles.button, styles.detailTagText]}>{prop.tagText}</Text>
            </View>
            }
            {!!prop.isCard &&
            <View style={styles.miniTag}> 
                <Text style={[textStyles.buttonsmall, styles.cardTagText]}>{prop.tagText}</Text>
            </View>
            }
        </View>
    )
}

export default StatusTag
