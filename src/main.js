import React from 'react';
import ReactDOM from 'react-dom';
import App from "./containers/App";
import store from './store';
import {Provider} from 'react-redux'
import './plugins/js/swiper.min';

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));
