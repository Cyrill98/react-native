import React, {useState} from 'react'
import { View, Text, TextInput, ScrollView } from 'react-native'
import { ImageOrVideo } from 'react-native-image-crop-picker'
import { SegmentedControls } from 'react-native-radio-buttons'


import ChooseImage from '../../components/imagePicker'
import textStyles from '../../globalstyles/textSyles'
import styles from '../uploadScreen/styles.ios'
import DropdownPicker from '../../components/dropdownPicker'
import Categories from '../../data/categories'
import OptionButton from '../../components/segmentedControls'

const UploadScreen = () => {
    const onPictureChange = (image: ImageOrVideo) => {
        //upload image to server here
    }
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const options = ["Option 1", "Option 2"]
    return (
        <View style={styles.root}>
            <Text style={[textStyles.h3, styles.title]}>List Out an Item</Text>
            <ChooseImage
                // onChange={onPictureChange}
                // source={require('./')}
            />
            <ScrollView 
                style={styles.detailContainer}
                showsVerticalScrollIndicator={false}>
                <View style={styles.inputContainer}>
                    <Text style={[textStyles.bold, {marginBottom: 8}]}>Category</Text>
                    <DropdownPicker options={Categories} defaultText={"Choose a category"}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={textStyles.bold}>Title</Text>
                    <TextInput 
                        style={[styles.inputTitle]} 
                        placeholder={"What would you like to call the item?"}
                        value={title}
                        onChangeText={setTitle}
                        /> 
                </View>
                <View style={styles.inputContainer}>
                    <Text style={textStyles.bold}>Description</Text>
                    <TextInput 
                        style={styles.inputDescription} 
                        placeholder={"Describe in details what you are giving away..."}
                        value={description}
                        onChangeText={setDescription}
                        multiline
                        /> 
                </View>
                <View style={styles.inputContainer}>
                    <Text style={[textStyles.bold, {marginBottom: 8}]}>Condition</Text>
                    <OptionButton options={['New', 'Used']}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={[textStyles.bold, {marginBottom: 8}]}>Quantity</Text>
                    <OptionButton options={['Single', 'Bulk']}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={[textStyles.bold, {marginBottom: 8}]}>Logistics</Text>
                    
                </View>
            </ScrollView>
            
        </View>
    )
}

export default UploadScreen
