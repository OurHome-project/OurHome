import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.ourHome}>OurHome</Text>

      <View style={styles.groupoImg1}>
        <Text style={styles.addBtn}>그룹추가</Text>
      </View>

      <View style={styles.groupoImg2}></View>
      <View style={styles.groupoImg3}></View>
      <View style={styles.groupoImg4}></View>
      <View style={styles.groupoImg5}></View>

      <Text style={styles.group1}>우리집</Text>
      <Text style={styles.group2}>기숙사</Text>
      <Text style={styles.group3}>쉐어하우스</Text>
      <Text style={styles.group4}>공동작업실</Text>

      <Svg style={styles.alarm} width={35} height={35} viewBox="0 0 35 35">
        <Path d="M28.957 14.6044C28.957 5.80026 24.1719 2.80541 19.6966 2.13789C19.6966 2.09278 19.7057 2.04768 19.7057 1.99356C19.7057 0.88402 18.7122 0 17.5 0C16.2878 0 15.3307 0.88402 15.3307 1.99356C15.3307 2.04768 15.3307 2.09278 15.3398 2.13789C10.8555 2.81443 6.04297 5.8183 6.04297 14.6224C6.04297 24.8879 3.46354 25.9884 0 28.875H35C31.5547 25.9794 28.957 24.8698 28.957 14.6044Z" fill="#1C98ED" />
        <Path d="M17.5 35C19.7679 35 21.6296 33.3802 21.875 31.5H13.125C13.3619 33.3802 15.2321 35 17.5 35Z" fill="#1C98ED" />
      </Svg>

      <Svg style={styles.line} width={349} height={25} viewBox="0 0 349 25">
        <Path d="M2 12H351V13.5625H2V12Z" fill="black" fillOpacity="0.3" />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  ourHome: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500',
    marginTop: 50,
  },
  groupoImg1: {
    backgroundColor: '#1c98ed',
    borderRadius: 25,
    width: 318,
    height: 65,
    position: 'absolute',
    top: 760,
    justifyContent: 'center',
  },
  addBtn: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
  groupoImg2: {
    backgroundColor: '#d9d9d9',
    borderRadius: 10,
    borderColor: '#1c98ed',
    borderWidth: 1.5,
    width: 122,
    height: 122,
    position: 'absolute',
    top: 148,
    left: 50,
  },
  groupoImg3: {
    backgroundColor: '#d9d9d9',
    borderRadius: 10,
    borderColor: '#1c98ed',
    borderWidth: 1.5,
    width: 122,
    height: 122,
    position: 'absolute',
    top: 148,
    right: 50,
  },
  groupoImg4: {
    backgroundColor: '#d9d9d9',
    borderRadius: 10,
    borderColor: '#1c98ed',
    borderWidth: 1.5,
    width: 122,
    height: 122,
    position: 'absolute',
    top: 337,
    left: 50,
  },
  groupoImg5: {
    backgroundColor: '#d9d9d9',
    borderRadius: 10,
    borderColor: '#1c98ed',
    borderWidth: 1.5,
    width: 122,
    height: 122,
    position: 'absolute',
    top: 337,
    right: 50,
  },
  group1: {
    color: '#1c98ed',
    fontSize: 16,
    fontWeight: '600',
    position: 'absolute',
    top: 124,
    left: 50,
  },
  group2: {
    color: '#1c98ed',
    fontSize: 16,
    fontWeight: '600',
    position: 'absolute',
    top: 124,
    right: 130, //글자 길이 짧아서 
  },
  group3: {
    color: '#1c98ed',
    fontSize: 16,
    fontWeight: '600',
    position: 'absolute',
    top: 313,
    left: 50,
  },
  group4: {
    color: '#1c98ed',
    fontSize: 16,
    fontWeight: '600',
    position: 'absolute',
    top: 313,
    right: 100,  //왼쪽에서부터 멀어지는 길이
  },
  alarm: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  line: {
    position: 'absolute',
    top: 100,
    alignSelf: 'center',
  },
});

export default App;
