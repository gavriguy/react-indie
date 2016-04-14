import React from 'react';
import indie from '../../../src/index.jsx';

const MyComponent = (props) => {
  const styles = {
    wrapper: {
      padding: 10,
      fontFamily: 'helvetica',
      backgroundColor: props.bgColor,
      color: '#fff',
      maxWidth: 400,
      borderRadius: 5,
    },
  };
  return (
  <div style={styles.wrapper}>
    <h1>{ props.title }</h1>
    <p>{ props.subtitle }</p>
  </div>
);};

function mockAjaxRequest() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Loaded title');
    }, 2000);
  });
}

export default function () {
  const propsConfig = {
    title: ['Loading...', mockAjaxRequest()],
    subtitle: ['Please wait', 'Loaded subtitle'],
    bgColor: ['#ccc', '#1bc98e'],
  };
  return indie(MyComponent, propsConfig);
}
