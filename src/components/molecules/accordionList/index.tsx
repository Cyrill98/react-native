import React, {useState} from 'react'
import { View, Text } from 'react-native'
import Accordion from 'react-native-collapsible/Accordion'

import Questions from '../../../data/FAQs'
import typography from '../../../constants/typography'
import styles from './styles'

const FAQAccordion = () => {

    // const state = {
    //     activeSections: [],
    // }

    const renderHeader = (section) => {
        return (
            <View style={styles.headerContainer}>
                <Text style={typography.subtitle}>{section.title}</Text>
            </View>
        );
    }

    const renderContent = (section) => {
        return (
            <View style={styles.contentContainer}>
                <Text style={typography.body}>{section.content}</Text>
            </View>
        );
    }

    const [activeSections, setactiveSections] = useState([0])
    return (
        <Accordion
            sections={Questions}
            activeSections={activeSections}
            // renderSectionTitle={this._renderSectionTitle}
            renderHeader={renderHeader}
            renderContent={renderContent}
            onChange={setactiveSections}
            underlayColor='none'
        />
    )
}

export default FAQAccordion
