import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Platform,
  Pressable,
  Image,
} from 'react-native';
import React from 'react';
import {
  SvgIconHome_1,
  SvgIconHome_2,
  SvgIconKnowledge_1,
  SvgIconKnowledge_2,
  SvgIconHA_1,
  SvgIconHA_2,
  SvgIconChallenge_1,
  SvgIconChallenge_2,
  SvgIconReward_1,
  SvgIconReward_2,
} from '../image/svg/SvgIconTabbar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabIndex1 from '../screens/TabIndex1';
import TabIndex2 from '../screens/TabIndex2';
import TabIndex3 from '../screens/TabIndex3';
import TabIndex4 from '../screens/TabIndex4';
import TabIndex5 from '../screens/TabIndex5';

const TabArr = [
  {
    route: 'TabIndex1',
    label: '1',
    type1: <SvgIconHome_1 />,
    type2: <SvgIconHome_2 />,
    component: TabIndex1,
    type: 1,
  },
  {
    route: 'TabIndex2',
    label: '2',
    type1: <SvgIconKnowledge_1 style={{marginRight: 12}} />,
    type2: <SvgIconKnowledge_2 style={{marginRight: 12}} />,
    component: TabIndex2,
    type: 2,
  },

  {
    route: 'TabIndex3',
    label: '3',
    type1: require('../image/icon/qrcode.png'),
    type2: require('../image/icon/qrcode.png'),
    component: TabIndex3,
    type: 3,
  },
  {
    route: 'TabIndex4',
    label: '4',
    type1: <SvgIconChallenge_1 style={{marginLeft: 12}} />,
    type2: <SvgIconChallenge_2 style={{marginLeft: 12}} />,
    component: TabIndex4,
    type: 4,
  },
  {
    route: 'TabIndex5',
    label: '5',
    type1: <SvgIconReward_1 />,
    type2: <SvgIconReward_2 />,
    component: TabIndex5,
    type: 5,
  },
];
const Tab = createBottomTabNavigator();
const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;

  return (
    <Pressable onPress={onPress} activeOpacity={1} style={styles.container}>
      <View duration={500} style={styles.container}>
        {item.type == 3 ? (
          <View style={styles.viewIcon}>
            <Image
              source={require('../image/icon/qrcode.png')}
              style={styles.btn2}
            />
          </View>
        ) : (
          <View style={styles.btn}>{focused ? item.type2 : item.type1}</View>
        )}
      </View>
    </Pressable>
  );
};
const Footer = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    alignItems: 'center',
    paddingTop: 0,
  },
  tabBar: {
    height: Platform.OS == 'android' ? '8%' : '10%',
    position: 'absolute',
    bottom: 0, //16
    right: 0, //16
    left: 0, //16
    backgroundColor: '#fff',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    shadowColor: '#0000005D',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },

  dotcolor_acctive: {
    backgroundColor: '#ff8307',
    width: 4.9,
    height: 4.9,
    borderRadius: 4.9,
  },
  dotcolor: {
    backgroundColor: '#fff',
    width: 4.9,
    height: 4.9,
    borderRadius: 4.9,
  },
  btn: {
    width: 20,
    height: 20,
  },
  btn2: {
    width: 35,
    height: 35,
  },
  viewIcon: {
    width: 60,
    height: 60,
    backgroundColor: '#736FF4',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 6,
  },
});
