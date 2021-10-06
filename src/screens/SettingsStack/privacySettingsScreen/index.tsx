import React, {useState} from 'react'
import { View, ScrollView, Text } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Header from '../../../components/organisms/header'
import ToggleSwitch from 'toggle-switch-react-native'
import color from '../../../constants/color'
import typography from '../../../constants/typography'
import styles from './styles'

const PrivacySettingsScreen = () => {
    const navigation = useNavigation();
    const onBack = () => {
        navigation.goBack()
    }
    const [allAccessPermission, setallAccessPermission] = useState(false)
    const [locationAP, setLocationAP] = useState(false)
    const [contactsAP, setcontactsAP] = useState(false)
    const [microphoneAP, setmicrophoneAP] = useState(false)
    const [photosAP, setphotosAP] = useState(false)
    const [cameraAP, setcameraAP] = useState(false)
    const [allInformationSharing, setallInformationSharing] = useState(false)
    const [interestIS, setinterestIS] = useState(false)
    const [locationIS, setlocationIS] = useState(false)
    const [demographicIS, setdemographicIS] = useState(false)
    return (
        <ScrollView style={styles.root}>
            <Header
                SearchBar={false}
                Icon1={ <Ionicons name="chevron-back" size={24} style={{marginLeft: 0}} onPress={onBack}/>}
            />
            <Text style={[typography.h3, {color:color.text, paddingTop: 24, paddingLeft: 24}]}>Privacy Settings</Text>
            <View style={styles.detailContainer}>
                <View style={styles.subContainer}>
                    <Text style={typography.bold}>Access Permission</Text>
                    {/* <ToggleSwitch
                        isOn={allAccessPermission}
                        onColor="green"
                        offColor={color.backgroundAccent}
                        labelStyle={{ color: "black", fontWeight: "900" }}
                        size='medium'
                        onToggle={allAccessPermission => {
                                setAllAccessPermission(allAccessPermission)
                        }}
                    /> */}
                </View>
                <View style={styles.subInnerContainer}>
                    <View style={styles.items}>
                        <Text style={typography.body}>Location</Text>
                        <ToggleSwitch
                            isOn={locationAP}
                            onColor="green"
                            offColor={color.backgroundAccent}
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size='medium'
                            onToggle={locationAP => setLocationAP(locationAP)}
                        />
                    </View>
                    <View style={styles.items}>
                        <Text style={typography.body}>Contacts</Text>
                        <ToggleSwitch
                            isOn={contactsAP}
                            onColor="green"
                            offColor={color.backgroundAccent}
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size='medium'
                            onToggle={contactsAP => {setcontactsAP(contactsAP)}}
                        />
                    </View>
                    <View style={styles.items}>
                        <Text style={typography.body}>Microphone</Text>
                        <ToggleSwitch
                            isOn={microphoneAP}
                            onColor="green"
                            offColor={color.backgroundAccent}
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size='medium'
                            onToggle={microphoneAP => {setmicrophoneAP(microphoneAP)}}
                        />
                    </View>
                    <View style={styles.items}>
                        <Text style={typography.body}>Photos</Text>
                        <ToggleSwitch
                            isOn={photosAP}
                            onColor="green"
                            offColor={color.backgroundAccent}
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size='medium'
                            onToggle={photosAP => {setphotosAP(photosAP)}}
                        />
                    </View>
                    <View style={styles.items}>
                        <Text style={typography.body}>Camera</Text>
                        <ToggleSwitch
                            isOn={cameraAP}
                            onColor="green"
                            offColor={color.backgroundAccent}
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size='medium'
                            onToggle={cameraAP => {setcameraAP(cameraAP)}}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.detailContainer}>
                <View style={styles.subContainer}>
                    <Text style={typography.bold}>Information Sharing</Text>
                    {/* <ToggleSwitch
                        isOn={allInformationSharing}
                        onColor="green"
                        offColor={color.backgroundAccent}
                        labelStyle={{ color: "black", fontWeight: "900" }}
                        size='medium'
                        onToggle={allInformationSharing => {setAllInformationSharing(allInformationSharing)}}
                    /> */}
                </View>
                <View style={styles.subInnerContainer}>
                    <View style={styles.items}>
                        <Text style={typography.body}>Interest-based</Text>
                        <ToggleSwitch
                            isOn={interestIS}
                            onColor="green"
                            offColor={color.backgroundAccent}
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size='medium'
                            onToggle={interestIS => {setinterestIS(interestIS)}}
                        />
                    </View>
                    <View style={styles.items}>
                        <Text style={typography.body}>Location-based</Text>
                        <ToggleSwitch
                            isOn={locationIS}
                            onColor="green"
                            offColor={color.backgroundAccent}
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size='medium'
                            onToggle={locationIS => {setlocationIS(locationIS)}}
                        />
                    </View>
                    <View style={styles.items}>
                        <Text style={typography.body}>Demographic-based</Text>
                        <ToggleSwitch
                            isOn={demographicIS}
                            onColor="green"
                            offColor={color.backgroundAccent}
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size='medium'
                            onToggle={demographicIS => {setdemographicIS(demographicIS)}}
                        />
                    </View>
                </View>
            </View>
            
        </ScrollView>
    )
}

export default PrivacySettingsScreen
