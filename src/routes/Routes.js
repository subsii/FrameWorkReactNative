import * as React from 'react';
import {View, Text, StyleSheet, Animated, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabIndex1 from '../screens/TabIndex1';
import TabIndex2 from '../screens/TabIndex2';
import TabIndex3 from '../screens/TabIndex3';
import TabIndex4 from '../screens/TabIndex4';
import TabIndex5 from '../screens/TabIndex5';
import Footer from '../components/footer';
import Login from '../screens/Login';

const Routes = () => {
  const Stack = createNativeStackNavigator();
  const forSlide = ({current, next, inverted, layouts: {screen}}) => {
    const progress = Animated.add(
      current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
      next
        ? next.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: 'clamp',
          })
        : 0,
    );

    return {
      cardStyle: {
        transform: [
          {
            translateX: Animated.multiply(
              progress.interpolate({
                inputRange: [0, 1, 2],
                outputRange: [
                  screen.width, // Focused, but offscreen in the beginning
                  0, // Fully focused
                  screen.width * -0.3, // Fully unfocused
                ],
                extrapolate: 'clamp',
              }),
              inverted,
            ),
          },
        ],
      },
    };
  };
  return (
    <View
      style={{
        flex: 1,
      }}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#736FF4'} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'Login'}
          screenOptions={{
            headerStyle: {backgroundColor: 'papayawhip'},
            headerShown: false,
            gestureEnabled: true,

            cardStyleInterpolator: forSlide,
            // gestureEnabled: false,
          }}>
          <Stack.Screen
            name="Footer"
            options={{
              title: 'React-Native Ui',
              headerShown: false,
            }}
            component={Footer}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="TabIndex1" component={TabIndex1} />
          <Stack.Screen name="TabIndex2" component={TabIndex2} />
          <Stack.Screen name="TabIndex3" component={TabIndex3} />
          <Stack.Screen name="TabIndex4" component={TabIndex4} />
          <Stack.Screen name="TabIndex5" component={TabIndex5} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Routes;
