import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router/dom";
import router from './Routes/routes.js';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);