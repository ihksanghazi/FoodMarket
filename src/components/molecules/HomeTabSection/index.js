import React from 'react';
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

const NewTaste = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        image={FoodDummy1}
        onPress={() => navigation.navigate('FoodDetail')}
        title="Cherry Healthy"
        price="50.000"
        rating
      />
      <ItemListFood
        image={FoodDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
        title="Avosalado"
        price="55.000"
        rating
      />
      <ItemListFood
        image={FoodDummy3}
        onPress={() => navigation.navigate('FoodDetail')}
        title="Kari Sleman"
        price="60.000"
        rating
      />
      <ItemListFood
        image={FoodDummy4}
        onPress={() => navigation.navigate('FoodDetail')}
        title="Kopi Kudda"
        price="65.000"
        rating
      />
    </ScrollView>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        onPress={() => navigation.navigate('FoodDetail')}
        image={FoodDummy1}
        title="Cherry Healthy"
        price="50.000"
        rating
      />
      <ItemListFood
        onPress={() => navigation.navigate('FoodDetail')}
        image={FoodDummy4}
        title="Kopi Kudda"
        price="65.000"
        rating
      />
      <ItemListFood
        onPress={() => navigation.navigate('FoodDetail')}
        image={FoodDummy2}
        title="Avosalado"
        price="55.000"
        rating
      />
    </ScrollView>
  );
};

const Recommended = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        onPress={() => navigation.navigate('FoodDetail')}
        image={FoodDummy4}
        title="Kopi Kudda"
        price="65.000"
        rating
      />
      <ItemListFood
        onPress={() => navigation.navigate('FoodDetail')}
        image={FoodDummy3}
        title="Kari Sleman"
        price="60.000"
        rating
      />
      <ItemListFood
        onPress={() => navigation.navigate('FoodDetail')}
        image={FoodDummy2}
        title="Avosalado"
        price="55.000"
        rating
      />
      <ItemListFood
        onPress={() => navigation.navigate('FoodDetail')}
        image={FoodDummy1}
        title="Cherry Healthy"
        price="50.000"
        rating
      />
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
