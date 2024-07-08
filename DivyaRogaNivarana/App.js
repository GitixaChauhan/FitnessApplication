/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './Screens/Home';
import { Detail } from './Screens/Detail';
import { LoginPage } from './Screens/LoginPage';
import { SignUp } from './Screens/SignUp';
import { ForgetPasswordScreen } from './Screens/ForgetPasswordScreen';
import { Provider } from 'react-redux';
import store from './Screens/redux/store';
import { LoginForm} from './Screens/LoginForm';


const Stack = createNativeStackNavigator();

const App = () => {

 return (
  <Provider store={store}>
     <NavigationContainer>
      <Stack.Navigator
    // screenOptions={{headerShown: false}}
      >
        <Stack.Screen name='LoginPage' component={LoginPage} options={{headerShown: false}} />
        <Stack.Screen name='Home' component={Home} options={{
              headerBackVisible: false,
              headerTitle: 'DivyaRogaNivarana', // Set the title directly
              headerTitleAlign: 'left',
              headerLeft: null,
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
                //textAlign: 'left', // Align the title to the left
              },
          }}/>
        <Stack.Screen name='Detail' component={Detail} options={{
              headerBackTitleVisible: false, 
              title: "DivyaRogaNivarana",
              headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold'
              },
          }} />
        <Stack.Screen name='SignUp' component={SignUp}  options={{ headerBackTitleVisible: false, title: ""}}/>
        <Stack.Screen name='ForgetPasswordScreen' component={ForgetPasswordScreen} options={{headerBackTitleVisible: false, title: ""}} />
        </Stack.Navigator>
     </NavigationContainer>
     </Provider>
 )
 };

export default App;
