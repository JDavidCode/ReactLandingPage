import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";

import Landing from "./pages/Landing";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
