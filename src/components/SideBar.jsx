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
          <i className="bi bi-house-fill me-3"></i>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li className="mt-4 ">
          <i className="bi bi-person-fill me-3"></i>
          <Link
            to={`/${username}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Profile
          </Link>
        </li>
      </ul>
      <button className="btn btn-primary rounded-pill mt-4 ms-4 bWidth">
        Tweet
      </button>
      <div className="botonLogOut">
        <button className="btn btn-danger rounded-pill ms-4 bWidth">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default SideBar;
