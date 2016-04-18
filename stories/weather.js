import React from 'react';
import { storiesOf } from '@kadira/storybook';
import axios from 'axios';
import { Weather } from './components/Weather';
import indie from '../src/index.js';

storiesOf('Weather', module)
  .add('Basic Example', () => {
    const APPID = 'f08136975f949dad9ee0192e087d5397';
    const WEATHER_END_POINT =
      `http://api.openweathermap.org/data/2.5/weather?q=New%20York,us&units=metric&appid=${APPID}`;
    let weatherData = {};
    function getNewYorkWeather() {
      if (weatherData.main) return weatherData;
      return axios.get(WEATHER_END_POINT)
      .then(({ data }) => {
        weatherData = data;
        return {
          weatherDescription: data.weather[0].main,
          temp: data.main.temp,
        };
      });
    }
    function getNewYorkWeatherDesc() {
      return getNewYorkWeather()
        .then(({ weatherDescription }) => (weatherDescription));
    }
    function getNewYorkWeatherTemp() {
      return getNewYorkWeather()
        .then(({ temp }) => (Math.round(temp)));
    }

    const propsConfig = {
      City: ['New York'],
      weatherDescription: ['Loading...', getNewYorkWeatherDesc()],
      temp: ['--', getNewYorkWeatherTemp()],
    };
    const Widget = indie(Weather, propsConfig);
    return (<Widget />);
  });
