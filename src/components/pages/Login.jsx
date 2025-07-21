import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLogin } from "../../redux/userSlice";
import { Link, useNavigate } from "react-router";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await axios({
      method: "POST",
      url: "http://localhost:3000/tokens",
      data: { username, password },
    });
    const { data } = response;
    if (data.token) {
      dispatch(
        setLogin({
          token: data.token,
          username,
          userId: data.userId,
          userImg: data.userImg,
        })
      );
      navigate("/");
    }
  };
  return (
    <>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Ingresar usuario</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Ingresar contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        <Link to={"/register"}>Sign up</Link>
      </p>
    </>
  );
};

export default Login;
