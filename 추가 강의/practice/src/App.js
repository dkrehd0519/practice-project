import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./component/MainPage";
import SignUp from "./component/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
