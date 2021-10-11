import React from 'react'
import { View, Text, Modal } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import typography from '../../../constants/typography'
import styles from './styles'

interface popupProp {
    modalSubtitle: string,
    isVisible: boolean,
    button1: object,
    button2: object,
}

const PopupModal = (props: popupProp) => {
    return (
            <Modal
                visible={props.isVisible}
                animationType="slide"
                transparent
            >
                    <View style={styles.root}>
                        <View style={styles.modalView}>
                            <Text style={[styles.subtitle, typography.body]}>{props.modalSubtitle}</Text>
                            <View style={styles.buttonContainer}>
                                {props.button1}
                                {props.button2}
                            </View>
                        </View>
                    </View>
            </Modal>
    )
}

export default PopupModal
