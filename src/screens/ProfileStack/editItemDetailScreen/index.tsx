import React, {useState} from 'react';
import {View, Text, ScrollView, TextInput, Switch} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RadioButton } from 'react-native-paper';

import Header from '../../../components/organisms/header';
import DropdownPicker from '../../../components/atoms/dropdownPicker';
import OptionButton from '../../../components/atoms/segmentedControls';
import categories from '../../../data/categories';
import typography from '../../../constants/typography';
import color from '../../../constants/color';
import styles from './styles';

const EditItemDetailsScreen = () => {
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
  const navigation = useNavigation();
  const onBack = () => {
    navigation.goBack();
  };
  const onPublish = () => {};

  return (
    <ScrollView style={styles.root}>
      <Header
        SearchBar={false}
        Icon1={
          <Ionicons
            name="chevron-back"
            size={24}
            style={{marginLeft: 0}}
            onPress={onBack}
          />
        }
        Icon4={
          <Ionicons
            name="checkmark-sharp"
            size={24}
            style={{marginLeft: 0}}
            onPress={onPublish}
          />
        }
      />
      <Text
        style={[
          typography.h3,
          {color: color.text, paddingTop: 24, paddingLeft: 24},
        ]}>
        Edit Details
      </Text>
      <View style={styles.detailContainer}>
        <View style={styles.inputContainer}>
          <Text style={[typography.bold, {marginBottom: 8}]}>Category</Text>
          <DropdownPicker
            options={categories}
            defaultText={'Choose a category'}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={typography.bold}>Title</Text>
          <TextInput
            style={[styles.inputTitle]}
            placeholder={'What would you like to call the item?'}
            value={title}
            onChangeText={setTitle}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={typography.bold}>Description</Text>
          <TextInput
            style={styles.inputDescription}
            placeholder={'Describe in details what you are giving away...'}
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
                    placeholder={"Set delivery price"}
                    value={deliveryPrice}
                    onChangeText={setDeliveryPrice}
                    />
                    }
                </View>
      </View>
    </ScrollView>
  );
};

export default EditItemDetailsScreen;
