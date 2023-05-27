import React, {useState} from "react";
import {
    Alert,
    StyleSheet,
    View,
    Image,
} from "react-native";
import CustomBottom from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import logo from "../assets/logo.png"
const LoginScreen = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let users = [];

    async function fetchData() {
        try {
            const API_URL = "http://192.168.1.243:3000/users";
            const response = await fetch(API_URL);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Fetch data failed " + error);
            return null;
        }
    }

    async function storeData() {
        users = await fetchData();
    }

    storeData();

    const doLogin = () => {
        if (username.length == 0) {
            alert('Vui lòng nhập username');
            return;
        }
        if (password.length == 0) {
            alert('Vui lòng nhập password');
            return;
        }
        let request = {username: username, password: password};
        console.info('authInfo', + JSON.stringify(request));
        if (users) {
            const authInfo = users.find((user) => user.username === request.username);
            if (!authInfo) {
                Alert.alert('Notification', 'Không tìm thấy thông tin user', [{
                    text: 'Cancel',
                    onPress: () => console.error('Không tìm thấy ' + request.username)
                }]);
            } else {
                if (!(authInfo.password === request.password)) {
                    Alert.alert('Notification', 'Mật khẩu không chính xác', [{
                        text: 'Cancel',
                        onPress: () => console.error('Mật khẩu không chính xác cho ' + request.username)
                    }]);
                } else {
                    Alert.alert('Notification', 'Login successfully ' + request.username, [
                        {text: 'OK', onPress: () => navigateToHome()},
                        {text: 'Cancel', onPress: () => console.info('Press Cancel')}
                    ]);
                }

            }
        }
    };

    const onPressSignIn = () => {
        let request = {username: username, password: password};
        Alert.alert("Thông báo", "Xin chào " + request.username, [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
            },
            {text: "Ok", onPress: () => console.log("Ok Pressed")},
        ]);
    };
    const navigateToHome = () => {
        props.navigation.navigate("Home");
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
            <CustomInput
                value={password}
                placeholder={"password"}
                setValue={setPassword}
                secureTextEntry={true}
            />
            <CustomBottom title={'Login'} onPress={doLogin} />
            <CustomBottom title={'Back to home screen'} onPress={navigateToHome} />
        </View>
    );
};
export default LoginScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: "center",
        padding: 10,
        marginTop: 10,
    },
    logo: {
        width: "50%",
        height: "50%",
        resizeMode: "contain",
    },
    textInput: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 15,
    },
});
