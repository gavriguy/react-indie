import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { SimpleComponent } from './components/SimpleComponent';
import indie from '../src/index.js';


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

storiesOf('API', module)
  .add('Basic Example', () => {
    const propsConfig = {
      title: ['Loading...', mockAjaxRequest()],
      subtitle: ['Please wait', 'Loaded subtitle'],
      bgColor: ['#ccc', '#1bc98e'],
    };
    const Widget = indie(SimpleComponent, propsConfig);
    return (<Widget />);
  })
  .add('Handle Server error', () => {
    const propsConfig = {
      title: ['Loading...', mockErrorAjaxRequest(), 'Something went wrong...'],
      subtitle: ['Please wait', 'Loaded subtitle', 'Unknown error'],
      bgColor: ['#ccc', '#1bc98e', 'red'],
    };
    const Widget = indie(SimpleComponent, propsConfig);
    return (<Widget />);
  })
  .add('Handle Server error + show server error message', () => {
    const propsConfig = {
      title: ['Loading...', mockErrorAjaxRequest(), 'Something went wrong...'],
      subtitle: ['Please wait', 'Loaded subtitle', (err) => (err.message)],
      bgColor: ['#ccc', '#1bc98e', 'red'],
    };
    const Widget = indie(SimpleComponent, propsConfig);
    return (<Widget />);
  })
  .add('Handle onResolve', () => {
    function mockOnResolve() {
      return (props, component) => {
        let num = props.subtitle;
        setInterval(() => {
          component.setState({ subtitle: num++ });
        }, 1000);
      };
    }
    const propsConfig = {
      title: ['Loading...', mockAjaxRequest()],
      subtitle: ['Please wait', 1],
      bgColor: ['#ccc', '#1bc98e'],
    };
    const Widget = indie(SimpleComponent, propsConfig, mockOnResolve);
    return (<Widget />);
  });
