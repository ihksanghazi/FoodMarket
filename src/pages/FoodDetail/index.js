import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {FoodDummy1, IcBackWhite} from '../../assets';
import {Button, Counter, Number, Rating} from '../../components';

const FoodDetail = ({navigation, route}) => {
  const {name, picturePath, description, ingredients, rate, price} =
    route.params;
  const [totalItem, setTotalItem] = useState(1);
  const onCounterChange = value => {
    setTotalItem(value);
  };
  return (
    <View style={styles.page}>
      <ImageBackground source={{uri: picturePath}} style={styles.cover}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>{name}</Text>
              <Rating number={rate} />
            </View>
            <Counter onValueChange={onCounterChange} />
          </View>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.label}>Ingredients:</Text>
          <Text style={styles.description}>{ingredients}</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.labelTotal}>Total Price:</Text>
            <Number number={totalItem * price} style={styles.priceTotal} />
            {/* <Text style={styles.priceTotal}>IDR {totalItem * price}</Text> */}
          </View>
          <View style={styles.button}>
            <Button
              text="Order Now"
              onPress={() => navigation.navigate('OrderSummary')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  page: {flex: 1},
  cover: {
    height: 330,
    paddingTop: 26,
    paddingLeft: 22,
  },
  back: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'white',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: -40,
    paddingTop: 26,
    paddingHorizontal: 16,
    flex: 1,
  },
  mainContent: {flex: 1},
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Reqular',
    color: '#020202',
  },
  description: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 4,
  },
  footer: {
    flexDirection: 'row',
    paddingVertical: 16,
    alignItems: 'center',
  },
  priceContainer: {flex: 1},
  labelTotal: {fontSize: 13, fontFamily: 'Poppins-Regular', color: '#8D92A3'},
  priceTotal: {fontSize: 18, fontFamily: 'Poppin-Regular', color: '#020202'},
  button: {width: 163},
});
