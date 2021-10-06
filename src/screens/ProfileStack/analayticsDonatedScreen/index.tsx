import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/core';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Header from '../../../components/organisms/header';
import ProfileActionCard from '../../../components/molecules/profileActionCard';
import AltCard from '../../../components/molecules/altCard';
import items from '../../../data/productDetails';
import typography from '../../../constants/typography';
import color from '../../../constants/color';
import styles from './styles';

const AnalyticsDonatedScreen = () => {
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
          typography.h3,
          {color: color.text, paddingTop: 24, paddingLeft: 24},
        ]}>
        Analytics - Donated
      </Text>
      <View style={styles.itemDetailContainer}>
        <AltCard item={items[id]} />
      </View>
      <View style={styles.analyticsContainer}>
        <View style={styles.analyticsSubContainer}>
          <View style={styles.analyticsElement}>
            <Text style={[typography.h2, {color: color.altText}]}>
              24
            </Text>
            <Text
              style={[typography.body, {color: color.altText}]}>
              Views
            </Text>
          </View>
          <View style={styles.analyticsElement}>
            <Text style={[typography.h2, {color: color.altText}]}>
              {items[0].favouritedBy.length}
            </Text>
            <Text
              style={[typography.body, {color: color.altText}]}>
              Likes
            </Text>
          </View>
          <View style={styles.analyticsElement}>
            <Text style={[typography.h2, {color: color.altText}]}>
              23
            </Text>
            <Text
              style={[typography.body, {color: color.altText}]}>
              Shares
            </Text>
          </View>
        </View>
        <View style={styles.requestorContainer}>
          <Text style={[typography.bold, {paddingVertical: 8}]}>
            Donated to Taker
          </Text>
          <ProfileActionCard item={items[id]} actionMessage actionCheck={false} actionClose={false} actionReview={false}/>
        </View>
      </View>
    </View>
  );
};

export default AnalyticsDonatedScreen;
