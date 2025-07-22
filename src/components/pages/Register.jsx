import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

const Register = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(firstname, lastname, email, username, profileImg, password);
    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    // formData.append("description", "");

    formData.append("image", profileImg);

    try {
      const response = await axios.post(
        "http://localhost:3000/users/",
        formData
      );
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.error("Hubo un error fatal: ", error);
    }
  };

  return (
    <>
      <form onSubmit={handleRegister}>
        <label htmlFor="firstname">firstname</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="First name"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastname">lastname</label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Last name"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
        />{" "}
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <label htmlFor="username">username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />{" "}
        <div className="mb-3">
          <label htmlFor="profilePicture" className="form-label">
            Profile Picture
          </label>
          <input
            className="form-control"
            type="file"
            id="profilePicture"
            name="profilePicture"
            onChange={(e) => setProfileImg(e.target.files[0])}
          />
        </div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign up!</button>
      </form>

      <p>
        <Link to={"/login"}>Sign in</Link>
      </p>
    </>
  );
};

export default Register;
