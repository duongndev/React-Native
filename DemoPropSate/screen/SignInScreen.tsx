/* eslint-disable prettier/prettier */
import {View, Alert, StyleSheet, TextInput, Button, Image} from 'react-native';
import React, {useState} from 'react';
import Logo from '../assets/image/Logo.png';

const SignInScreen = ({navigation}: {navigation: any}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onPressSignIn = () => {
    let request = {username: username, password: password};
    Alert.alert('Thông báo', 'Xin chào ' + request.username, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Ok', onPress: () => console.log('Ok Pressed')},
    ]);
  };

  const navigateHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.root}>
      <Image style={styles.logo} source={Logo} />

      <TextInput
        style={styles.textInput}
        placeholder="username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.textInput}
        placeholder="password"
        value={password}
        onChangeText={setPassword}
        textContentType="password"
        secureTextEntry={true}
      />
      <Button title="Login" onPress={onPressSignIn} />
      <Button title="Back to home" onPress={navigateHome} />
    </View>
  );
};
export default SignInScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
  },
  textInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 15,
  },
});
