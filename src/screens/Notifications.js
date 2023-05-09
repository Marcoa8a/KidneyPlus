import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, FlatList, Text } from "react-native";
import ItemBox from "../components/ItemBox";
import { AppBar } from "@react-native-material/core";


const data = [
    { id: 1, name: "Reminder", details: "Don't forget to do your daily test.", hour: "Now" },
    { id: 2, name: "Message", details: "Dr. Garcia has sent you a message.", hour: "Today at the 09:00 a.m." },
    { id: 3, name: "Warning", details: "The real-time conections has been lost.", hour:"Yesterday at the 05:23p.m." },
];



const Notifications = () => {

    const [lists, setLists] = useState(data);

    const deleteItem = index => {
        const arr = [...lists];
        arr.splice(index, 1);
        setLists(arr);
    }


    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={lists}
                renderItem={({ item, index }) => {
                    return <ItemBox data={item} handleDelete={() => deleteItem(index)} />;
                }}
                ItemSeparatorComponent={() => {
                    return <View style={styles.seperatorLine}></View>
                }}
            />
        </SafeAreaView>
    );
};

export default Notifications;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    seperatorLine: {
        height: 1,
        padding: 2,
    }
});

