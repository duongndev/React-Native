import {Button, Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from "../styles/homeStyles";

const HomeScreen = ({navigation}) => {
    const [students, setStudents] = useState([]);

    async function getListStudent() {
        try {
            const API_URL = 'http://192.168.1.243:3000/students';
            const response = await fetch(API_URL);
            const data = await response.json();
            setStudents(data);
            return data;
        } catch (error) {
            console.error('Fetch data failed ' + error);
            return null;
        }
    }

    useEffect(() => {
        getListStudent();
    }, []);

    const navigateToLogin = () => {
        navigation.navigate('Login');
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{flex: 1, padding: 20}}>
                <Button title='Go to Login Screen' onPress={navigateToLogin} />
                <View>
                    <Text style={styles.txtHeader}>List student</Text>
                </View>
                <View style={styles.container}>
                    {students.map((item, index) => {
                        return (
                          <View style={styles.item} key={index}>
                              <View style={styles.itemImageContainer}>
                                  {item.gender === 'Male' ? (
                                      <Image style={styles.itemImage} source={require('../assets/images/male.png')} resizeMode='contain' />
                                  ) : (
                                      <Image style={styles.itemImage} source={require('../assets/images/female.png')} resizeMode='contain' />
                                  )}
                              </View>
                              <View style={{ paddingLeft: 15 }}>
                                  <Text>{item.studentId}</Text>
                                  <Text>{item.fullName}</Text>
                                  <Text>{item.gender}</Text>
                                  <Text>{item.email}</Text>
                                  <Text>{item.dateOfBirth}</Text>
                              </View>

                          </View>
                        );
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

export default HomeScreen;
