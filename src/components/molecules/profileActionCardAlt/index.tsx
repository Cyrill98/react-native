import React, {useState} from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { RootStackParamList } from '../../../navigation/rootStackParam'
import styles from './styles'
import typography from '../../../constants/typography';
import PopupModal from '../popupModal';
import CommonButton from '../../atoms/button';

interface ItemOverviewProps {
    requestedBy: string;
    actionCheck: boolean,
    actionClose: boolean,
    actionMessage: boolean,
    actionReview: boolean,
}

type homeScreenProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

const ProfileActionCardAlt = (props: ItemOverviewProps) => {
    const navigation = useNavigation<homeScreenProp>();
    const [chooseTakerPopup, setChooseTakerPopup] = useState(false)
    const [rejectTakerPopup, setRejectTakerPopup] = useState(false)
    //const item = props.item;
    const onChoose = () => {
        setChooseTakerPopup(true)
    };
    const onConfirmChoose = () => {
    };
    const onReject = () => {
        setRejectTakerPopup(true)
    };
    const onConfirmReject = () => {
    };
    const onRequestorDetail = () => {
        navigation.navigate('RequestorDetailsScreen')
    };
    return (
        <Pressable style={styles.root} onPress={onRequestorDetail}>
            <View style={styles.summaryContainer}>
                <View style={styles.profileContainer}>
                    <View style={styles.detailContainer}>
                        {/* Taker */}
                        <Text style={typography.subtitle} numberOfLines={1}>{props.requestedBy} </Text>
                    </View>
                </View>
                <View style={styles.actionContainer}>
                    {!!props.actionCheck &&
                        <Ionicons name= "checkmark" size={24} style={{paddingLeft: 4}} onPress={onChoose}/>
                    }
                    {!!props.actionClose &&
                        <Ionicons name= "close-outline" size={26} style={{paddingLeft: 4}} onPress={onReject}/>
                    }
                    {!!props.actionReview &&
                        <MaterialIcons name= "rate-review" size={22} style={{paddingLeft: 4}}/>
                    }
                    {!!props.actionMessage &&
                        <Ionicons name= "chatbox-ellipses-outline" size={22} style={{paddingLeft: 4}}/>
                    }
                </View>
            </View>
            <PopupModal 
            modalSubtitle="Are you sure you want to accept this taker? The requestor will be notified they have been selected."
            isVisible={chooseTakerPopup}
            button1={ <CommonButton primaryText primaryBackground buttonText="Yes. I am sure." onPress={onConfirmChoose}/> }
            button2={ <CommonButton primaryText={false} primaryBackground={false} buttonText="No. Please Cancel." onPress={() => setChooseTakerPopup(false)}/> }
            />
            <PopupModal 
            modalSubtitle="Are you sure you want to reject this taker? The taker will be notified they have not been selected."
            isVisible={rejectTakerPopup}
            button1={ <CommonButton primaryText primaryBackground buttonText="Yes. I am sure." onPress={onConfirmChoose}/> }
            button2={ <CommonButton primaryText={false} primaryBackground={false} buttonText="No. Please Cancel." onPress={() => setRejectTakerPopup(false)}/> }
            />
        </Pressable>

    )
}

export default ProfileActionCardAlt
