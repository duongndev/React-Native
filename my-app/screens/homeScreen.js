import { Button, View } from 'react-native';
import React from 'react';

const HomeScreen = ({ navigation }) => {
    const navigateToLogin = () => {
        navigation.navigate('Login');
    };

    return (
    <View>
        <Button title='Go to Login Screen' onPress={navigateToLogin} />
    </View>
    ) 
};

export default HomeScreen;