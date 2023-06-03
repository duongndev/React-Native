import {
    Button,
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    View,
} from "react-native";
import React, {useEffect, useState} from "react";
import styles from "../styles/homeStyles";
import Student from "../components/Student";
import {useNavigation} from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
    const [students, setStudents] = useState([]);
    const [authInfo, setAuthInfo] = useState();
    const navigation = useNavigation()

    async function getListStudent() {
        try {
            const API_URL = "http://192.168.110.107:8000/students";
            const response = await fetch(API_URL);
            const data = await response.json();
            setStudents(data);
            // console.info("student: " + JSON.stringify(data));
        } catch (error) {
            console.error("Fetch data failed " + error);
        }
    }

    const retrieveData = async () => {
        try {
            const authInfo = await AsyncStorage.getItem('authInfo');
            if (authInfo !== null) {
                console.info('====> authInfo from AsyncStorage', authInfo);
                setAuthInfo(JSON.parse(authInfo));
            } else {
                setAuthInfo(JSON.parse(authInfo));
                console.info('====> authInfo not found');
            }
        } catch (error) {
            console.error(error);
        }
    };


    const Logout = () => {
        AsyncStorage.removeItem('authInfo');
        navigation.reset({
            index: 0,
            routes: [{name: 'Login'}]
        });
    };


    useEffect(() => {
        retrieveData();
        getListStudent();
    }, []);

    const navigateToLogin = () => {
        navigation.navigate('Login');
    };


    const renderStudents = () => {
        return (
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View>
                    <Text style={styles.txtHeader}>List Student</Text>
                </View>
                <View style={styles.studentContainer}>
                    {students.map((item, index) => {
                        return <Student student={item} key={index}></Student>;
                    })}
                </View>
            </ScrollView>
        );
    };

    const staffScreen = () => {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.txtHeader}>Staff</Text>
            </SafeAreaView>
        );
    };


    return (
        <SafeAreaView style={styles.container}>
            {authInfo ? <Button title='Logout' onPress={Logout}/> :
                <Button title='Go to Login Screen' onPress={navigateToLogin}/>}
            {authInfo?.role === 'ADMIN' ? renderStudents() : staffScreen()}
        </SafeAreaView>
    );
};

export default HomeScreen;
