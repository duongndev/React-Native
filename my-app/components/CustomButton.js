import {Text, StyleSheet, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = ({title, onPress}) => (
    <Pressable  onPress={onPress} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
    </Pressable >
);

const styles = StyleSheet.create({

    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: '100%',
        marginTop: 15
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});

export default CustomButton;
