import React, { PropTypes } from 'react';
import Paper from 'material-ui/lib/paper';

export const Weather = (props) => {
  console.log(props);
  const style = {
    container: {
      width: 400,
      padding: 15,
      background: '#4A90E2',
      color: '#fff',
      fontWeight: 100,
    },
    inner: {
      marginTop: '0.5em',
    },
    heading: {
      fontSize: 40,
    },
  };
  return (
    <Paper style={ style.container } zDepth={1}>
      <div style={ style.heading }>New York</div>
      <p style={ style.inner }>{ props.weatherDescription }</p>
      <div style={style.heading}>
        { props.temp }<small>°C</small>
      </div>
    </Paper>
  );
};
