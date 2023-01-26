import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {TextInput} from 'react-native-paper';

const ProfileTest = ({navigation, route}) => {
  const [text, onChangeText] = React.useState('');
  let {response_data, response_datetime} = route.params.data.meta;
  console.log('dataaaa', response_data);
  return (
    <View style={{flex: 1, backgroundColor: '#5B8CDD'}}>
      <View
        style={{height: '90%', alignItems: 'center', justifyContent: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: '#ffff', fontSize: 24}}>
            {response_data.substring(0, 4)}
          </Text>
          <Text style={{color: '#ffff', fontSize: 24}}>
            {' '}
            {''}
            {'subbb'}
          </Text>
          <Text style={{color: '#ffff', fontSize: 24}}>
            {response_data.substring(4)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileTest;

const styles = StyleSheet.create({
  inputGoal: {
    fontSize: 20,
    color: '#777777',
    height: 60,
    textAlignVertical: 'center',
  },
  btn: {
    backgroundColor: 'green',
    width: '80%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 60,
  },
});
