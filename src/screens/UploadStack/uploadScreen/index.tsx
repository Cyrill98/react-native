import React, {useState} from 'react'
import { View, Text, TextInput, ScrollView, Switch, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import { ImageOrVideo } from 'react-native-image-crop-picker'

import { RootStackParamList } from '../../../navigation/rootStackParam'
import DropdownPicker from '../../../components/atoms/dropdownPicker'
import OptionButton from '../../../components/atoms/segmentedControls'
import CommonButton from '../../../components/atoms/button'
import ChooseImage from '../../../components/molecules/imagePicker'
import Categories from '../../../data/categories'
import typography from '../../../constants/typography'
import styles from './styles'
import color from '../../../constants/color'
import { RadioButton } from 'react-native-paper'

type uploadScreenProp = StackNavigationProp<RootStackParamList>

const UploadScreen = () => {
    const onPictureChange = (image: ImageOrVideo) => {
        //upload image to server here
    }
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [condition, setCondition] = useState('')
    const [isConditionChecked, setIsConditionChecked] = useState('')
    const [quantity, setQuantity] = useState('')
    const [itemQuantity, setItemQuantity] = useState('')
    const [isPickupEnabled, setIsPickupEnabled] = useState(false)
    const [pickupAddress, setPickupAddress] = useState('')
    const [isDeliveryEnabled, setIsDeliveryEnabled] = useState(false)
    const [deliveryPrice, setDeliveryPrice] = useState('')

    const navigation = useNavigation<uploadScreenProp>();
    const onPublish = () => {
        if(!title || !description || !condition || !quantity || (isPickupEnabled === false && isDeliveryEnabled === false) || (isPickupEnabled === true && !pickupAddress) || (isDeliveryEnabled === true && !deliveryPrice)){
            Alert.alert('Please fill in all the fields and complete all options category.')
            return
        } else
        navigation.navigate('ConfirmUploadScreen');
        setTitle("")
        setDescription("")
        setCondition("")
        setQuantity("")
        setItemQuantity("")
        setIsPickupEnabled(false)
        setPickupAddress("")
        setIsDeliveryEnabled(false)
        setDeliveryPrice("")
    }
    return (
        <View style={styles.root}>
            <Text style={[typography.h3, styles.title]}>Donate Item</Text>
            <ChooseImage
                // onChange={onPictureChange}
                // source={require('./')}
            />
            <ScrollView 
                style={styles.detailContainer}
                showsVerticalScrollIndicator={false}>
                <View style={styles.inputContainer}>
                    <Text style={[typography.bold, {marginVertical: 8}]}>Category</Text>
                    <DropdownPicker options={Categories} defaultText={"Choose a category"}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={[typography.bold, {marginVertical: 8}]}>Title</Text>
                    <TextInput 
                        style={[styles.inputTitle]} 
                        placeholder={"What would you like to call the item?"}
                        value={title}
                        onChangeText={setTitle}
                        /> 
                </View>
                <View style={styles.inputContainer}>
                    <Text style={[typography.bold, {marginVertical: 8}]}>Description</Text>
                    <TextInput 
                        style={styles.inputDescription} 
                        placeholder={"Describe in details what you are giving away..."}
                        value={description}
                        onChangeText={setDescription}
                        multiline
                        /> 
                </View>
                <View style={styles.inputContainer}>
                    <Text style={[typography.bold, {marginVertical: 8}]}>Condition</Text>
                    <RadioButton.Group onValueChange={condition => setCondition(condition)} value={condition}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <RadioButton.Item label="New" value="New" 
                                style={condition === "New" ? styles.activeRadio: styles.inactiveRadio}/>
                            <RadioButton.Item label="Used" value="Used" 
                                style={ condition === "Used" ? styles.activeRadio: styles.inactiveRadio}/>
                        </View>
                    </RadioButton.Group>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={[typography.bold, {marginVertical: 8}]}>Quantity</Text>
                    <RadioButton.Group onValueChange={quantity => setQuantity(quantity)} value={quantity}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <RadioButton.Item label="Single" value="Single" 
                                style={quantity === "Single" ? styles.activeRadio: styles.inactiveRadio}/>
                            <RadioButton.Item label="Bulk" value="Bulk" 
                                style={quantity === "Bulk" ? styles.activeRadio: styles.inactiveRadio}/>
                        </View>
                        {quantity === "Bulk" && 
                        <TextInput 
                        style={[styles.inputTitle]} 
                        placeholder={"How many items are in the bulk?"}
                        value={itemQuantity}
                        onChangeText={setItemQuantity}
                        />}
                    </RadioButton.Group>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={[typography.bold, {marginVertical: 8}]}>Logistics</Text> 
                    <View style={styles.switchContainer}>
                        <Text style={typography.body}>Pickup</Text>
                        <Switch
                            trackColor={{false: color.subtleText, true: color.success}}
                            thumbColor={isPickupEnabled? "white" : "#f4f3f4"}
                            onValueChange={() => setIsPickupEnabled(previousState => !previousState)}
                            value={isPickupEnabled}
                            style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
                        />
                    </View>
                    {isPickupEnabled && 
                    <TextInput 
                    style={[styles.inputTitle]} 
                    placeholder={"Set pickup location"}
                    value={pickupAddress}
                    onChangeText={setPickupAddress}
                    />
                    }
                    <View style={styles.switchContainer}>
                        <Text style={typography.body}>Delivery</Text>
                        <Switch
                            trackColor={{false: color.subtleText, true: color.success}}
                            thumbColor={isDeliveryEnabled? "white" : "#f4f3f4"}
                            onValueChange={() => setIsDeliveryEnabled(previousState => !previousState)}
                            value={isDeliveryEnabled}
                            style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
                        />
                    </View>
                    {isDeliveryEnabled && 
                    <TextInput 
                    style={[styles.inputTitle]} 
                    placeholder={"Set delivery cost that taker needs to bare."}
                    value={deliveryPrice}
                    onChangeText={setDeliveryPrice}
                    />
                    }
                </View>
                <View style={{marginVertical: 16}}>
                    <CommonButton primaryText primaryBackground buttonText="Publish" onPress={onPublish}/>
                </View>
            </ScrollView>
        </View>
    )
}

export default UploadScreen
