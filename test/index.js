import jsdom from 'jsdom';
import test from 'ava';
import React from 'react';
import {shallow, mount} from 'enzyme';
import indie from '../src/index.jsx';

(function init() {
  const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
  const win = doc.defaultView;
  global.document = doc;
  global.window = win;
}());

const MyComponent = (props) => (<div>{ props.someValue }</div>);

test.cb('indie starts with initial data and then loads new data', t => {
  const propsConfig = {
    someValue: ['initial value', 'loaded'],
  };
  const wrapper = mount(indie(MyComponent, propsConfig));
  t.is(wrapper.html(), '<div><div>initial value</div></div>', 'show initial data');
  setTimeout(() => {
    t.is(wrapper.html(), '<div><div>loaded</div></div>', 'show loaded data');
    t.end();
  }, 10);
});
