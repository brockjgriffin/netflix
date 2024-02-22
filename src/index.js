import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { Reducer } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import  { persistedStore, rootReducer, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import { createStore } from 'react-redux';
let persistor = persistStore(store)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store} >
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

