import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
const TabIndex1 = () => {
  const [text, onChangeText] = React.useState('');
  return (
    <View style={{flex: 1}}>
      <View
        style={{height: '80%', alignItems: 'center', justifyContent: 'center'}}>
        <Text>TabIndex1</Text>
      </View>
    </View>
  );
};

export default TabIndex1;

const styles = StyleSheet.create({});
