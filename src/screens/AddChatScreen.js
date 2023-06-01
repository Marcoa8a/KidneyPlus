import React, { useLayoutEffect, useState } from 'react';
import { View, Input, Button } from 'native-base';
import { Icon } from 'react-native-elements';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { firebaseConfig } from '../../firebase-config';
import styles from "../styles/styles"

const AddChatScreen = ({ navigation }) => {
    const [input, setInput] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Add a new chat',
        });
    }, [navigation]);

    const createChat = async () => {
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);

        await addDoc(collection(db, 'chats'), {
            chatName: input,
        }).then(() => {
            navigation.goBack();
        }).catch(error => alert(error));
    };

    return (
        <View style={styles.containerAddChat}>
            <Input
                placeholder='Enter a chat name'
                value={input}
                onChangeText={(text) => setInput(text)}
                onSubmitEditing={createChat}
                leftIcon={<Icon name='wechat' type='antdesign' size={24} color='black' />}
            />
            <Button onPress={createChat} title="Create new chat" >Create new chat</Button>
        </View>
    );
};

export default AddChatScreen;
