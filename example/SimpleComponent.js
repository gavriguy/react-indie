import React, { PropTypes } from 'react';

export const SimpleComponent = (props) => {
  const styles = {
    wrapper: {
      padding: 10,
      fontFamily: 'helvetica',
      backgroundColor: props.bgColor,
      color: '#fff',
      maxWidth: 400,
      borderRadius: 5,
      margin: 5,
    },
  };
  return (
    <div style={styles.wrapper}>
      <h1>{ props.title }</h1>
      <p>{ props.subtitle }</p>
    </div>
  );
};

SimpleComponent.propTypes = {
  bgColor: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
};
