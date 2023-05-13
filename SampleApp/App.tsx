import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles/mainStyle';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Lớp MD18101</Text>
      <Text style={styles.text2}>Nguyễn Đức Dương</Text>
      <Text style={styles.text3}>Chạy ứng dụng React Native thành công</Text>
    </View>
  );
};
export default App;
