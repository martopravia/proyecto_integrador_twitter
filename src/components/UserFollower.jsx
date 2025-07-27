import React from "react";

const UserFollower = ({ firstname, lastname, username, profileImg }) => {
  const localImage = profileImg.indexOf("https://");

  return (
    <div
      className="d-flex p-3"
      style={{ backgroundColor: "#171f2e", color: "white" }}
    >
      <div className="me-3">
        <img
          src={
            localImage !== -1
              ? profileImg
              : `${import.meta.env.VITE_API_URL}/img/${profileImg}`
          }
          alt="profile image"
          className="rounded-circle"
          style={{ width: "35px", height: "35px", objectFit: "cover" }}
        />
      </div>
      <div className="flex-grow-1">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column">
            <strong>
              {firstname} {lastname}
            </strong>{" "}
            <span className="username-date-color">@{username}</span>
          </div>
          <button className="btn btn-primary btn-sm rounded-pill text-white">
            Following/Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserFollower;
