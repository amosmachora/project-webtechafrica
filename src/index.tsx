import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./Pages/Home";
import About from "./Pages/About";
import Features from "./Pages/Features";
import Pricing from "./Pages/Pricing";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route element={<Home />} index />
          <Route element={<About />} path="/about-us" />
          <Route element={<Features />} path="/features" />
          <Route element={<Pricing />} path="/pricing" />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
