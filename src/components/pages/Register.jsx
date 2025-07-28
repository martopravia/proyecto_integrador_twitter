import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import "./Register.css";
import { Bounce, ToastContainer, toast } from "react-toastify";

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
    // let response = null;
    console.log(firstname, lastname, email, username, profileImg, password);
    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    // formData.append("description", "");

    formData.append("image", profileImg);
    // const notify = () => toast.success("Usuario registrado con éxito!");
    let response = null;
    try {
      response = await axios.post(
        `${import.meta.env.VITE_API_URL}/users`,
        formData
      );
      console.log("La info recibida es", response.data);
      toast.success("Account created successfully");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      toast.error(`${error.response.data.msg}`);

      console.error("Hubo un error fatal: ", error);
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div className="row w-100">
        <div className="d-sm-none d-md-flex col-md-4 col-lg-7 welcomeRegisterBanner rounded-start d-flex flex-column justify-content-between p-5">
          <i className="bi bi-twitter-x fs-1" style={{ color: "white" }}></i>
          <p className="fs-3 fw-semibold m-0">Hi! Welcome to X clone.</p>
        </div>
        <div className="col-sm-12 col-md-8 col-lg-5 loginForm rounded-end px-5 d-flex flex-column justify-content-center">
          <form onSubmit={handleRegister} className="mb-5">
            <legend className="fs-1 fw-semibold mb-0">Sign up</legend>
            <p className="fs-5 fw-semibold mb-5">
              Create an account and start using X
            </p>
            <div className="mb-3">
              <label htmlFor="firstname" className="form-label" hidden>
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                name="firstname"
                id="firstname"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="lastname" className="form-label" hidden>
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                name="lastname"
                id="lastname"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label" hidden>
                email
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="username" className="form-label" hidden>
                Username
              </label>
              <input
                type="text"
                className="form-control"
                name="username"
                id="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Username"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="profilePicture" className="form-label" hidden>
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

            <div className="mb-3">
              <label htmlFor="password" className="form-label" hidden>
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>

            <div className="d-grid">
              <button
                className="btn btn-primary text-white rounded-pill"
                type="submit"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="text-center ">
            Already have an account?{" "}
            <Link className="text-decoration-none" to={"/login"}>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
