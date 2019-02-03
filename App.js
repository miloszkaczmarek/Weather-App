import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TextInput, ScrollView} from 'react-native';
import { observer, inject } from 'mobx-react';
import styles from './styles.js';
import axios from 'axios';


@inject('WeatherStore')
@observer
export default class App extends Component {

  render() {
    const {WeatherStore} = this.props;
    const showResults = this.props.WeatherStore.weather && this.props.WeatherStore.weather.map((e, i) => {

      if(e.dt_txt.indexOf('15') != -1){
        return <Text key={e.dt}>
                <Text style={styles.temp} key={e.dt_txt}>{e.dt_txt.slice(0,-9)}     {Math.round(e.main.temp)} °C{"\n"}</Text>      
                  { WeatherStore.boolean ? <Text key={e.dt} style={styles.info}>Speed wind - {e.wind.speed} km/h{"\n"}</Text> : null }
                  { WeatherStore.boolean ? <Text key={e.dt} style={styles.info}>Clouds - {e.clouds.all} %{"\n"}</Text> : null }
                  { WeatherStore.boolean ? <Text key={e.dt} style={styles.info}>Pressure - {Math.round(e.main.pressure)} hPa{"\n"}</Text> : null }
                  { WeatherStore.boolean ? <Text key={e.dt} style={styles.info}>Humidity - {e.main.humidity}%{"\n"}</Text> : null }
                <Text key={e.dt} onPress={WeatherStore.showInfo} style={styles.more}>More info{"\n"}</Text>
        </Text>
      }
    })
    
    return (
      <ScrollView>
        <View style={styles.container}>
          <View><Text>{showResults}</Text></View>
            <TextInput
            style={styles.input}
            placeholder="Your city"
            value={this.props.WeatherStore.value}
            onChangeText={this.props.WeatherStore.handleText}
            />
        </View>
      </ScrollView>
    );
  }
}
