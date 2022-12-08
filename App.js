import React from "react";
import Navigation from './src/navegation/Navigation'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import rootReducer from './src/redux/reducers/rootReducer';


const store = configureStore({ reducer: rootReducer })

export default function App(){
  return(
    <Provider store={store}>
    <Navigation/>
    </Provider>
  )
}