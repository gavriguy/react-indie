import React, { PropTypes, Component } from 'react';
import { props as promiseProps } from 'bluebird';
import { forEach } from 'lodash';

export default function (ReactComponent, propsConfig) {
  class Container extends Component {
    constructor(props) {
      super(props);
      this.state = props.defaultProps;
      promiseProps(props.loadedProps)
        .then(res => {
          this.setState(res);
        });
    }

    render() {
      return (
        <div>{ React.cloneElement(this.props.children, this.state) }</div>
      );
    }
  }
  Container.propTypes = {
    defaultProps: PropTypes.object,
    loadedProps: PropTypes.object,
    children: React.PropTypes.element,
  };
  const defaultProps = {};
  const loadedProps = {};
  forEach(propsConfig, ([defaultProp, loadedProp], key) => {
    defaultProps[key] = defaultProp;
    loadedProps[key] = loadedProp;
  });

  return (
    <Container loadedProps={loadedProps} defaultProps={defaultProps}>
      <ReactComponent />
    < /Container>
  );
}
