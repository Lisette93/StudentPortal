
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './scss/styles.scss'
import './index.css'
import App from './App.jsx'


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter basename="/StudentPortal">
    <App />
  </BrowserRouter>
);