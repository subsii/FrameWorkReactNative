import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Switch,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {TextInput} from 'react-native-paper';
import {useRecoilState} from 'recoil';
import {DataUser} from '@recoil/atoms';

const Login = ({navigation}) => {
  const [text, onChangeText] = React.useState('');
  const [password, setPassword] = useState('');
  const [dataUser, setDataUser] = useRecoilState(DataUser);
  const [type, setType] = useState();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const data = {username: text, password: password};
  console.log('text', text);
  console.log('password', password);
  console.log('type', type);
  // "username": "userxten",
  //"password": "x10tech"

  // useEffect(() => {
  // const willFocusSubscription = navigation.addListener('focus', () => {
  // });
  // return willFocusSubscription;
  console.log('dataUser:', dataUser);
  const _getapi = () => {
    fetch('http://103.13.231.185:8080/api/v1/test_login', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data.meta.response_code);
        if (data.meta.response_desc == 'success') {
          setType(1);
          setDataUser(data);
          console.log('Success:', data);
          navigation.navigate('Footer', {
            screen: 'TabIndex5',
          });
          // setTimeout(() => {
          //   onChangeText('');
          //   setPassword('');
          // }, 500);
        } else if (data.meta.response_desc == 'unauthorized') {
          alert('หากกรอก username หรือ password ไม่ถูกต้อง');
          setType(2);
        } else if (data.meta.response_desc == 'Exception Occurred') {
          alert('หากพบข้อผิดพลาด');
          setType(3);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  // }, [navigation]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{flex: 1, backgroundColor: '#736FF4'}}>
        <View
          style={{
            height: '90%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{width: '88%'}}>
            <TextInput
              placeholder="Username or Email"
              placeholderTextColor={'#C9CDD3'}
              value={text}
              onChangeText={text => onChangeText(text)}
              outlineColor={'#00000029'}
              activeOutlineColor={'#FF9D3B'}
              mode="outlined"
              autoCapitalize="none"
              autoCorrect={false}
              theme={{
                colors: {
                  underlineColor: 'transparent',
                  background: '#fff',
                  text: '#777777',
                },

                roundness: 10,
              }}
            />
          </View>
          <View style={{width: '88%', marginTop: 15}}>
            <TextInput
              placeholder="Password"
              placeholderTextColor={'#C9CDD3'}
              value={password}
              onChangeText={text => setPassword(text)}
              outlineColor={'#00000029'}
              activeOutlineColor={'#FF9D3B'}
              mode="outlined"
              autoCapitalize="none"
              autoCorrect={false}
              theme={{
                colors: {
                  underlineColor: 'transparent',
                  // background: '#fff',
                  text: '#777777',
                },

                roundness: 10,
              }}
            />
          </View>
          <View
            style={{
              width: '88%',
              top: 25,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Switch
              trackColor={{false: '#DDD', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#DDD"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <Text
              style={{
                color: '#fff',
                fontSize: Platform.OS == 'android' ? 14 : 16,
                left: 10,
              }}>
              Remember me
            </Text>
          </View>
          <TouchableOpacity onPress={() => _getapi()} style={styles.btn}>
            <Text
              style={{
                color: '#fff',
                fontSize: Platform.OS == 'android' ? 14 : 16,
              }}>
              SIGN IN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => _getapi()} style={styles.btn2}>
            <Text
              style={{
                color: '#fff',
                fontSize: Platform.OS == 'android' ? 14 : 16,
              }}>
              SIGN IN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  inputGoal: {
    fontSize: 18,
    color: '#777777',
    height: 60,
    textAlignVertical: 'center',
    paddingTop: 0,
  },
  btn: {
    backgroundColor: '#AA26DB',
    width: '88%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 60,
  },
  btn2: {
    // backgroundColor: '#AA26DB',
    width: '88%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  sw: {
    // backgroundColor: 'red',
  },
});
