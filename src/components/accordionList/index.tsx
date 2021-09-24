import React, {useState} from 'react'
import { View, Text } from 'react-native'
import Accordion from 'react-native-collapsible/Accordion'
import Questions from '../../data/FAQs'
import defaultStyle from '../../globalstyles/defaultStyles'
import textStyles from '../../globalstyles/textSyles'
import styles from './styles'

const FAQAccordion = () => {

    // const Sections = [
    //     {
    //         title: "first",
    //         content: "lorem ipsum"
    //     }
    // ]

    const state = {
        activeSections: [],
    }

    const renderHeader = (section) => {
        return (
            <View style={styles.headerContainer}>
                <Text style={textStyles.subtitle}>{section.title}</Text>
            </View>
        );
    }

    const renderContent = (section) => {
        return (
            <View style={styles.contentContainer}>
                <Text style={textStyles.body}>{section.content}</Text>
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
