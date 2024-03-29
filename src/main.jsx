import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App, { About } from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider, useDispatch } from 'react-redux'
import counter from './reducer/counter.js';
import user, { recover } from './reducer/user.js';
import { configureStore } from '@reduxjs/toolkit';
import Login from './login.jsx';

const store = configureStore({
  reducer: {
    counter,
    user
  }
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/login",
    element: <Login />
  }
]);

function Root() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(recover())
  }, [])
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(<Provider store={store}>
  <Root />
</Provider>)
