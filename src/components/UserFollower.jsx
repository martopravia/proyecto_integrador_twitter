import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFollowUser } from "../redux/userSlice";

const UserFollower = ({
  userToFollow,
  // firstname,
  // lastname,
  // username,
  // profileImg,
  // followerId,
  loggedUserFollowingList,
}) => {
  const localImage = userToFollow.profileImg?.indexOf("https://");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const isFollowing = loggedUserFollowingList?.some(
    (user) => String(user._id) === String(userToFollow._id)
  );

  const handleFollowToggle = async () => {
    try {
      const response = await axios({
        method: "PATCH",
        url: `${import.meta.env.VITE_API_URL}/users/follow/${userToFollow._id}`,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        data: { userId: user._id },
      });
      dispatch(toggleFollowUser(userToFollow));

      console.log("La respuesta del back es: ", response.data);
    } catch (error) {
      console.error("Error al hacer follow:", error);
    }
  };

  return (
    <div
      className="d-flex p-3"
      style={{ backgroundColor: "#171f2e", color: "white" }}
    >
      <div className="me-3">
        <img
          src={
            localImage !== -1
              ? userToFollow.profileImg
              : `${import.meta.env.VITE_API_URL}/img/${userToFollow.profileImg}`
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
              {userToFollow.firstname} {userToFollow.lastname}
            </strong>{" "}
            <span className="username-date-color">
              @{userToFollow.username}
            </span>
          </div>
          {isFollowing ? (
            <button className="btn btn-light btn-sm px-3  rounded-pill ">
              Following
            </button>
          ) : (
            <button
              className="btn btn-primary btn-sm px-4  text-white rounded-pill"
              onClick={() => handleFollowToggle()}
            >
              Follow
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserFollower;
