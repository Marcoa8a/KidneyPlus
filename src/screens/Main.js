import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/HomeScreen";
import EmergencyContact from "../screens/EmergencyContactScreen";
import LiveChat from "../screens/ChatScreen";
import Record from "../screens/RecordsScreen";
import Notifications from "../screens/Notifications";
import { Link } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
} from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
    NativeBaseProvider,
    Button,
    Box,
    HamburgerIcon,
    Pressable,
    Heading,
    VStack,
    Text,
    Center,
    HStack,
    Divider,
    Icon,
    Image
} from "native-base";

global.__reanimatedWorkletInit = () => { };

const Drawer = createDrawerNavigator();

//Crea componentes con la configuración determinada
function Component(props) {
    //HAZ UN SWITCH PARA QUE DETECTE CUAL ES EL NOMBRE QUE ESTÁ RECIBIENDO Y NO HAGAS TANTO CÓDIGO    
    return (        
        <Center>
            <Text mt="12" fontSize="18">
                This is {props.route.name} page.
            </Text>
        </Center>
    );
}

//Establece los iconos por medio del return
const getIcon = (screenName) => {
    switch (screenName) {
        case "Home":
            return "home";
        case "Real-time Analysis":
            return "poll";
        case "Record":
            return "file-document";
        case "Configuration":
            return "cog";
        case "Emergency Contacts":
            return "account";
        case "Notification":
            return "bell-alert";
        case "Live Chat":
            return "forum";
        default:
            return undefined;
    }
};

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props} safeArea >

            <VStack space="6" my="2" mx="1" backgroundColor={"#fff"}>

                <Box px="5">
                    <Image
                        source=""
                        alt="Avatar"
                        size={"120px"}
                        alignContent={"center"}
                        margin="auto"
                    />
                    <Text fontSize="20" mt="1" bold color="gray.700" fontWeight="800" textAlign={"center"}>
                        Kevin Macias
                    </Text>
                    <Text fontSize="14" mt="1" color="gray.500" fontWeight="500" textAlign={"center"}>
                        <Link to={{ screen: 'EditUser' }}>
                            Edit user profile
                        </Link>
                    </Text>
                </Box>
                <VStack divider={<Divider />} space="4">
                    <VStack space="3">
                        {props.state.routeNames.map((name, index) => (
                            <Pressable
                                px="5"
                                py="3"
                                rounded="md"
                                bg={
                                    index === props.state.index
                                        ? "rgba(6, 182, 212, 0.1)"
                                        : "transparent"
                                }
                                onPress={(event) => {
                                    props.navigation.navigate(name);
                                }}
                            >
                                <HStack space="7" alignItems="center">
                                    <Icon
                                        color={
                                            index === props.state.index ? "primary.500" : "gray.500"
                                        }
                                        size="5"
                                        as={<MaterialCommunityIcons name={getIcon(name)} />}
                                    />
                                    <Text
                                        fontWeight="500"
                                        color={
                                            index === props.state.index ? "primary.500" : "gray.700"
                                        }
                                    >
                                        {name}
                                    </Text>
                                </HStack>
                            </Pressable>
                        ))}
                    </VStack>
                    <VStack space="5">
                        <VStack space="3">
                            <Pressable px="5" py="3">
                                <HStack space="7" alignItems="center">
                                    <Icon
                                        color="gray.500"
                                        size="5"
                                        as={<MaterialCommunityIcons name="instagram" />}
                                    />
                                    <Text color="gray.700" fontWeight="500">
                                        Instagram
                                    </Text>
                                </HStack>
                            </Pressable>
                            <Pressable px="5" py="2">
                                <HStack space="7" alignItems="center">
                                    <Icon
                                        color="gray.500"
                                        size="5"
                                        as={<MaterialCommunityIcons name="logout" />}
                                    />
                                    <Text color="gray.700" fontWeight="500">
                                        Log Out
                                    </Text>
                                </HStack>
                            </Pressable>
                        </VStack>
                    </VStack>
                </VStack>
            </VStack>
        </DrawerContentScrollView>
    );
}

function MyDrawer() {
    return (
        <Box safeArea flex={1}>
            <Drawer.Navigator
                drawerContent={(props) => <CustomDrawerContent {...props} />}
            >
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Real-time Analysis" component={Component} />
                <Drawer.Screen name="Record" component={Record} />
                <Drawer.Screen name="Configuration" component={Component} />
                <Drawer.Screen name="Emergency Contacts" component={EmergencyContact} />
                <Drawer.Screen name="Notification" component={Notifications} />
                <Drawer.Screen name="Live Chat" component={LiveChat} />
            </Drawer.Navigator>
        </Box>
    );
}

export default function Dnavigation() {
    return (
        <NavigationContainer independent={true}>
            <NativeBaseProvider>
                <MyDrawer />
            </NativeBaseProvider>
        </NavigationContainer>
    );
}