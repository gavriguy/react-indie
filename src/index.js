import React, { Component } from 'react';
import { props as promiseProps } from 'bluebird';
import { forEach, isFunction, reduce } from 'lodash';

export default (ReactComponent, propsConfig) => class extends Component {
  constructor(props) {
    super(props);
    [this.defaultProps, this.loadedProps, this.errorProps] = [{}, {}, {}];
    forEach(propsConfig, ([defaultProp, loadedProp, errorProp], key) => {
      this.defaultProps[key] = defaultProp;
      this.loadedProps[key] = loadedProp || defaultProp;
      this.errorProps[key] = errorProp || defaultProp;
    });
    this.state = this.defaultProps;
    promiseProps(this.loadedProps)
    .then(res => {
      this.setState(res);
    })
    .catch((err) => {
      const errorState = reduce(this.errorProps, (result, value, key) => {
        if (isFunction(value)) {
          result[key] = value(err); // eslint-disable-line no-param-reassign
        } else {
          result[key] = value; // eslint-disable-line no-param-reassign
        }
        return result;
      }, {});
      this.setState(errorState);
    });
  }
  render() {
    return (<ReactComponent {...this.state} />);
  }
};
