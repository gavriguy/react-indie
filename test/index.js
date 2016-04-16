import jsdom from 'jsdom';
import test from 'ava';
import React, { PropTypes } from 'react';
import { mount } from 'enzyme';
import indie from '../src/index.js';

(function init() {
  const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
  const win = doc.defaultView;
  global.document = doc;
  global.window = win;
}());

const MyComponent = (props) => (<div>{ props.someValue }</div>);
MyComponent.propTypes = {
  someValue: PropTypes.string,
};

test.cb('indie starts with initial data and then loads new data', t => {
  const propsConfig = {
    someValue: [
      'initial',
      'loaded',
    ],
  };
  const Indie = indie(MyComponent, propsConfig);
  const mounted = mount(<Indie />);
  t.is(mounted.html(), '<div>initial</div>', 'show initial data');
  setTimeout(() => {
    t.is(mounted.html(), '<div>loaded</div>', 'show loaded data');
    t.end();
  });
});
