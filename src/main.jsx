import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { About } from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux'
import counter from './counter.js';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    counter,
  }
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
