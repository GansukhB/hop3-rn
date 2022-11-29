/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import type {Node} from 'react';

import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  Button,
  Switch,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyHome() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'settings' : 'settings';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={30} color="#900" />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{name: 'Bat'}}
      />
    </Tab.Navigator>
  );
}

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Button
        title="Go to John's profile"
        onPress={() => navigation.navigate('Profile', {name: 'John'})}
      />
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Text>
        <Icon name="rocket" size={30} color="#900" />
      </Text>
    </View>
  );
};
const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};
const Login = ({navigation, route}) => {
  return <Text>Login</Text>;
};

const App: () => Node = () => {
  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <NavigationContainer>
        <MyHome />
      </NavigationContainer>

      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={MyHome}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer> */}
    </>
    // <View style={backgroundStyle}>
    //   <Text>Hello Android</Text>
    //   <Image
    //     source={{
    //       uri: 'https://www.datocms-assets.com/45470/1631026680-logo-react-native.png',
    //     }}
    //     style={{width: 50, height: 50}}></Image>
    //   <TextInput
    //     placeholder="Enter text"
    //     style={{borderColor: '#000000'}}></TextInput>
    //   <Switch
    //     trackColor={{true: 'green', false: 'gray'}}
    //     onValueChange={() => setEnabled(!enabled)}
    //     value={enabled}></Switch>
    //   <Button onPress={() => alert('Hello')} title="Hello" />
    // </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
