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

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        image={FoodDummy1}
        onPress={() => navigation.navigate('FoodDetail')}
        type="in-progress"
        name="Avosalado"
        items={3}
        price="8.000.000"
      />
      <ItemListFood
        image={FoodDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
        type="in-progress"
        name="Kopi Kudda"
        items={10}
        price="450.000"
      />
      <ItemListFood
        image={FoodDummy3}
        onPress={() => navigation.navigate('FoodDetail')}
        type="in-progress"
        name="Es Tong-Tong"
        items={2}
        price="900.500"
      />
      <ItemListFood
        image={FoodDummy4}
        onPress={() => navigation.navigate('FoodDetail')}
        type="in-progress"
        name="Bwang Puttie"
        items={10}
        price="450.000"
      />
    </ScrollView>
  );
};

const PastOrders = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        onPress={() => navigation.navigate('FoodDetail')}
        image={FoodDummy1}
        type="past-orders"
        name="Avosalado"
        items={3}
        price="8.000.000"
        date="Jun 12, 14:00"
        status="Cancelled"
      />
      <ItemListFood
        onPress={() => navigation.navigate('FoodDetail')}
        image={FoodDummy4}
        type="past-orders"
        name="Bwang Puttie"
        items={10}
        price="450.000"
        date="Jun 12, 14:00"
        status="Cancelled"
      />
      <ItemListFood
        onPress={() => navigation.navigate('FoodDetail')}
        image={FoodDummy2}
        type="past-orders"
        name="Kopi Kudda"
        items={10}
        price="450.000"
        date="Jun 12, 14:00"
        status="Cancelled"
      />
    </ScrollView>
  );
};

const renderScene = SceneMap({
  1: InProgress,
  2: PastOrders,
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

const OrderTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Orders'},
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

export default OrderTabSection;

const styles = StyleSheet.create({});
