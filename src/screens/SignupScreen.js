import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Box, Heading, VStack, FormControl, Input, Button, Link, HStack, Text, Center, ScrollView, Pressable } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase-config';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles';
import screen from '../utils/screenNames';

const Signup = () => {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigation = useNavigation();

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    //Creamos una cuenta de usuario
    const handleCreateAccount = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                // Actualizar el perfil del usuario con el nombre
                updateProfile(user, { displayName: name })
                    .then(() => {
                        console.log('Account created!');
                        console.log(user);
                        navigation.navigate(screen.login, { username: name });
                    })
                    .catch((error) => {
                        console.log(error);
                        Alert.alert(error.message);
                    });
            })
            .catch((error) => {
                console.log(error);
                Alert.alert(error.message);
            });
    };

    return <ScrollView>
        <Center w="100%">
            <Box safeArea p="2" w="90%" maxW="290" py="8">
                <Heading style={styles.titleLogin} size="lg" color="coolGray.800" _dark={{
                    color: "warmGray.50"
                }} fontWeight="semibold">
                    Sign Up
                </Heading>
                <Heading style={styles.titleLogin} mt="1" color="coolGray.600" _dark={{
                    color: "warmGray.200"
                }} fontWeight="medium" size="xs">
                    Create an account in KidneyPlus
                </Heading>
                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>Name</FormControl.Label>
                        <Input onChangeText={(text) => setName(text)} style={styles.input} placeholder='Enter your name' />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Last Name</FormControl.Label>
                        <Input style={styles.input} placeholder='Enter your last name' />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input onChangeText={(text) => setEmail(text)} style={styles.input} placeholder='example@email.com' />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input onChangeText={(text) => setPassword(text)} style={styles.input} placeholder='Enter your password' type='password' />
                    </FormControl>
                    <Pressable title="Sign up" style={styles.btn_LogIn} onPress={handleCreateAccount}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#0091FB', '#000AFB']} style={styles.gradient}>
                            <Text style={styles.btn_Text_Login}>Sign up</Text>
                        </LinearGradient>
                    </Pressable>
                </VStack>
            </Box>
        </Center>
    </ScrollView>;
}

export default Signup;