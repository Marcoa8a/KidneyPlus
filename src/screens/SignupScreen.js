import React from 'react';
import { Box, Heading, VStack, FormControl, Input, Button, Link, HStack, Text, Center, ScrollView, Pressable} from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/styles';
import screen from '../utils/screenNames';

const Signup = ({ navigation }) => {
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
                        <Input style={styles.input} placeholder='Enter your name'/>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Last Name</FormControl.Label>
                        <Input style={styles.input} placeholder='Enter your last name'/>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Birth day</FormControl.Label>
                        <Input style={styles.input} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input style={styles.input} placeholder='example@email.com' />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input style={styles.input} placeholder='Enter your password' type='password'/>
                    </FormControl>
                    <Pressable title="Sign up" style={styles.btn_LogIn} onPress={() => navigation.navigate(screen.login)}>
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