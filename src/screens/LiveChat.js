import React, { useLayoutEffect, useEffect, useState } from 'react';
import { SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { ScrollView, View } from 'native-base';
import { SimpleLineIcons } from '@expo/vector-icons';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { firebaseConfig } from '../../firebase-config';
import styles from '../styles/styles';
import screen from "../utils/screenNames";
import Chat from '../components/chat';

const LiveChat = ({ navigation }) => {
  const [chats, setChats] = useState([]);
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  //Se obtienen los cambios ocurridos en el chat y se actualiza la lista cuando haya cambios
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'chats'), (snapshot) => {
      setChats(snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      })));
    });

    return unsubscribe;
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
            left: "80%",
          }}
        >
          <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate(screen.addchat)}>
            <SimpleLineIcons name="pencil" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);
  
  const enterChat = (id, chatName) => {
    navigation.navigate(screen.chatscreen, { // Reemplaza "ChatScreen" con el nombre correcto de la pantalla a la que deseas navegar
      id,
      chatName,
    });
  };  

  //Renderiza el componente para cada chat según su id
  /*const renderChat = ({ item }) => {
    const { id, data: { chatName } } = item;
    return <Chat key={id} id={id} chatName={chatName} onPress={() => enterChat(id, chatName)} />;
  };*/

  return (
    <SafeAreaView>
      <ScrollView style={styles.containerLiveChat}>
        {chats.map(({id, data: { chatName } }) => (
          <Chat key={id} id={id} chatName={chatName} enterChat={enterChat} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default LiveChat;
