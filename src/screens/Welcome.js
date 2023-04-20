import React from 'react';
import { View, Text, StyleSheet, Image, Button, Pressable, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import screen from '../utils/screenNames';

const Welcome = ({ navigation }) => {

    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFF' }}>
            <Text style={styles.titleText}>Welcome to KidneyPlus</Text>

            <Text style={styles.infoText}>To use KidneyPlus features, log in with your account or create a new account.</Text>

            <Image
                style={styles.img}
                source={require('../imgs/welcomeImage.png')}>
            </Image>

            <TouchableOpacity title='Log In' style={styles.btn_Login} onPress={() => navigation.navigate(screen.login)}>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    colors={['#0091FB', '#000AFB']}
                    style={styles.gradient}
                >
                    <Text style={styles.btn_Text_Login}>
                        Sign In 
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
            <Pressable title='Sign Up' style={styles.btn_Signup} onPress={() => navigation.navigate(screen.signup)}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#0091FB', '#000AFB']} style={styles.gradient}>
                    <Text style={styles.btn_Text_Login}> Sign Up </Text>
                </LinearGradient>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    titleText: {
        marginTop: 80,
        fontSize: 30,
        fontWeight: 'bold',
    },

    infoText: {
        margin: 40,
    },

    img: {
        top: -30,
    },

    btn_Login: {
        width: '75%',
        borderRadius: 5,
        backgroundColor: 'transparent',
        padding: 5,
    },

    btn_Text_Login: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },

    btn_Signup: {
        width: '75%',
        top: -15,
        borderRadius: 5,
        backgroundColor: 'transparent',
        padding: 5,
    },
    gradient: {
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 10,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Welcome;