import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: "center",
        padding: 10,
        marginTop: 10,
    },
    logo: {
        width: "50%",
        height: "30%",
        resizeMode: "contain",
    },
    textInput: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 15,
    },
    errorTxt: {
        color: 'red',
        marginVertical: 5
    },
});

export default styles;
