import React, {useState} from 'react'
import { View, Text, TextInput, ScrollView } from 'react-native'
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

type uploadScreenProp = StackNavigationProp<RootStackParamList>

const UploadScreen = () => {
    const onPictureChange = (image: ImageOrVideo) => {
        //upload image to server here
    }
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const options = ["Option 1", "Option 2"]

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
                </View>
                <View style={styles.inputContainer}>
                    <Text style={[typography.bold, {marginBottom: 8}]}>Logistics</Text> 
                </View>
                <View>
                    <CommonButton primaryText primaryBackground buttonText="Publish" onPress={onPublish}/>
                </View>
            </ScrollView>
        </View>
    )
}

export default UploadScreen
