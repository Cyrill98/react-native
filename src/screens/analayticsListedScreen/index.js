import React from 'react';
import {useRoute} from '@react-navigation/core';
import {View, Text, ScrollView} from 'react-native';
import Header from '../../components/header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/core';
import textStyles from '../../globalstyles/textSyles';
import defaultStyle from '../../globalstyles/defaultStyles';
import AltCard from '../../components/altCard';
import items from '../../data/productDetails';
import styles from './styles';
import ProfileActionCardAlt from '../../components/profileActionCardAlt';

const AnalyticsListedScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {id} = route.params;
  const onBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.root}>
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
        Analytics - Listed Item
      </Text>
      <View style={styles.itemDetailContainer}>
        <AltCard item={items[id]} />
      </View>
      <View style={styles.analyticsContainer}>
        <View style={styles.analyticsSubContainer}>
          <View style={styles.analyticsElement}>
            <Text style={[textStyles.h2, {color: defaultStyle.color.altText}]}>
              24
            </Text>
            <Text
              style={[textStyles.body, {color: defaultStyle.color.altText}]}>
              Views
            </Text>
          </View>
          <View style={styles.analyticsElement}>
            <Text style={[textStyles.h2, {color: defaultStyle.color.altText}]}>
              {items[0].favouritedBy.length}
            </Text>
            <Text
              style={[textStyles.body, {color: defaultStyle.color.altText}]}>
              Likes
            </Text>
          </View>
          <View style={styles.analyticsElement}>
            <Text style={[textStyles.h2, {color: defaultStyle.color.altText}]}>
              23
            </Text>
            <Text
              style={[textStyles.body, {color: defaultStyle.color.altText}]}>
              Shares
            </Text>
          </View>
        </View>
        <View style={styles.requestorContainer}>
          <Text style={[textStyles.bold, {paddingVertical: 8}]}>
            List of Requestors ({items[0].requestedBy.length})
          </Text>
          <View style={{height: 310}}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {items[id].requestedBy.map(item => (
                <ProfileActionCardAlt
                  requestedBy={item}
                  actionCheck
                  actionClose
                  actionMessage
                />
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AnalyticsListedScreen;
