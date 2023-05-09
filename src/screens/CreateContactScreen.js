import React from 'react';
import { Box, Button, Input, Icon, Stack, Avatar, Center, FormControl, WarningOutlineIcon, StatusBar, HStack, IconButton, Text } from 'native-base';
import { MaterialIcons, Ionicons, Entypo, AntDesign } from '@expo/vector-icons';
import screen from '../utils/screenNames';


const CreateScreen = ({ navigation }) => {
    return (
        <>
            <AppBar />
            <RegisterForm />
        </>
    );
};

export default CreateScreen;


const RegisterForm = () => {
    return (
        <>
            <Box mt="5" alignItems="center">
                <Box w="100%" maxWidth="300px">
                    <Center>
                        <Avatar bg="amber.500" source={{
                            uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        }} size="2xl">
                            NB
                            <Avatar.Badge bg="green.500" />
                        </Avatar>
                    </Center>
                    <FormControl isRequired>
                        <Stack mx="4">
                            <FormControl.Label>Name</FormControl.Label>
                            <Input variant="filled" bg="gray.200" type="Text" defaultValue="Kevin"
                                placeholder="name" />
                            <FormControl.ErrorMessage leftIcon=
                                {<WarningOutlineIcon size="xs" />}>
                                Atleast 6 characters are required.
                            </FormControl.ErrorMessage>
                        </Stack>
                    </FormControl>
                    <FormControl isRequired>
                        <Stack mx="4">
                            <FormControl.Label>Number</FormControl.Label>
                            <Input variant="filled" bg="gray.200" type="numeric" defaultValue="4492229164"
                                placeholder="number" />
                            <FormControl.ErrorMessage leftIcon=
                                {<WarningOutlineIcon size="xs" />}>
                                Atleast 6 characters are required.
                            </FormControl.ErrorMessage>
                        </Stack>
                    </FormControl>
                    <Button mt="2" colorScheme="indigo" onPress={() =>
                        console.log("Safe contact")}> SAVE
                    </Button>
                </Box>
            </Box>
        </>
    );

};
function AppBar() {
    return <>
        <StatusBar bg="#3700B3" barStyle="light-content" />
        <Box safeAreaTop bg="violet.600" />
        <HStack bg="violet.600" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
            <HStack alignItems="center">
                <IconButton onPress={() => navigation.navigate(screen.emergency)} icon={<Icon size="md" as={AntDesign} name="arrowleft" color="white" />} />
                <Text color="white" fontSize="20" fontWeight="bold">
                    New Contact
                </Text>
            </HStack>
        </HStack>
    </>;
}