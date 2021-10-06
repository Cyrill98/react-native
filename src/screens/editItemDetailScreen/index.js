import React, {useState} from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';
import Header from '../../components/header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/core';
import textStyles from '../../globalstyles/textSyles';
import defaultStyle from '../../globalstyles/defaultStyles';
import styles from './styles';
import DropdownPicker from '../../components/dropdownPicker';
import categories from '../../data/categories';
import OptionButton from '../../components/segmentedControls';
import CommonButton from '../../components/button';

const EditItemDetailsScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
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
          textStyles.h3,
          {color: defaultStyle.color.text, paddingTop: 24, paddingLeft: 24},
        ]}>
        Edit Details
      </Text>
      <View style={styles.detailContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.inputContainer}>
          <Text style={[textStyles.bold, {marginBottom: 8}]}>Category</Text>
          <DropdownPicker
            options={categories}
            defaultText={'Choose a category'}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={textStyles.bold}>Title</Text>
          <TextInput
            style={[styles.inputTitle]}
            placeholder={'What would you like to call the item?'}
            value={title}
            onChangeText={setTitle}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={textStyles.bold}>Description</Text>
          <TextInput
            style={styles.inputDescription}
            placeholder={'Describe in details what you are giving away...'}
            value={description}
            onChangeText={setDescription}
            multiline
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={[textStyles.bold, {marginBottom: 8}]}>Condition</Text>
          <OptionButton options={['New', 'Used']} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={[textStyles.bold, {marginBottom: 8}]}>Quantity</Text>
          <OptionButton options={['Single', 'Bulk']} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={[textStyles.bold, {marginBottom: 8}]}>Logistics</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default EditItemDetailsScreen;
