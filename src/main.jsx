import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, useRoutes } from "react-router-dom";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux'

import counter from './reducer/counter.js';
import { usePrepareAuth, AuthContext } from './reducer/user.js';

import App, { About } from './App.jsx'
import Login from './login.jsx';

import './index.css'

const store = configureStore({
  reducer: {
    counter
  }
})

const router = [
  {
    path: "",
    element: <App />
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "login",
    element: <Login />
  }
];

function Root() {
  const u = usePrepareAuth();
  return (
    <AuthContext.Provider value={u}>
      {useRoutes(router)}
    </AuthContext.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Provider store={store}>
  <BrowserRouter>
    <Root />
  </BrowserRouter>
</Provider>)
