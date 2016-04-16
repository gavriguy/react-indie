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

// Widget1
// * Widget get default data
// * Widgets load data from the server

const widget1propsConfig = {
  title: ['Loading...', mockAjaxRequest()],
  subtitle: ['Please wait', 'Loaded subtitle'],
  bgColor: ['#ccc', '#1bc98e'],
};

const Widget1 = indie(SimpleComponent, widget1propsConfig);

ReactDOM.render(
  (<div>
    <h1>Example Page</h1>
    <Widget1 />
  </div>),
  document.getElementById('app')
);
