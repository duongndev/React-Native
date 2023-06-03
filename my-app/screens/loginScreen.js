import React, {useEffect, useState} from "react";
import {Alert, View, Image, Text} from "react-native";
import CustomBottom from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import logo from "../assets/logo.png";
import styles from "../styles/loginStyles";
import {useNavigation} from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUser] = useState([]);
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const fetchData = async () => {
        try {
            const API_URL = "http://192.168.110.107:8000/users";
            const response = await fetch(API_URL);
            const data = await response.json();
            setUser(data);
        } catch (error) {
            console.error("Fetch data failed " + error);
            return null;
        }
    }


    const validateAuthInfo = (authInfo) => {
        if (authInfo.username === '') {
            setUsernameError('Username field cannot be empty');
            return false;
        } else if (authInfo.password === '') {
            setUsernameError('');
            setPasswordError('Password field cannot be empty');
            return false;
        }
        return true;
    };
    const clearError = (usernameError, passwordError) => {
        if (usernameError) setUsernameError('');
        if (passwordError) setPasswordError('');
    };


    const storeAuthInfo = async (value) => {
        try {
            const authInfo = JSON.stringify(value);
            await AsyncStorage.setItem('authInfo', authInfo);
        } catch (error) {
            console.info(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    const doLogin = () => {
        let request = {username: username, password: password};
        console.info("authInfo", +JSON.stringify(request));
        if (username.length === 0 && password.length === 0) {
            setUsernameError('Please enter username')
            setPasswordError('Please enter password')
            return;
        }
        if (users) {
            const validateResult = validateAuthInfo(request);
            if (validateResult === true) {
                const authInfo = users.find((user) => user.username === request.username);
                if (!authInfo) {
                    clearError(usernameError, passwordError);
                    setUsernameError('User information not found')
                    console.error("Not found " + request.username)
                    // Alert.alert("Notification", "User information not found", [
                    //     {
                    //         text: "Cancel",
                    //         onPress: () => console.error("Not found" + request.username),
                    //     },
                    // ]);
                } else {
                    if (!(authInfo.password === request.password)) {
                        clearError(usernameError, passwordError);
                        setPasswordError('Password is not correct');
                    } else {
                        clearError(usernameError, passwordError);
                        storeAuthInfo(authInfo);
                        Alert.alert(
                            "Notification",
                            "Login successfully " + request.username,
                            [
                                {text: "OK", onPress: () => navigateToHome()},
                                {text: "Cancel", onPress: () => console.info("Press Cancel")},
                            ]
                        );
                    }
                }
            }

        }
    };
    const navigateToHome = () => {
        navigation.navigate("Home");
    };

    return (
        <View style={styles.root}>
            <Image style={styles.logo} source={logo}/>

            <CustomInput
                value={username}
                placeholder={"username"}
                setValue={setUsername}
                secureTextEntry={false}
            />
            <Text style={styles.errorTxt}>{usernameError}</Text>
            <CustomInput
                value={password}
                placeholder={"password"}
                setValue={setPassword}
                secureTextEntry={true}
            />
            <Text style={styles.errorTxt}>{passwordError}</Text>
            <CustomBottom title={"Login"} onPress={doLogin}/>
        </View>
    );
};
export default LoginScreen;
