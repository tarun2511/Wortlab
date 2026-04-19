import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WordList from './pages/WordList';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Card from './components/Card/Card';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/wordlist",
    element: <WordList />
  },
  {
    path: "/card",
    element: <Card />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
