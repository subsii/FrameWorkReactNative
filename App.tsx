import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Routes from './src/routes/Routes';
import {RecoilRoot} from 'recoil';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <RecoilRoot>
        <Routes />
      </RecoilRoot>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
