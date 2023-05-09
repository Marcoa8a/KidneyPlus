import React from "react";
import { View, Text, StyleSheet, Dimensions, Animated, TouchableOpacity } from "react-native";
import Swipeable from 'react-native-gesture-handler/Swipeable'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "../styles/styles";

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
            <View style={styles.containerItemBox}>
                <Text style={styles.titles}>{props.data.name}</Text>
                <Text>{props.data.details}</Text>
                <Text style={styles.hours}>{props.data.hour}</Text>
            </View>
        </Swipeable>
    );
};

export default ItemBox;