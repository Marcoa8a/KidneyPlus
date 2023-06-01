import React, {useState} from 'react';
import { Box, Heading, VStack, FormControl, Input, Image, Link, HStack, Text, Center, Pressable} from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, initializeAuth} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase-config'; 
import styles from '../styles/styles';
import screen from '../utils/screenNames';

const Login = ({ navigation }) => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('Signed in!')
            const user = userCredential.user;
            const username = user.displayName;
            console.log(user)
            navigation.navigate(screen.main, {username});
        })
        .catch(error => {
            console.log(error)
        })
    }

    return <Center w="100%">
        <Image
            style={styles.imgLogin}
            source={require('../imgs/rinion.png')} 
            alt="Rinion">
        </Image>
        <Box safeArea p="2" py="10" w="90%" maxW="290" >
            <Heading style={styles.titleLogin} size="lg" fontWeight="600" color="coolGray.800" _dark={{
                color: "warmGray.50"
            }}>
                Log in
            </Heading>
            <Heading style={styles.titleLogin} mt="1" _dark={{
                color: "warmGray.200"
            }} color="coolGray.600" fontWeight="medium" size="xs">
                Log in to access all KidneyPlus features
            </Heading>

            <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input onChangeText={(text) => setEmail(text)} style={styles.input} placeholder='example@email.com'/>
                </FormControl>
                <FormControl>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input onChangeText={(text) => setPassword(text)} style={styles.input} placeholder='Enter your password' type="password" />
                </FormControl>
                <Pressable title='Log in' style={styles.btn_LogIn} onPress={handleSignIn}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#0091FB', '#000AFB']} style={styles.gradient}>
                        <Text style={styles.btn_Text_Login}> Log In </Text>
                    </LinearGradient>
                </Pressable>
                <HStack mt="6" justifyContent="center">
                    <Text fontSize="sm" color="coolGray.600" _dark={{
                        color: "warmGray.200"
                    }}>
                        Don't have an account?, {" "}
                    </Text>
                    <Link onPress={() => navigation.navigate(screen.signup)} _text={{
                        color: "indigo.500",
                        fontWeight: "medium",
                        fontSize: "sm"
                    }} >
                        Sign Up
                    </Link>
                </HStack>
            </VStack>
        </Box>
    </Center>;
};

export default Login;