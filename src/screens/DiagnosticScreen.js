import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Dimensions, ScrollView, } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Box, Avatar, Center, } from 'native-base';
import styles from '../styles/styles';

const MyBarChart = () => {
    return (
        <>
            <BarChart
                data={{
                    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                    datasets: [
                        {
                            data: [30, 60, 28, 80, 99, 43],
                        },
                    ],
                }}
                width={Dimensions.get('window').width * 0.9}
                height={220}
                chartConfig={{
                    backgroundColor: '#fff',
                    backgroundGradientFrom: '#fff',
                    backgroundGradientTo: '#fff',
                    decimalPlaces: 2,
                    color: (opacity = 1) => `rgba(0, 150, 199, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                }}
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
        </>
    );
};

const App = () => {
    return (
        <SafeAreaView style={styles.safeA}>
            <ScrollView>
                <View style={styles.containerDiagnostic}>
                    <View>
                        <Box mt="5" alignItems="center">
                            <Box w="100%" maxWidth="100px">
                                <Center>
                                    <Avatar bg="amber.500" source={{
                                        uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                    }} size="2xl">
                                        NB
                                        <Avatar.Badge badgeContent={4}>
                                        </Avatar.Badge>
                                    </Avatar>
                                </Center>
                            </Box>
                        </Box>
                        <Text style={styles.header}>Monthly Progress</Text>
                        <MyBarChart />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default App;