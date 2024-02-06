import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handlePassWordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("passWord", passWord);
    formData.append("name", name);
    formData.append("email", email);

    e.preventDefault();
    try {
      const response = await axios.post(
        "https://ll-api.jungsub.com/ptrack/user/signup",
        userName,
        passWord,
        name,
        email
      );

      if (response.data.ok) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div>SignUp</div>
      <form onSubmit={handleSubmit}>
        <label>ID</label>
        <input
          type="text"
          value={userName}
          placeholder="user name"
          onChange={handleUserNameChange}
        ></input>
        <label>Password</label>
        <input
          type="password"
          value={passWord}
          placeholder="password"
          onChange={handlePassWordChange}
        ></input>
        <label>Name</label>
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={handleNameChange}
        ></input>
        <label>Email</label>
        <input
          type="text"
          value={email}
          placeholder="email"
          onChange={handleEmailChange}
        ></input>
        <button type="submit">sign up</button>
      </form>
    </div>
  );
};

export default SignUp;
