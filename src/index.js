import React, { Component } from 'react';
import { props as promiseProps } from 'bluebird';
import { forEach } from 'lodash';

export default (ReactComponent, propsConfig) => class extends Component {
  constructor(props) {
    super(props);
    [this.defaultProps, this.loadedProps] = [{}, {}];
    forEach(propsConfig, ([defaultProp, loadedProp, errorProp], key) => {
      this.defaultProps[key] = defaultProp;
      this.loadedProps[key] = loadedProp || defaultProp;
    });
    this.state = this.defaultProps;
    promiseProps(this.loadedProps)
    .then(res => {
      this.setState(res);
    });
  }
  render() {
    return (<ReactComponent {...this.state} />);
  }
};
