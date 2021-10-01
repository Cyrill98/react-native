import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/core';
import textStyles from '../../globalstyles/textSyles';
import defaultStyle from '../../globalstyles/defaultStyles';

const EditItemDetailsScreen = () => {
  const navigation = useNavigation();
  const onBack = () => {
    navigation.goBack();
  };

  return (
    <View>
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
      />
      <Text
        style={[
          textStyles.h3,
          {color: defaultStyle.color.text, paddingTop: 24, paddingLeft: 24},
        ]}>
        Edit Details
      </Text>
    </View>
  );
};

export default EditItemDetailsScreen;
