import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reducer from './reducers'
import middleware from './middleware'
import {Provider} from "react-redux";
import {createStore} from "redux";
import {BrowserRouter} from "react-router-dom";


// import reportWebVitals from './reportWebVitals';


const store = createStore(reducer, middleware)
ReactDOM.render(

    <Provider store={store}>
        <BrowserRouter><App /></BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);