/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
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

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Button
        title="Go to John's profile"
        onPress={() => navigation.navigate('Profile', {name: 'John'})}
      />
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
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
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [enabled, setEnabled] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
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
