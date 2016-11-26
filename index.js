import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './components/MainComponent';
const mainComponent = < MainComponent message="React Demo" / >;

ReactDOM.render(
    mainComponent,
    document.querySelector('.js-app')
);

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
