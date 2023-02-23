import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Rating from '../Rating';

const ItemListFood = ({image, title, price}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 8,
        alignItems: 'center',
      }}>
      <Image
        source={image}
        style={{
          width: 60,
          height: 60,
          borderRadius: 8,
          overflow: 'hidden',
          marginRight: 12,
        }}
      />
      <View style={{flex: 1}}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Poppins-Reqular',
            color: '#020202',
          }}>
          {title}
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontFamily: 'Poppins-Regular',
            color: '#8D92A3',
          }}>
          Rp. {price}
        </Text>
      </View>
      <Rating />
    </View>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({});
