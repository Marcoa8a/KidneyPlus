import * as React from "react";
import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/HomeScreen";
import EmergencyContact from "../screens/EmergencyContactScreen";
import LiveChat from "../screens/LiveChat";
import Record from "../screens/RecordsScreen";
import Notifications from "../screens/Notifications";
import CreateContact from "../screens/CreateContactScreen";
import RealTime from "../screens/RealTimeScreen";
import DiagnosticScreen from "../screens/DiagnosticScreen";
import SettingsScreen from "../screens/Settings";
import EditProfile from "../screens/EditProfileScreen";
import Login from "../screens/LoginScreen";
import AddChat from "../screens/AddChatScreen";
import ChatScreen from "../screens/ChatScreen";
import ScreenNames from '../utils/screenNames';

import {getAuth, onAuthStateChanged} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase-config'; 

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
    Pressable,navigation,
    Heading,
    VStack,
    Text,
    Center,
    HStack,
    Divider,
    Icon,
    Image,
    Link,
    Avatar
} from "native-base";

global.__reanimatedWorkletInit = () => { };

const Drawer = createDrawerNavigator();

//Establece los iconos por medio del return
const getIcon = (screenName) => {
    switch (screenName) {
        case "Home":
            return "home";
        case "Real-time Analysis":
            return "poll";
        case "Records":
            return "file-document";
        case "Configuration":
            return "cog";
        case "Emergency Contacts":
            return "account";
        case "Edit profile":
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

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const [displayName, setDisplayName] = useState(null);
  
    //Obtiene el displayName registrado por el usuario en el login
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setDisplayName(user.displayName);
        } else {
          setDisplayName(null);
        }
      });
    
      return () => unsubscribe();
    }, []);
    // console.log(props.state.routes)
    return (
        <DrawerContentScrollView {...props} safeArea >

            <VStack space="6" my="2" mx="1" backgroundColor={"#fff"}>

                <Box px="5">
                    <Center>
                <Avatar
                        mr="1"
                        bg="amber.500"
                        source={{
                        uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                        }}
                        size="2xl"
                    >
                        NB
                        <Avatar.Badge bg="green.500" />
                </Avatar>
                </Center>
                    
                    <Text fontSize="20" mt="1" bold color="gray.700" fontWeight="800" textAlign={"center"}>
                        {displayName}
                    </Text>
                    <Text fontSize="14" mt="1" color="gray.500" fontWeight="500" textAlign={"center"}>
                        {/*<Link onPress={props.navigation.navigate(ScreenNames.editprofile)}> 
                            Edit user profile
                        </Link>*/}                        
                    </Text>
                </Box>
                <VStack divider={<Divider />} space="4">
                    <VStack space="3">
                        {props.state.routeNames.filter(name => !!getIcon(name)).map((name, index) => (
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
                                    <Link href="https://www.instagram.com/kidney_plus/">
                                    <Text color="gray.700" fontWeight="500">
                                        Instagram
                                    </Text> 
                                    </Link>
                                </HStack>
                            </Pressable>
                            <Pressable px="5" py="2" 
                                onPress={(event) => {
                                    props.navigation.navigate(ScreenNames.login);
                                }}> 
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
        <Box safeArea flex={1} >
            <Drawer.Navigator
                drawerContent={(props) => <CustomDrawerContent {...props} />}
            >
                <Drawer.Screen name={ScreenNames.home} component={Home} />
                <Drawer.Screen name={ScreenNames.realTime} component={RealTime} />
                <Drawer.Screen name={ScreenNames.record}component={Record} />
                <Drawer.Screen name={ScreenNames.configuration} component={SettingsScreen} />
                <Drawer.Screen name={ScreenNames.emergency} component={EmergencyContact} />
                <Drawer.Screen name={ScreenNames.notification} component={Notifications} />
                <Drawer.Screen name={ScreenNames.chat} component={LiveChat} />
                <Drawer.Screen name={ScreenNames.create} component={CreateContact}/>
                <Drawer.Screen name={ScreenNames.diagnostic} component={DiagnosticScreen}/>
                <Drawer.Screen name={ScreenNames.editprofile} component={EditProfile}/>
                <Drawer.Screen name={ScreenNames.login} component={Login} />
                <Drawer.Screen name={ScreenNames.addchat} component={AddChat} />
                <Drawer.Screen name={ScreenNames.chatscreen} component={ChatScreen} />
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