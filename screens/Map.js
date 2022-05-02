import React , {Component} from 'react';

import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {TouchableOpacity, Image, View, Text, StyleSheet, SafeAreaView, 
    ActivityIndicator, Dimensions} from 'react-native';
import PlayerWidget from '../components/PlayerWidget';   


const origin = {latitude: 40.444663, longitude: -79.943918};
const destination = {latitude: 40.427663, longitude: -79.927918};
const GOOGLE_MAPS_APIKEY = 'AIzaSyC_wDiK5V18JUJe4bW78D-yMyRPweHCqPw';
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 40.444663;
const LONGITUDE = -79.943918;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function Map() {
    return (
      <View style={styles.container}>
          <MapView style={styles.map} 
         initialRegion={{
                    latitude: LATITUDE,
                    longitude: LONGITUDE,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,               
                }}>
        
                    <MapViewDirections
                      origin={origin}
                      destination={destination}
                      apikey={GOOGLE_MAPS_APIKEY}
                    />
            </MapView>
        
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });