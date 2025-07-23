import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const SideBar = () => {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="container sideBar">
      <ul style={{ listStyleType: "none" }}>
        <li className="mt-4 me-5">
          <i className="bi bi-twitter-x"></i>
        </li>
        <li className="mt-4">
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            <i className="bi bi-house-fill me-3"></i>
            <span className="d-none d-lg-inline"> Home</span>
          </Link>
        </li>
        <li className="mt-4 ">
          <Link
            to={`/${username}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <i className="bi bi-person-fill me-3"></i>
            <span className="d-none d-lg-inline">Profile</span>
          </Link>
        </li>
      </ul>
      <button className="btn btn-primary rounded-pill mt-4 ms-4 bWidth">
        <span className="d-none d-lg-inline">Tweet</span>
        <span className="d-inline d-lg-none">
          <i className="bi bi-twitter-x"></i>
        </span>
      </button>
      <div className="botonLogOut">
        <button className="btn btn-danger rounded-pill ms-4 bWidth">
          <span className="d-none d-lg-inline">Log Out</span>
          <span className="d-inline d-lg-none">
            <i className="bi bi-box-arrow-left"></i>
          </span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
