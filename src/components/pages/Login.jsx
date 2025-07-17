import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../redux/loginSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { token } = useSelector((state) => state.login.token);
  const userLogged = useSelector((state) => state.login.username);

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await axios({
      method: "POST",
      url: "http://localhost:3000/tokens",
      data: { username, password },
    });
    const data = await response.data;
    console.log(data);
    dispatch(setLogin({ token: data, username }));
  };
  return (
    <>
      <form onSubmit={handleLogin}>
        <label htmlFor="">
          <input
            type="text"
            placeholder="Username..."
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="">
          <input
            type="password"
            placeholder="Password..."
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
      <div>usuario: {userLogged}</div>
      <div>token: {token}</div>
    </>
  );
};

export default Login;
