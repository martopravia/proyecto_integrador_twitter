import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFollowUser } from "../redux/userSlice";

const UserFollowing = ({ userFollowing }) => {
  const localImage = userFollowing.profileImg?.indexOf("https://");
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const handleUnfollow = async () => {
    try {
      const response = await axios({
        method: "PATCH",
        url: `${import.meta.env.VITE_API_URL}/users/follow/${
          userFollowing._id
        }`,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        data: { userId: userFollowing._id },
      });
      dispatch(toggleFollowUser(userFollowing));

      console.log("La respuesta del back es: ", response.data);
    } catch (error) {
      console.error("Error al hacer unfollow:", error);
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
              ? userFollowing.profileImg
              : `${import.meta.env.VITE_API_URL}/img/${
                  userFollowing.profileImg
                }`
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
              {userFollowing.firstname} {userFollowing.lastname}
            </strong>{" "}
            <span className="username-date-color">
              @{userFollowing.username}
            </span>
          </div>
          <button
            className="btn btn-danger btn-sm px-3 rounded-pill text-white"
            onClick={() => handleUnfollow()}
          >
            Unfollow
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserFollowing;
