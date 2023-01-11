import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Register from "./Register";
import Home from "./Pages/Home";
import ForgotPass from "./Pages/ForgotPass";
import NewPost from "./Pages/NewPost";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot" element={<ForgotPass />} />
      <Route path="/new" element={<NewPost />} />


    </Routes>
  </BrowserRouter>
);
