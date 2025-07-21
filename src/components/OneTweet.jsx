import React from "react";
import { useSelector } from "react-redux";

const OneTweet = ({
  text,
  firstname,
  lastname,
  username,
  profileImg,
  createdAt,
  likes,
}) => {
  const loggedUser = useSelector((state) => state.user.userId);
  const isLiked = likes.includes(loggedUser);
  const localImage = profileImg.indexOf("https://");

  return (
    <div>
      {/* <img src={profileImg} alt="profile image" /> */}
      <img
        src={
          localImage !== -1
            ? profileImg
            : `http://localhost:3000/img/${profileImg}`
        }
        alt="profile image"
      />
      <h5>
        {firstname} {lastname} @{username} ·{" "}
        {new Date(createdAt).toLocaleDateString()}
      </h5>
      <p>{text}</p>
      {isLiked ? (
        <>
          <i className="bi bi-heart-fill" style={{ color: "red" }}></i>
          <span style={{ color: "red" }}> {likes.length}</span>
        </>
      ) : (
        <>
          <i className="bi bi-heart"></i>
          <span> {likes.length}</span>
        </>
      )}
    </div>
  );
};

export default OneTweet;
