import React from "react";
import { View } from "react-native";
import {
    Box,
    Button,
    Input,
    Icon,
    Stack,
    VStack,
    Avatar,
    Center,
    FormControl,
    WarningOutlineIcon,
    StatusBar,
    HStack,
    IconButton,
    Text,
    Pressable,
    ScrollView,
} from "native-base";
import {
    MaterialIcons,
    Ionicons,
    Entypo,
    AntDesign,
    FontAwesome,
    FontAwesome5,
    Feather,
} from "@expo/vector-icons";
import { Message } from "../components/chat";

const Avatars = {
    patient:
        "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    doctor:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
};

const ChatMockupData = [
    {
        message: "Hi doctor",
        time: "8:20 PM",
    },
    {
        message:
            "Hi Kevin, I saw that you have major kidney problems., I changed you to new medications.,",
        time: "8:24 PM",
        self: true,
    },
    {
        message: "very well doctor",
        time: "8:25 PM",
    },
    {
        message: "You are welcome kevin I will be checking on your progress, good evening,",
        time: "8:27 PM",
        self: true,
    },
    {
        message: "Thanks doctor",
        time: "8:30 PM",
    },
];


const Appbar = () => {
    return (
        <>
            <StatusBar bg="#3700B3" barStyle="light-content" />
            <Box safeAreaTop bg="violet.600" />
            <HStack
                bg="violet.600"
                px="1"
                py="3"
                justifyContent="space-between"
                alignItems="center"
                w="100%"
            >
                <HStack alignItems="center">
                    <IconButton
                        onPress={() => navigation.navigate(screen.emergency)}
                        icon={
                            <Icon size="md" as={AntDesign} name="arrowleft" color="white" />
                        }
                    />

                    <Avatar
                        mr="5"
                        bg="amber.500"
                        source={{
                            uri: Avatars.doctor,
                        }}
                        size="sm"
                    >
                        NB
                        <Avatar.Badge bg="green.500" />
                    </Avatar>
                    <Text color="white" fontSize="20" fontWeight="bold">
                        Doctor García
                    </Text>
                </HStack>
                <HStack>
                    <IconButton
                        icon={
                            <Icon as={Ionicons} name="call-sharp" size="sm" color="white" />
                        }
                    />
                    <IconButton
                        icon={
                            <Icon as={FontAwesome5} name="video" size="sm" color="white" />
                        }
                    />
                    <IconButton
                        icon={
                            <Icon
                                as={Entypo}
                                name="info-with-circle"
                                size="sm"
                                color="white"
                            />
                        }
                    />
                </HStack>
            </HStack>
        </>
    );
};

const Chat = () => {
    return (
        <ScrollView>
            <VStack my="2" mx="3">
                {ChatMockupData.map((data, index) => (
                    <Message
                        key={index}
                        avatar={data.self ? Avatars.doctor : Avatars.patient}
                        message={data.message}
                        time={data.time}
                        self={data.self}
                    />
                ))}
            </VStack>
        </ScrollView>
    );
};

const MessageBox = () => {
    return (
        <Stack space={4} w="100%" alignItems="center">
            <Input
                borderColor={"violet.400"}
                borderWidth={"2"}
                w={{
                    base: "95%",
                    md: "25%",
                }}
                InputRightElement={
                    <>
                        <Pressable>
                            <Icon
                                as={<Feather name="paperclip" />}
                                size={5}
                                mr="2"
                                color="violet.400"
                            />
                        </Pressable>

                        <Pressable>
                            <Icon
                                as={<FontAwesome name="send" />}
                                size={5}
                                mr="2"
                                color="violet.400"
                            />
                        </Pressable>
                    </>
                }
                placeholder="Enter a message"
            />
        </Stack>
    );
};

const ChatScreen = ({ navigation }) => {
    return (
        <VStack>
            <Appbar />
            <Chat />
            <MessageBox />
        </VStack>
    );
};

export default ChatScreen;