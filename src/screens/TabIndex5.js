import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import Header from '../components/header';
import {useRecoilState} from 'recoil';
import {DataUser} from '@recoil/atoms';

const TabIndex5 = ({route}) => {
  const [dataUser, setDataUser] = useRecoilState(DataUser);
  StatusBar.setBarStyle('dark-content');
  StatusBar.setBackgroundColor('#fff');
  let {response_data} = dataUser.meta;
  console.log('dataaaa', response_data);
  return (
    <View style={{flex: 1, backgroundColor: '#F8F9FE'}}>
      <Header />
      <View style={{height: '80%', alignItems: 'center'}}>
        <View style={styles.ViewCard}>
          <View style={{marginTop: 25, width: '95%', alignItems: 'center'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // backgroundColor: 'red',
                width: '95%',
              }}>
              <Image
                source={require('../image/img/pf.jpg')}
                style={styles.img}
              />
              <View style={{marginLeft: 10}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.txt}>
                    {response_data.substring(0, 4)}
                  </Text>
                  <Text style={styles.txt}>
                    {' '}
                    {''}
                    {'subbb'}
                  </Text>
                  <Text style={styles.txt}>{response_data.substring(4)}</Text>
                </View>
                <Text style={styles.txt2}>
                  {'สาขาวิชาวิศวกรรมศาสตร์คอมพิวเตอร์'}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 50,
                width: '80%',
                // backgroundColor: 'red',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={styles.txt}>{'MEMBER'}</Text>
                <Text style={styles.txt3}>{'Level'}</Text>
              </View>
              <View>
                <Text style={styles.txt}>{'2,500.00'}</Text>
                <Text style={styles.txt3}>{'Point'}</Text>
              </View>
              <View>
                <Text style={styles.txt}>{'0.00'}</Text>
                <Text style={styles.txt3}>{'Credits'}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.viewContentSetting}>
          <TouchableOpacity style={styles.viewContent}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.viewbgimg}>
                <Image
                  source={require('../image/img/st.png')}
                  style={styles.icon}
                />
              </View>
              <Text style={[styles.txt4, {left: 15}]}>Setting</Text>
            </View>
            <Image
              source={require('../image/img/arrow.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <View style={styles.line} />

          <TouchableOpacity style={styles.viewContent}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={[styles.viewbgimg, {backgroundColor: '#FFCD57'}]}>
                <Image
                  source={require('../image/img/chat.png')}
                  style={styles.icon}
                />
              </View>
              <Text style={[styles.txt4, {left: 15}]}>Contact</Text>
            </View>
            <Image
              source={require('../image/img/arrow.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <View style={styles.line} />

          <TouchableOpacity style={styles.viewContent}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={[styles.viewbgimg, {backgroundColor: '#707070'}]}>
                <Image
                  source={require('../image/img/qt.png')}
                  style={styles.icon}
                />
              </View>
              <Text style={[styles.txt4, {left: 15}]}>About us</Text>
            </View>
            <Image
              source={require('../image/img/arrow.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <View style={styles.line} />

          <TouchableOpacity style={styles.viewContent}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={[styles.viewbgimg, {backgroundColor: '#FF7C7C'}]}>
                <Image
                  source={require('../image/img/logout.png')}
                  style={styles.icon}
                />
              </View>
              <Text style={[styles.txt4, {left: 15}]}>Sign out</Text>
            </View>
            <Image
              source={require('../image/img/arrow.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <View style={styles.line} />
        </View>
      </View>
    </View>
  );
};

export default TabIndex5;

const styles = StyleSheet.create({
  ViewCard: {
    backgroundColor: '#736FF4',
    width: '92%',
    height: 210,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  txt: {
    color: '#ffff',
    fontSize: Platform.OS == 'android' ? 14 : 16,
    fontWeight: '500',
  },
  txt2: {
    color: '#ffff',
    fontSize: Platform.OS == 'android' ? 10 : 12,
    fontWeight: '100',
    top: 5,
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  txt3: {
    color: '#ffff',
    fontSize: Platform.OS == 'android' ? 10 : 12,
    fontWeight: '400',
  },
  txt4: {
    color: '#000',
    fontSize: Platform.OS == 'android' ? 14 : 16,
    fontWeight: '500',
  },
  icon: {
    width: 18,
    height: 18,
  },
  viewContent: {
    flexDirection: 'row',
    width: '90%',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewContentSetting: {
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  line: {
    height: 1,
    backgroundColor: '#DDD',
    width: '85%',
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  viewbgimg: {
    backgroundColor: '#2CC4BE',
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
});
