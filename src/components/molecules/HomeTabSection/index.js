import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import ItemListFood from '../ItemListFood';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getFoodDataByTypes} from '../../../redux/action';

const NewTaste = () => {
  const navigation = useNavigation();
  const {newTaste} = useSelector(state => state.homeReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFoodDataByTypes('new_food'));
  }, []);
  return (
    <ScrollView style={{paddingTop: 8, paddingHorizontal: 24}}>
      {newTaste.map(item => {
        return (
          <ItemListFood
            key={item.id}
            type="product"
            image={{uri: item.picturePath}}
            name={item.name}
            rating={item.rate}
            price={item.price}
            onPress={() => navigation.navigate('FoodDetail')}
          />
        );
      })}
    </ScrollView>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  const {popular} = useSelector(state => state.homeReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFoodDataByTypes('popular'));
  }, []);
  return (
    <ScrollView style={{paddingTop: 8, paddingHorizontal: 24}}>
      {popular.map(item => {
        return (
          <ItemListFood
            key={item.id}
            type="product"
            image={{uri: item.picturePath}}
            name={item.name}
            rating={item.rate}
            price={item.price}
            onPress={() => navigation.navigate('FoodDetail')}
          />
        );
      })}
    </ScrollView>
  );
};

const Recommended = () => {
  const navigation = useNavigation();
  const {recommended} = useSelector(state => state.homeReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFoodDataByTypes('recommended'));
  }, []);
  return (
    <ScrollView style={{paddingTop: 8, paddingHorizontal: 24}}>
      {recommended.map(item => {
        return (
          <ItemListFood
            key={item.id}
            type="product"
            image={{uri: item.picturePath}}
            name={item.name}
            rating={item.rate}
            price={item.price}
            onPress={() => navigation.navigate('FoodDetail')}
          />
        );
      })}
    </ScrollView>
  );
};

const renderScene = SceneMap({
  1: NewTaste,
  2: Popular,
  3: Recommended,
});

const renderTabBar = props => {
  return (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: '#020202',
        height: 3,
      }}
      style={{
        backgroundColor: 'white',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomColor: '#F2F2F2',
        borderBottomWidth: 1,
      }}
      renderLabel={({route, focused, color}) => (
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            color: focused ? '#020202' : '#8D92A3',
          }}>
          {route.title}
        </Text>
      )}
    />
  );
};

const HomeTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
  ]);
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({});
