import React from 'react';
import { storiesOf } from '@kadira/storybook';
import axios from 'axios';
import { Weather } from './components/Weather';
import indie, { get } from '../src/index.js';

storiesOf('Weather', module)
  .add('Basic Example', () => {
    function getNewYorkWeather() {
      const APPID = 'f08136975f949dad9ee0192e087d5397';
      const WEATHER_END_POINT =
      `http://api.openweathermap.org/data/2.5/weather?q=New%20York,us&units=metric&appid=${APPID}`;
      return axios.get(WEATHER_END_POINT);
    }
    // If a few proprties get their data from the same promise,
    // initiate the promise in advance and assign it to a varibale.
    // This way the promise will be called only once.
    //
    // If you want to get a spesific value from the promise result.
    // You can use react-indie's `deco` util as shown below;
    const getServerData = getNewYorkWeather();
    const propsConfig = {
      City: ['New York'],
      weatherDescription: ['Loading...', get(getServerData, 'data.weather[0].main')],
      temp: ['--', get(getServerData, 'data.main.temp')],
    };
    const Widget = indie(Weather, propsConfig);
    return (<Widget />);
  });
