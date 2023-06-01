import React, { useLayoutEffect, useState, useEffect } from 'react';
import { View, Text } from 'native-base';
import { Avatar } from 'react-native-elements';
import { Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import styles from '../styles/styles';
import { firebaseConfig } from '../../firebase-config';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, addDoc, onSnapshot, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const ChatScreen = ({ navigation, route }) => {

    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth(app);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Chat',
            headerTitleAlign: "left",
            headerTitle: () => (
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <Avatar
                        rounded
                        source={{ uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" }}
                    />
                    <Text style={{ marginLeft: 10, fontWeight: "700" }}>{route.params.chatName}</Text>
                </View>
            ),
            headerRight: () => (
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: 80,
                        marginRight: 20,
                    }}
                >
                    <TouchableOpacity>
                        <FontAwesome name="video-camera" size={24} color="#0091FB" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="call" size={24} color="#0091FB" />
                    </TouchableOpacity>
                </View>
            ),
        });
    }, [navigation]);

    const sendMessage = async () => {
        Keyboard.dismiss();
        const chatRef = doc(db, 'chats', route.params.id);
        const messagesRef = collection(chatRef, 'messages');

        try {

            // Agrega el mensaje a la subcolección "messages"
            await addDoc(messagesRef, {
                timestamp: serverTimestamp(),
                message: input,
                displayName: auth.currentUser.displayName,
                email: auth.currentUser.email,
            });

            setInput("");
        } catch (error) {
            console.log("Error sending message:", error);
            console.log(auth.currentUser.displayName)
            console.log(auth.currentUser.email)
        }
    };

    //Obtenemos la colección de mensajes y los mostramos como un chat 
    useLayoutEffect(() => {
        let unsubscribe;

        if (route.params && route.params.id) {
            const chatRef = doc(db, 'chats', route.params.id);
            const messagesRef = collection(chatRef, 'messages');

            unsubscribe = onSnapshot(
                query(messagesRef, orderBy('timestamp', 'desc')),
                (snapshot) => {
                    const updatedMessages = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }));
                    setMessages(updatedMessages);
                }
            );
        }

        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        };
    }, [route]);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.containerChatScreen}
                keyboardVerticalOffset={130}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <>
                        <ScrollView contentContainerStyle={{ paddingTop: 15 }}>
                            {messages.map(({ id, data }) => (
                                data.email === auth.currentUser.email ? (
                                    <View key={id} style={styles.reciever}>
                                        <Avatar
                                            position="absolute"
                                            rounded
                                            bottom={-15}
                                            right={-5}
                                            size={30}
                                            source={{
                                                uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                                            }}
                                        />
                                        <Text style={styles.recieverText}>{data.message}</Text>
                                    </View>
                                ) : (
                                    <View style={styles.sender}>
                                        <Avatar
                                            position="absolute"
                                            containerStyle={{
                                                position: "absolute",
                                                bottom: -15,
                                                left: -5,
                                            }}
                                            rounded
                                            bottom={-15}
                                            right={-5}
                                            size={30}
                                            source={{
                                                uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                                            }}
                                        />
                                        <Text style={styles.senderText}>{data.message}</Text>
                                    </View>
                                )
                            ))}
                        </ScrollView>
                        <View style={styles.footerChatScreen}>
                            <TextInput
                                value={input}
                                onChangeText={(text) => setInput(text)}
                                onSubmitEditing={sendMessage}
                                placeholder='Signal Message'
                                style={styles.textInputChatScreen}
                            />
                            <TouchableOpacity
                                onPress={sendMessage}
                                activeOpacity={0.5}
                            >
                                <Ionicons name="send" size={24} color="#0091FB" />
                            </TouchableOpacity>
                        </View>
                    </>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default ChatScreen;
