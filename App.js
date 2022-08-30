import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const { width:SCREEN_WIDTH } = Dimensions.get('window');
const API_KEY = "5e59dd9400246d79ba7682638520b651";

const icons = {
  Clouds: "weather-cloudy",
  Rain: "weather-rainy",
  Clear: "weather-sunny",
  Atmosphere: "weather-fog",
  Snow: "weather-snowy",
  Drizzle: "weather-partly-rainy",
  Thunderstorm: "weather-lightning-rainy",

}

export default function App() {
  const [city, setCity] = useState("Loading..");
  //const [location, setLocation] = useState();
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);
  const ask = async() => {
    const {granted} = await Location.requestForegroundPermissionsAsync();
    if (!granted) { //위치 정보 이용 허가받지 못했을 때
      setOk(false);
    }

    const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync({accuracy:5});
    
    const location = await Location.reverseGeocodeAsync({latitude, longitude}, {useGoogleMaps: false});

    setCity(location[0].city);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`);
    const json = await response.json();
    setDays(json.daily);
  };

  useEffect(() => {
    ask();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView 
      horizontal 
      pagingEnabled 
      //indicatorStyle="blue"
      showsHorizontalScrollIndicator="false"
      contentContainerStyle={styles.weather}>
        {days.length === 0 ? (
        <View style={styles.day}>
          <ActivityIndicator color="white" style={{marginTop:10}} size="large" />
        </View>
        ) : (
          days.map((day, index) => 
            <View key={index} style={styles.day}>
              <View style={styles.weatherBox}>
                <Text style={styles.temp}>{parseFloat(day.temp.max).toFixed(1)}</Text>
                <MaterialCommunityIcons name={icons[day.weather[0].main]} size={45} color="white" />
                <Text style={styles.tempMin}>min {parseFloat(day.temp.min).toFixed(1)}</Text>
              </View>            
            </View>
          )
        )}      
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#389ef8"
  },
  city: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "500",
  },
  weatherBox: {
    display: "flex",
    alignItems: "center",
  },
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp: {
    marginTop: 20,   
    fontSize: 72,
    color: "#fff",
  },
  tempMin: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 18,
    color: "#fff",
  },
  desc: {
    marginTop: 10,
    fontSize: 42,
  },
  tinyText: {
    fontSize: 16,
    color: "#fff",
  }
})