import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, Button, Pressable, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { VStack, Stack, Center } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import screen from '../utils/screenNames';
import styles from '../styles/styles';

const App = ({navigation}) => {
    return (
        <ScrollView>
            <View style={styles.containerReal}>
                <View>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 15 }}>
                        <View style={{ flex: '1', justifyContent: 'center' }}>
                            <Text>Aguascalientes, Mx.</Text>
                        </View>
                        <Text>Friday 14th, 2023.</Text>
                    </View>
                    <Text style={styles.textT}>
                        Real-Time Analysis
                    </Text>
                    <Text style={{ textAlign: 'center', flex: 1, padding: 8 }}>
                        Here is shown the range and amount of protein found in your urine
                    </Text>
                    <LineChart data={{
                        labels: ['10', '20', '30', '40', '50', '60',],
                        datasets: [{
                            data: [30, 60, 28, 80, 99, 43],
                            strokeWidth: 6,
                        },],
                    }}
                        width={Dimensions.get('window').width * 0.7}
                        height={220}
                        chartConfig={{
                            backgroundColor: '#fff',
                            backgroundGradientFrom: '#fff',
                            backgroundGradientTo: '#fff',
                            color: (opacity = 1) => `rgba(0, 150, 199, ${opacity})`,
                            style: {
                                borderRadius: 16,
                            },
                        }}
                        style={{
                            marginHorizontal: 10,
                            borderRadius: 16,
                            alignItems: 'center',
                            margin: 15,
                        }}
                    />
                    <Stack direction="row" mb="2.5" mt="1.5" space={2} alignSelf='center'>
                        <Center marginTop={2} size="5" bg="primary.400" rounded="sm" _text={{
                            color: "warmGray.50",
                            fontWeight: "medium"
                        }} shadow={"3"}>
                        </Center>
                        <Center size="10" rounded="sm" _text={{
                            fontWeight: "medium",
                            fontSize: 16,
                        }}>
                            Protein
                        </Center>
                    </Stack>
                    <Text style={{ textAlign: 'center', flex: 1, padding: 6 }}>
                        The presence of protein in the urine is toxic to the kidney damage.
                    </Text>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity title='Update' style={styles.btn_Update} onPress={() => navigation.navigate(screen.realTime)}>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#0091FB', '#000AFB']} style={styles.gradient}>
                                <Text style={styles.btn_Text_RT}> Update </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <Pressable title='Diagnostic' style={styles.btn_Diagnostic} onPress={() => navigation.navigate(screen.diagnostic)}>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#0091FB', '#000AFB']} style={styles.gradient}>
                                <Text style={styles.btn_Text_RT}> Diagnostic </Text>
                            </LinearGradient>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default App;