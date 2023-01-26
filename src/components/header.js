import {StyleSheet, Text, View, Platform} from 'react-native';
import React from 'react';

const Header = ({route}) => {
    
  return (
    <View style={styles.header}>
      <Text style={styles.txt}>SETTING</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: Platform.OS == 'android' ? '10%' : '12%',
    bottom: 0, //16
    right: 0, //16
    left: 0, //16
    backgroundColor: '#fff',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    shadowColor: '#0000005D',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    color: '#000',
    fontWeight: '800',
    fontSize: Platform.OS == 'android' ? 18 : 22,
    top: Platform.OS == 'android' ? 0 : 22,
  },
});
