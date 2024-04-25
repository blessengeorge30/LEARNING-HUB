import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Mobile from './screens/Mobile';
import OTPscreen from './screens/OTPscreen';
import Register from './screens/Register';
import CollegeScreen from './screens/CollegeScreen';
import HomeScreen from './Bottomnavigation/HomeScreen';
import Flexbox from './screens/Flexbox';
import Native from './screens/Native';
import Flutter from './screens/Flutter';
import UItrends from './screens/UItrends';
import KSRTC from './screens/KSRTC';
import Businfo from './screens/Businfo';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Mobile"
          component={Mobile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OTPscreen"
          component={ OTPscreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Register"
          component={ Register}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="CollegeScreen"
          component={CollegeScreen}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Flexbox"
          component={Flexbox}
          options={{ headerShown: false }}
        />
           <Stack.Screen
          name="Flutter"
          component={Flutter}
          options={{ headerShown: false }}
        /> 
           <Stack.Screen
          name="Native"
          component={Native}
          options={{ headerShown: false }}
        />  
             <Stack.Screen
          name="UItrends"
          component={UItrends}
          options={{ headerShown: false }}
        />  
            <Stack.Screen
          name="KSRTC"
          component={KSRTC}
          options={{ headerShown: false }}
        />  
          <Stack.Screen
          name="Businfo"
          component={Businfo}
          options={{ headerShown: false }}
        />  
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
// import React from 'react'
// import { Text, View } from 'react-native'

// const Login =()=>{
//     return(
//         <View>
//             <Text>HI</Text>
//         </View>
//     )
// }
// export default Login;