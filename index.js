import {AppRegistry} from 'react-native';
import React, {Component} from 'react';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'mobx-react'

import WeatherStore from './WeatherStore';

const Example = () => {
	return <Provider WeatherStore={WeatherStore}><App/></Provider>
}

AppRegistry.registerComponent(appName, () => Example);
