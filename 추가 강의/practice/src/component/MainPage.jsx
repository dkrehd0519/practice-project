import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

function MainPage() {
  return (
    <div>
      <div>MainPage</div>
      <Link to={"/SignUp"}>Sign up</Link>
      <Login />
    </div>
  );
}

export default MainPage;
