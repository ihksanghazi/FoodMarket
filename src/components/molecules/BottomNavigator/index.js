import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BottomNavigator = ({icon}) => {
  return (
    <View>
      <View style={{paddingTop: 15, paddingBottom: 13}}>{icon}</View>
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({});
