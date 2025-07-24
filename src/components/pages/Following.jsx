import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router";
import "./Follow.css";
import UserFollowing from "../UserFollowing";

const Following = () => {
  const [user, setUser] = useState(null);
  const { token, username } = useSelector((state) => state.user);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/users/${username}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(response.data);
    };

    getUser();
  }, []);

  return (
    user && (
      <div className="border border-secondary">
        <div className="profileInfo px-3 border-secondary border-bottom">
          <div className="d-flex followBanner">
            <div className="me-2 mt-2">
              <Link
                to={`/${username}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <i className="bi bi-arrow-left"></i>
              </Link>
            </div>
            <div className="d-flex flex-column text-start">
              <h4 className="mb-0">
                {user.firstname} {user.lastname}
              </h4>
              <p className="text-secondary">@{user.username}</p>
            </div>
          </div>
          <ul
            className="p-0 d-flex justify-content-around m-0"
            style={{ listStyleType: "none" }}
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  `nav-link  fw-bold fs-5 ${
                    isActive
                      ? "border-bottom border-primary border-3"
                      : "text-light"
                  }`
                }
                aria-current="page"
                to={`/${username}/followers`}
              >
                Followers
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `nav-link  fw-bold fs-5 ${
                    isActive
                      ? "border-bottom border-primary border-3"
                      : "text-light"
                  }`
                }
                aria-current="page"
                to={`/${username}/following`}
              >
                Following
              </NavLink>
            </li>
          </ul>
        </div>
        <ul className="p-0 border-secondary" style={{ listStyleType: "none" }}>
          {user.following.map((follow) => (
            <li key={follow._id}>
              <UserFollowing
                firstname={follow.firstname}
                lastname={follow.lastname}
                username={follow.username}
                profileImg={follow.profileImg}
              />
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default Following;
