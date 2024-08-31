import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import HomeScreen from './Homescreen/HomeScreen';
//import { Router } from 'react-router-dom';
//import { Provider } from 'react-redux';
import store from './store/model';
import { Provider } from 'react-redux';
import Skills from './components/Skills';
import Profiles from './components/Profiles';
import Experience from './components/Experience';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
  },
  {
    path:'/Skills',
    element:<Skills />
  },
  {
    path:'/profiles',
    element:<Profiles />
  },
  {
    path:'/experience',
    element:<Experience />
  }
])

root.render(
  
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
