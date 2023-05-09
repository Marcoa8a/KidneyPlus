import React from "react";
import { View, Text, StyleSheet, Dimensions, Animated, TouchableOpacity } from "react-native";
import Swipeable from 'react-native-gesture-handler/Swipeable'
import Icon from 'react-native-vector-icons/FontAwesome';

const SCREEN_WIDTH = Dimensions.get('window').width;


const ItemBox = (props) => {

    const leftSwipe = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        });
        return (
            <TouchableOpacity onPress={props.handleDelete} activeOpacity={0.6}>
                <View style={styles.deleteBox}>
                    <Icon name="check" size={35} color="#fff" />
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <Swipeable renderLeftActions={leftSwipe}>
            <View style={styles.container}>
                <Text style={styles.titles}>{props.data.name}</Text>
                <Text>{props.data.details}</Text>
                <Text style={styles.hours}>{props.data.hour}</Text>
            </View>
        </Swipeable>

    );
};

export default ItemBox;

const styles = StyleSheet.create({
    container: {
        height: 80,
        widht: SCREEN_WIDTH,
        /*backgroundColor: '#00B4D8',*/
        borderColor: '#00B4D8',
        borderWidth: 2,
        padding: 16,
        borderRadius: 15,
        marginHorizontal: 10,
        marginTop: 5,
    },
    titles: {
        fontWeight: 'bold',
        fontSize: 16,
        fontStyle: 'italic'
    },
    hours:{
        fontSize: 10,
        color: "gray",
        textAlign: "right"
    },
    deleteBox: {
        backgroundColor: 'green',
        justifyContent: 'center',
        width: 100,
        alignItems: 'center',
        height: 80,
        borderRadius: 15,
        padding: 16,
        marginTop: 5,
    },
});

