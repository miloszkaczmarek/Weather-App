import { observable, action, computed } from 'mobx';
import { Alert } from 'react-native';
import axios from 'axios';

class WeatherStore{
    @observable value = '';
    @observable weather = '';
    @observable boolean = false;

    handleText = (text) => {
      this.value = text;
      
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.value}&units=metric&appid=65a2cc41c33a5145f4b994f199c7cb19`)
    	.then((response) => {
      		this.weather = response.data.list;
  		})
    	.catch(function (error) {
    		console.log(error);
  		});
    }

    showInfo = (e) => {
    	this.boolean = !this.boolean
    }
}

const store = new WeatherStore();

export default store