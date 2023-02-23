import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  IcHomeOff,
  IcHomeOn,
  IcOrderOff,
  IcOrderOn,
  IcProfileOff,
  IcProfileOn,
} from '../assets';
import {BottomNavigator} from '../components';
import {
  FoodDetail,
  Home,
  Order,
  Profile,
  SignIn,
  SignUp,
  SignUpAddress,
  SplashScreen,
  SuccessSignUp,
} from '../pages';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? <IcHomeOn /> : <IcHomeOff />;
          } else if (route.name === 'Order') {
            iconName = focused ? <IcOrderOn /> : <IcOrderOff />;
          } else if (route.name === 'Profile') {
            iconName = focused ? <IcProfileOn /> : <IcProfileOff />;
          }

          // You can return any component that you like here!
          // return <Ionicons name={iconName} size={size} color={color} />;
          return <BottomNavigator icon={iconName} />;
        },
        tabBarStyle: {
          height: 60,
        },
        // tabBarActiveTintColor: 'tomato',
        // tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{headerShown: false, tabBarShowLabel: false}}
      />
      <Tab.Screen
        name="Order"
        component={Order}
        options={{headerShown: false, tabBarShowLabel: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false, tabBarShowLabel: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpAddress"
        component={SignUpAddress}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SuccessSignUp"
        component={SuccessSignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FoodDetail"
        component={FoodDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
