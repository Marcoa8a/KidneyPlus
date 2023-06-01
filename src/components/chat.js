import { List } from 'native-base';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'
import { firebaseConfig } from '../../firebase-config';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, addDoc, onSnapshot, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const Chat = ({ id, chatName, enterChat }) => {

  const [chatMessages, setChatMessages] = useState([]);
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  useEffect(() => {
    let unsubscribe;
  
    const chatRef = doc(db, 'chats', id);
    const messagesRef = collection(chatRef, 'messages');
  
    unsubscribe = onSnapshot(
      query(messagesRef, orderBy('timestamp', 'desc')),
      (snapshot) => {
        const Messages = snapshot.docs.map((doc) => ({
          data: doc.data(),
        }));
        setChatMessages(Messages);
      }
    );
  
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);   

  return (
    <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
      <Avatar
        rounded
        source={{
          uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          {chatName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
          {chatMessages?.[0]?.data?.displayName}: {chatMessages?.[0]?.data?.message}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default Chat;