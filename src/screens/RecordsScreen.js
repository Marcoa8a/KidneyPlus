import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NativeBaseProvider, Image, Box, Text, IconButton, Icon, VStack, HStack, Stack, Button, Center, StatusBar } from 'native-base';
import { MaterialIcons, Ionicons, Entypo, AntDesign, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../styles/styles';

const Record = () => {
    return (
        <View style={{flex: 1, alignItems: 'center', padding: 30}}>
            <Center>
                <Text style={styles.titleRecord}>Kevin Macias</Text>

                <HStack alignItems="center">
                    <MaterialIcons
                        name='date-range'
                        size={20}
                        color='#7dd3fc' />
                    <Text fontSize="20" fontWeight="bold">
                        10/mayo/2023
                    </Text>
                </HStack>

                <HStack alignItems="center">
                    <MaterialIcons
                        name='where-to-vote'
                        size={20}
                        color='#7dd3fc' />
                    <Text fontSize="20" fontWeight="bold">
                        Aguascalientes
                    </Text>
                </HStack>

                <HStack alignItems="center">
                    <FontAwesome5
                        name='weight-hanging'
                        size={20}
                        color='#7dd3fc' />
                    <Text fontSize="20" fontWeight="bold">
                        60kg
                    </Text>
                </HStack>

                <HStack alignItems="center">
                    <MaterialCommunityIcons
                        name='human-male-height'
                        size={20}
                        color='#7dd3fc' />
                    <Text fontSize="20" fontWeight="bold">
                        1.75 cm
                    </Text>
                </HStack>

                <Image mb="5" mt="5"
                    w="80" h="200"
                    source={require('../imgs/graphic.png')}
                    alt="Imagen temporal">
                </Image>

                <Text fontSize="xl" bold>Latest reports</Text>

                <Stack direction={{
                    base: "column",
                    md: "row"
                }} space={4}>
                    <Button colorScheme="indigo" leftIcon={<Icon as={Ionicons}
                        name="document-text" size="sm" />}>
                        My Report
                    </Button>
                </Stack>
            </Center>
        </View>
    );
};

function AppBar() {
    return <>
        <StatusBar bg="#3700B3" barStyle="light-content" />
        <Box safeAreaTop bg="violet.600" />
        <HStack bg="violet.600" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
            <HStack alignItems="center">
                <IconButton icon={<Icon size="md" as={AntDesign} name="arrowleft" color="white" />} />
                <Text color="white" fontSize="20" fontWeight="bold">
                    Records
                </Text>
            </HStack>
        </HStack>
    </>;
}


export default Record;
