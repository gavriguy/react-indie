![](./logo.png)

[![npm](https://img.shields.io/npm/v/react-indie.svg)](https://www.npmjs.com/package/react-indie)
[![Build Status](https://travis-ci.org/gavriguy/react-indie.svg?branch=master)](https://travis-ci.org/gavriguy/react-indie)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# react-indie

A React high level component that holds all its logic inside.

> Works with any react Architecture out there - at the end react-indie outputs a
simple React component.

There are cases that you want to have in your react code an independent component
that is not connected to the rest of the application global store (e.g. redux).

I'm not talking about pure stateless components but on state-full components that
don't need to share their knowledge with the rest of the app; an example to
that kind of component can be a wether widget that gets the current temperature
from a remote server and doesn't affect the rest of your app.

## API

`react-indie` API follows the conventions of other high order components:

```jsx
indie(Component, propsConfig, onResolve)
```

**Component:** the react component to wrapper

**propsConfig:** and object with keys that mach the Component`s props.
the value of each key is an array with 3 arguments:

1. The prop's default.
1. (Optional) The loaded value - a promise used to load data from an ajax server request for example.
1. (Optional) The error value of the prop in case the server returns an error.
It can also be a callback that gets the server error as an argument and returns
the error value.

**onResolve** (Optional, Advanced)

An `onResolve` function to be executed once the promise was resolved.
This can be used to run a `setInterval` script that fetches data from the server in a set interval.
The function itself should return a function with 2 params:
    * props - the component props that the component has once resolved.
    * component - the component itself - good for setting its state. see Widget4
  in the project example for more implementation details.

Check out [the test code](https://github.com/gavriguy/react-indie/blob/master/test/index.js)
or indies Storybook [stories](https://github.com/gavriguy/react-indie/tree/master/stories/api.js) for more info.

## Install

`npm install react-indie --save`

## Live Playground
React-Indie uses [the awesome Storybook Project](https://github.com/kadirahq/react-storybook) to showcase the component's options.

* clone this repo on your machine
* `npm install`
* `npm run storybook`
* visit `http://localhost:9001/`

> You can also run tests by calling `npm test`

## Acknowledgements

The package code setup inspired from https://github.com/airbnb/rheostat
The example are presented as Storybook stories https://github.com/kadirahq/react-storybook
