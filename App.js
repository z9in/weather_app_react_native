import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import { WebView } from "react-native-webview";
import { useEffect, useState, useRef } from "react";

export default function App() {
  const [latlng, setLatlng] = useState([37.3925, 126.9269]);
  const [data, setData] = useState([
    {
      name: "name",
      main: "main",
      degree: "degree",
      weather_img: "etc",
    },
  ]);
  const [date, setDate] = useState("시간");
  useEffect(() => {
    const api_key = "132c4819a3edd9d062256ad974f08b29";
    let city = "anyang-si";
    const apiCall = `https://api.openweathermap.org/data/2.5/weather?lat=${Number(
      latlng[0]
    )}&lon=${Number(latlng[1])}&appid=${api_key}`;

    fetch(apiCall)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data);
        return weatherChange(data);
      });
    function weatherChange(data) {
      // console.log(data);
      let weather = data.weather[0];
      // console.log(weather);
      let weather1;
      if (
        weather.main == "Clear" ||
        weather.main == "Clouds" ||
        weather.main == "Rain" ||
        weather.main == "Snow" ||
        weather.main == "Thunderstorm"
      ) {
        weather1 = weather.main;
      } else {
        weather1 = "etc";
      }
      // console.log("weather1=", weather1);
      let new_weather = [
        {
          name: data.name,
          main: weather.main,
          degree: `${Math.floor((data.main.temp - 273.15) * 10) / 10}°C`,
          weather_img: weather1,
        },
      ];
      setData(new_weather);
    }
    let date = new Date();
    let todays = `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일`;
    console.log(date.getMilliseconds());
    setDate(todays);
  }, [latlng]);

  return (
    <View style={styles.container}>
      <StatusBar
        barstyle={"light-content"}
        backgroundColor={"#ccc"}
        translucent={false}
        hidden={false}
      />
      <Text style={styles.title}>오늘의 날씨</Text>
      <View style={styles.mapBox}>
        <WebView
          source={{
            uri: "https://web-kakaomaps-422t024lbonwoan.gksl2.cloudtype.app/",
          }}
          onMessage={(e) => {
            console.log(e.nativeEvent.data);
            let geoEl = [];
            geoEl = e.nativeEvent.data.split(",");
            console.log(geoEl);
            setLatlng([geoEl[0], geoEl[1]]);
          }}
          // javaScriptEnabled={true}
        />
      </View>

      <View style={styles.detailsBox}>
        <Text style={styles.date}>{date}</Text>
        <View style={styles.boxes}>
          <Text style={styles.details}>{data[0].name}</Text>
          <Text style={styles.details}>{data[0].degree}</Text>
        </View>
        <View style={styles.boxes}>
          <Text style={styles.details}>{data[0].main}</Text>
          <View style={styles.details}>
            <Image
              style={styles.img}
              source={{
                uri: `https://z9in.github.io/gilmaroimages/weather_img/${data[0].weather_img}.png`,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2561a1",
  },
  mapBox: {
    width: "100%",
    height: "50%",
    backgroundColor: "red",
    borderWidth: 2,
    // borderColor: "red",
  },
  detailsBox: {
    width: "100%",
    height: "40%",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    // borderWidth: 1,
  },
  boxes: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 400,
    marginTop: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 20,
    textAlign: "center",
    color: "white",
  },
  date: {
    fontSize: 30,
    fontWeight: "normal",
    marginBottom: 10,
    textAlign: "center",
    color: "white",
  },
  details: {
    textAlign: "center",
    width: 150,
    fontSize: 26,
    fontWeight: "normal",
    color: "white",
  },
  img: {
    width: 50,
    height: 50,
    // backgroundColor: "black",
    marginLeft: 50,
  },
});
