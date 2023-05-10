import React from 'react';
import { Box, Input, Avatar, Center, FormControl, VStack, Text, } from 'native-base';
import { Pressable } from 'native-base';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const CreateScreen = ({ navigation }) => {
    return (
        <>
            <Box mt="5" alignItems="flex-end">
                <Box w="100%" maxWidth="150px">
                    <Center>
                        <Avatar bg="amber.500" source={{
                            uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        }} size="2xl">
                            NB
                            <Avatar.Badge badgeContent={4}>
                            </Avatar.Badge>
                        </Avatar>
                    </Center>
                </Box>
            </Box>
            <VStack style={styles.styleF} space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Name</FormControl.Label>
                    <Input style={styles.input} placeholder='Enter your name' />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Last Name</FormControl.Label>
                    <Input style={styles.input} placeholder='Enter your last name' />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Birth day</FormControl.Label>
                    <Input style={styles.input} placeholder='DD/MM/YYYY'/>
                </FormControl>
                <FormControl>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input style={styles.input} placeholder='Enter your password' type='password' />
                </FormControl>
                <Pressable title="Sign up" style={styles.btn_LogIn} onPress={() => navigation.navigate()}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#0091FB', '#000AFB']} style={styles.gradient}>
                        <Text style={styles.btn_Text_Login}>Update</Text>
                    </LinearGradient>
                </Pressable>
            </VStack>
        </>
    );
};

export default CreateScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    seperatorLine: {
        height: 1,
        padding: 2,
    },
    input: {
        borderColor: '#0091FB',
        borderWidth: 2,
    },
    btn_LogIn: {
        width: '100%',
        top: 10,
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
    btn_Text_Login: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
    styleF: {
        marginHorizontal: 15,
    },
});

