import React, {useState} from 'react'
import { View, Text, TextInput, ScrollView, Switch } from 'react-native'
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

type uploadScreenProp = StackNavigationProp<RootStackParamList>

const UploadScreen = () => {
    const onPictureChange = (image: ImageOrVideo) => {
        //upload image to server here
    }
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState("")
    const [isPickupEnabled, setIsPickupEnabled] = useState(false)
    const [pickupAddress, setPickupAddress] = useState('')
    const [isDeliveryEnabled, setIsDeliveryEnabled] = useState(false)
    const [deliveryPrice, setDeliveryPrice] = useState('')

    const navigation = useNavigation<uploadScreenProp>();
    const onPublish = () => {
        navigation.navigate('ConfirmUploadScreen')
    }
    return (
        <View style={styles.root}>
            <Text style={[typography.h3, styles.title]}>List Out an Item</Text>
            <ChooseImage
                // onChange={onPictureChange}
                // source={require('./')}
            />
            <ScrollView 
                style={styles.detailContainer}
                showsVerticalScrollIndicator={false}>
                <View style={styles.inputContainer}>
                    <Text style={[typography.bold, {marginBottom: 8}]}>Category</Text>
                    <DropdownPicker options={Categories} defaultText={"Choose a category"}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={typography.bold}>Title</Text>
                    <TextInput 
                        style={[styles.inputTitle]} 
                        placeholder={"What would you like to call the item?"}
                        value={title}
                        onChangeText={setTitle}
                        /> 
                </View>
                <View style={styles.inputContainer}>
                    <Text style={typography.bold}>Description</Text>
                    <TextInput 
                        style={styles.inputDescription} 
                        placeholder={"Describe in details what you are giving away..."}
                        value={description}
                        onChangeText={setDescription}
                        multiline
                        /> 
                </View>
                <View style={styles.inputContainer}>
                    <Text style={[typography.bold, {marginBottom: 8}]}>Condition</Text>
                    <OptionButton options={['New', 'Used']}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={[typography.bold, {marginBottom: 8}]}>Quantity</Text>
                    <OptionButton options={['Single', 'Bulk']}/>
                    {<TextInput 
                        style={[styles.inputTitle]} 
                        placeholder={"If bulk, how many items are in the bulk?"}
                        value={quantity}
                        onChangeText={setQuantity}
                        />
                    }
                </View>
                <View style={styles.inputContainer}>
                    <Text style={[typography.bold, {marginBottom: 8}]}>Logistics</Text> 
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
                    placeholder={"Set delivery price"}
                    value={deliveryPrice}
                    onChangeText={setDeliveryPrice}
                    />
                    }
                </View>
                <View>
                    <CommonButton primaryText primaryBackground buttonText="Publish" onPress={onPublish}/>
                </View>
            </ScrollView>
        </View>
    )
}

export default UploadScreen
