import React, { useState } from "react";
import {
    Box,
    Text,
    Pressable,
    Heading,
    IconButton,
    Icon,
    HStack,
    Avatar,
    VStack,
    Spacer,
    Center,
    ScrollView,
    StatusBar,
} from "native-base";
import { SwipeListView } from "react-native-swipe-list-view";
import { MaterialIcons, Ionicons, Entypo, AntDesign } from "@expo/vector-icons";
import screen from "../utils/screenNames";

function Basic({ navigation }) {
    const data = [
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            name: "Doctor García",
            number: "4492229163",
            avatarUrl:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            name: "Novia",
            number: "4491298034",
            avatarUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
        },
        {
            id: "58694a0f-3da1-471f-bd96-145571e29d72",
            name: "Ambulancia",
            number: "911",
            avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
        },
        {
            id: "68694a0f-3da1-431f-bd56-142371e29d72",
            name: "Policia",
            number: "899",
            avatarUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
        },
        {
            id: "28694a0f-3da1-471f-bd96-142456e29d72",
            name: "Hospital",
            number: "9707056.",
            avatarUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
        },
    ];
    const [listData, setListData] = useState(data);

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = [...listData];
        const prevIndex = listData.findIndex((item) => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setListData(newData);
    };

    const onRowDidOpen = (rowKey) => {
        console.log("This row opened", rowKey);
    };

    const renderItem = ({ item, index }) => (
        <Box>
            <Pressable
                onPress={() => navigation.navigate(screen.chat)}
                _dark={{
                    bg: "coolGray.800",
                }}
                _light={{
                    bg: "white",
                }}
            >
                <Box pl="4" pr="5" py="2">
                    <HStack alignItems="center" space={3}>
                        <Avatar
                            size="48px"
                            source={{
                                uri: item.avatarUrl,
                            }}
                        />
                        <VStack>
                            <Text
                                color="coolGray.800"
                                _dark={{
                                    color: "warmGray.50",
                                }}
                                bold
                            >
                                {item.name}
                            </Text>
                            <Text
                                color="coolGray.600"
                                _dark={{
                                    color: "warmGray.200",
                                }}
                            >
                                {item.number}
                            </Text>
                        </VStack>
                        <Spacer />
                    </HStack>
                </Box>
            </Pressable>
        </Box>
    );

    const handleEdit = () => {
        navigation.navigate(screen.create);
    };

    const renderHiddenItem = (data, rowMap) => (
        <HStack flex="1" pl="1">
            <Pressable
                w="70"
                ml="auto"
                cursor="pointer"
                bg="info.500"
                justifyContent="center"
                onPress={() => handleEdit()}
                _pressed={{
                    opacity: 0.5,
                }}
            >
                <VStack alignItems="center" space={2}>
                    <Icon as={<Entypo name="edit" />} size="xs" color="white" />
                    <Text fontSize="xs" fontWeight="medium" color="white">
                        Edit Contact
                    </Text>
                </VStack>
            </Pressable>
            <Pressable
                w="70"
                cursor="pointer"
                bg="red.500"
                justifyContent="center"
                onPress={() => deleteRow(rowMap, data.item.key)}
                _pressed={{
                    opacity: 0.5,
                }}
            >
                <VStack alignItems="center" space={2}>
                    <Icon as={<MaterialIcons name="delete" />} color="white" size="xs" />
                    <Text color="white" fontSize="xs" fontWeight="medium">
                        Delete
                    </Text>
                </VStack>
            </Pressable>
        </HStack>
    );

    return (
        <SwipeListView
            data={listData}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            rightOpenValue={-130}
            previewRowKey={"0"}
            previewOpenValue={-40}
            previewOpenDelay={3000}
            onRowDidOpen={onRowDidOpen}
        />
    );
}

function AppBar({ navigation }) {
    return <>
        <StatusBar bg="#3700B3" barStyle="light-content" />
        <Box safeAreaTop bg="violet.600" />
        <HStack bg="violet.600" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
            <HStack alignItems="center" px={1}>
                <IconButton onPress={() => navigation.navigate(screen.home)} icon={<Icon size="md" as={AntDesign} name="arrowleft" color="white" />} />
                <Text color="white" fontSize="20" fontWeight="bold">
                    Emergency Contact
                </Text>
            </HStack>
        </HStack>
    </>;
}

function Emergency(props) {
    const navigation = props.navigation
    const [mode, setMode] = useState("Basic");
    return (
        <>
            <Center>
                <Box
                    _dark={{
                        bg: "coolGray.800",
                    }}
                    _light={{
                        bg: "white",
                    }}
                    py={5}
                    // flex="1"
                    // flexDirection={'column'}
                    safeAreaTop
                    maxW="1200px"
                    w="100%"
                >
                    {/* <AppBar navigation={navigation}/> */}
                    <Basic navigation={navigation} />
                </Box>
            </Center>
            <Icon
                as={Ionicons}
                name="add-circle"
                color="violet.500"
                size={62}
                position="absolute"
                bottom={5}
                right={5}
                zIndex={1}
                onPress={() => navigation.navigate(screen.create)}
            />
        </>
    );
}

export default Emergency;