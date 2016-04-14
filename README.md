# react-indie

[![npm](https://img.shields.io/npm/v/react-indie.svg)](https://www.npmjs.com/package/react-indie)
[![Build Status](https://travis-ci.org/gavriguy/react-indie.svg?branch=master)](https://travis-ci.org/gavriguy/react-indie)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


A React high level component that holds all its logic inside.

> Works with any react Architecture out there - at the end react-indie outputs a
simple React component.

![](./react-indie-demo.gif)
> The above gif is showing the built in project example. See [Live Playground] bellow for running it on your local machine, or check out [the example code](https://github.com/gavriguy/react-indie/tree/master/example) on github.

There are cases that you want to have in your react code an independent component
that is not connected to the rest of the application global store (e.g. redux).

I'm not talking about pure stateless components but on stateful components that
don't need to share their knowledge with the rest of the app; an example to
that kind of component can be a wether widget that gets the current temperature
from a remote server and doesn't affect the rest of your app.

## API

`react-indie` API follows the conventions of other high order components:

```jsx
indie(Component, propsConfig)
```

**Component:** the react component to wrapper

**propsConfig:** and object with keys that mach the Component`s props.
the value of each key is an array with 2 arguments the first is the prop's default
value and the second is the prop's loaded value. The loaded value can be of type promise.
and can run ajax server requests.

check out [the example code](https://github.com/gavriguy/react-indie/tree/master/example)
or [the test code](https://github.com/gavriguy/react-indie/blob/master/test/index.js) for more info.

## Install

`npm install react-indie --save`

## Live Playground

* clone this repo on your machine
* `npm install`
* `npm run example`
* visit `http://localhost:8080/`

> You can also run test by calling `npm test`

## TODOs

* Handle Promises Rejections
* Add built-in data refresh mechanism (good for widgets)

## Acknowledgements

The package code setup inspired from https://github.com/airbnb/rheostat
Architecture inspired form storybook
