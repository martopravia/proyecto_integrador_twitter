import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router";
import "./Follow.css";
import UserFollowing from "../UserFollowing";

const Following = () => {
  const user = useSelector((state) => state.user);
  console.log("el user.following es :", user.following);
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    user && (
      <div className="border border-secondary">
        <div className="profileInfo px-3 border-secondary border-bottom">
          <div className="d-flex followBanner">
            <div className="me-2 mt-2">
              <Link
                to={`/${user.username}`}
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
                to={`/${user.username}/followers`}
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
                to={`/${user.username}/following`}
              >
                Following
              </NavLink>
            </li>
          </ul>
        </div>
        <ul className="p-0 border-secondary" style={{ listStyleType: "none" }}>
          {user.following.map((follow, index) => (
            <li key={follow._id || follow.id || index}>
              <UserFollowing
                // firstname={follow.firstname}
                // lastname={follow.lastname}
                // username={follow.username}
                // profileImg={follow.profileImg}
                // followerUserId={follow._id}
                userFollowing={follow}
              />
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default Following;
