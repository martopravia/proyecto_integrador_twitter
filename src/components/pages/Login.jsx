import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setLogin } from "../../redux/userSlice";
import { Link, useNavigate } from "react-router";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_URL}/tokens`,
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
    <div className="container d-flex align-items-center justify-content-center">
      <div className="row w-100 ">
        <div className="d-sm-none d-md-flex col-md-4 col-lg-7 welcomeLoginBanner rounded-start flex-column justify-content-between p-5">
          <i className="bi bi-twitter-x fs-1" style={{ color: "white" }}></i>
          <p className="fs-3 fw-semibold m-0">Hey! Nice to see you again.</p>
        </div>
        <div className="col-sm-12 col-md-8 col-lg-5 loginForm rounded-end px-5 d-flex flex-column justify-content-center">
          <form onSubmit={handleLogin} className="mb-5">
            <legend className="fs-1 fw-semibold mb-0">Login</legend>
            <p className="fs-5 fw-semibold mb-5">Ready to start using X?</p>
            <div className="mb-3">
              <label htmlFor="username" className="form-label" hidden>
                Ingresar Usuario
              </label>
              <input
                type="text"
                className="form-control"
                name="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ingresar Usuario"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label" hidden>
                Ingresar Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresar Contraseña"
              />
            </div>
            <div className="d-grid">
              <button
                className="btn btn-primary text-white rounded-pill"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          <p className="text-center">
            Don't have an account?{" "}
            <Link className="text-decoration-none" to={"/register"}>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
