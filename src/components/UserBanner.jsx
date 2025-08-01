import { Link, NavLink } from "react-router";
import "./UserBanner.css";

const UserBanner = ({
  firstname,
  lastname,
  username,
  profileImg,
  followers,
  following,
  description,
}) => {
  const isLocalImage = !profileImg.includes("http");

  return (
    <div className="border border-secondary">
      <div className="row1 ps-3">
        <img
          className="p-0 rounded-circle profileImage"
          src={
            isLocalImage
              ? `${import.meta.env.VITE_API_URL}/img/${profileImg}`
              : profileImg
          }
          alt="profile image"
        />
      </div>

      <div className="profileInfo px-3">
        <div className="d-flex justify-content-between align-items-center">
          <h3>
            {firstname} {lastname}
          </h3>
          <div>
            <Link
              to={`/${username}/following`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span className="ms-3" style={{ whiteSpace: "nowrap" }}>
                {following.length}{" "}
                <span className="text-secondary">Following</span>
              </span>
            </Link>
            <Link
              to={`/${username}/followers`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span className="ms-3" style={{ whiteSpace: "nowrap" }}>
                {followers.length}{" "}
                <span className="text-secondary">Followers</span>
              </span>
            </Link>
          </div>
        </div>
        <p className="text-secondary">@{username}</p>
        <p className="mb-5">{description}</p>

        <ul
          className="p-0 d-flex justify-content-between m-0"
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
              to={`/${username}`}
            >
              Tweets
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserBanner;
