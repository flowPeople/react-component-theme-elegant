import React from 'react';
import ReactDOM from 'react-dom';
import ElegantTheme from './src/ElegantTheme';

const mainComponent = < ElegantTheme message="React Demo" / >;

ReactDOM.render(
    mainComponent,
    document.querySelector('.container'),
);
