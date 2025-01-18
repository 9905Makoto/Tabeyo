import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SignupForm from "./SignupForm";
import SigninForm from "./SigninForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// ルートを作成
const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/signin" element={<SigninForm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
