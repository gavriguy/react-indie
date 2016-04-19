import React, { Component } from 'react';
import { props as promiseProps } from 'bluebird';
import { forEach, isFunction, reduce, get as lodashGet } from 'lodash';

export default (ReactComponent, propsConfig, onResolve) => class extends Component {
  componentWillMount() {
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
      if (onResolve) onResolve()(this.state, this);
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

export const get = (promise, path) => (
  promise.then(obj => (lodashGet(obj, path)))
);
