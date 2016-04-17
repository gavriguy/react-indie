import React from 'react';
import ReactDOM from 'react-dom';
import indie from '../src/index.js';
import { SimpleComponent } from './SimpleComponent.js';

// helpers

function mockAjaxRequest() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Loaded title');
    }, 1000);
  });
}

function mockErrorAjaxRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Some server error'));
    }, 1000);
  });
}

// Widget1
// * Widget get default data
// * Widgets load data from the server

const widget1propsConfig = {
  title: ['W1 Loading...', mockAjaxRequest()],
  subtitle: ['Please wait', 'Loaded subtitle'],
  bgColor: ['#ccc', '#1bc98e'],
};

const Widget1 = indie(SimpleComponent, widget1propsConfig);

// Widget2
// * Widget is set with default data
// * Widget fails to load remote data from the server
// * Widget handels error with hard coded data

const widgetr2propsConfig = {
  title: ['W2 Loading...', mockErrorAjaxRequest()],
  subtitle: ['Please wait', 'Loaded subtitle'],
  bgColor: ['#ccc', '#1bc98e', 'red'],
};
const Widget2 = indie(SimpleComponent, widgetr2propsConfig);

// Widget3
// * Widget is set with default data
// * Widget fails to load remote data from the server
// * Widget handels error with error data sent from the server.

const widgetr3propsConfig = {
  title: ['W3 Loading...', mockErrorAjaxRequest(), 'Something went wrong...'],
  subtitle: ['Please wait', 'Loaded subtitle', (err) => (err.message)],
  bgColor: ['#ccc', '#1bc98e', 'red'],
};
const Widget3 = indie(SimpleComponent, widgetr3propsConfig);

ReactDOM.render(
  (<div>
    <h1>Example Page</h1>
    <Widget1 />
    <Widget2 />
    <Widget3 />
  </div>),
  document.getElementById('app')
);
