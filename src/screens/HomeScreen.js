import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Dimensions, Image, Animated, PermissionsAndroid } from 'react-native';
import { VStack, Input, Icon, Center, Box, Divider, Heading, FlatList, ScrollView } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
//import MapView from 'react-native-maps';
import styles from '../styles/styles';
import screen from '../utils/screenNames';

const images = [
  "https://images.unsplash.com/photo-1532377611310-4564e426e7c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2187&q=80",
  "https://images.unsplash.com/photo-1644054870786-0d9bd2613973?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
];

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const SPACE_CONTAINER = width * 0.7;
const SPACE = 10;
const SIDE_SPACE = (width - SPACE_CONTAINER) / 2;

const HomeScreen = () => {
  const [region, setRegion] = useState(null);
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location permit',
          message: 'Access to your location is required to show you the nearest hospitals.',
          buttonNeutral: 'Ask the question later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if(granted === PermissionsAndroid.RESULTS.GRANTED) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setRegion({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            });
            fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${position.coords.latitude},${position.coords.longitude}&radius=5000&type=hospital&key=API_KEY`)
            .then((response) => response.json())
            .then((data) => {
              setHospitals(data.results);
            });
          },
          (error) => console.warn(error.message),
          {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const scrollX = React.useRef(new Animated.Value(0)).current;
  return <ScrollView>
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={styles.titleHome}>Hello User 👋</Text>
      <VStack w="100%" space={5} alignSelf="center">
        <Input placeholder="Search medical" width="80%"
          borderRadius="4" py="3" px="1" fontSize="14" alignSelf="center" mt="20" bgColor={'coolGray.200'}
          InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.500"
            as={<MaterialIcons name="search" />} />} />
      </VStack>
      <Text style={styles.titleHome}>Tips</Text>
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        data={images}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 100, paddingHorizontal: SIDE_SPACE, }}
        decelerationRate={0}
        snapToInterval={SPACE_CONTAINER}
        scrollEventThrottle={16}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => {

          const inputRange = [
            (index - 1) * SPACE_CONTAINER,
            index * SPACE_CONTAINER,
            (index + 1) * SPACE_CONTAINER,
          ];

          const outputRange = [0, -50, 0];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange,
          });

          return (
            <View style={{ width: SPACE_CONTAINER }}>
              <Animated.View
                style={{
                  marginHorizontal: SPACE,
                  padding: SPACE,
                  borderRadius: 34,
                  backgroundColor: "#fff",
                  alignItems: "center",
                  transform: [{ translateY }],
                }}
              >
                <Image source={{ uri: item }} style={styles.posterImage} />
              </Animated.View>
            </View>
          );
        }}
      />
      <Text style={styles.titleHome}>Nearest hospitals</Text>
      <VStack style={{paddingTop: 50, alignItems: 'center', justifyContent: 'center'}}>
      {/*region && (
        <MapView
          style={styles.map}
          region={region}
        >
          {hospitals.map((hospital, index) => (
            <MapView.Marker
              key={index}
              coordinate={{
                latitude: hospital.geometry.location.lat,
                longitude: hospital.geometry.location.lng,
              }}
              title={hospital.name}
              description={hospital.vicinity}
            />
          ))}
        </MapView>
            )*/}
      </VStack>      
    </View>
  </ScrollView>;
};

export default HomeScreen;