import React, { PropTypes, Component } from 'react';
import { props as promiseProps } from 'bluebird';

export default function () {
  class Container extends Component {
    constructor(props) {
      super(props);
      this.state = props.initialProps;
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
    initialProps: PropTypes.object,
    loadedProps: PropTypes.object,
    children: React.PropTypes.element,
  };

  class Indie {
    initial(cb) {
      this.initialProps = cb();
      return this;
    }

    load(cb) {
      this.loadedProps = cb();
      return this;
    }

    render(ReactComponent) {
      const { initialProps, loadedProps } = this;
      return (
        <Container loadedProps={loadedProps} initialProps={initialProps}>
          <ReactComponent />
        < /Container>
      );
    }
  }
  return new Indie();
}
