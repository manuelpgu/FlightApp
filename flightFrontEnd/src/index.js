import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
//USEPARAMS BUSCAR EN GOOGLE

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import "./index.css";
import ForumApp from './components/Flights/ForumApp';
import CreatePostForm from './components/Flights/CreatePostForm';
import FlightAppIndex from  './components/Flights/FlightAppIndex';
import FlightsByDestination from './components/Flights/FlightsByDestination';
import BookFlight from  './components/Flights/BookFlight';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <FlightAppIndex/>,

  },

  {
    path: "bookFlight/:id",
    element: <BookFlight/>
  },

  { 
    path: "/selectedDestination/:destination",
    element: <FlightsByDestination/>
  }

]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
