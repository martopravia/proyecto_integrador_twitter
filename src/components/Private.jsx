import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const Private = () => {
  let token = "";
  try {
    token = useSelector((state) => state.user.token);
  } catch (error) {
    console.log(error);
  }

  if (!token) {
    return <Navigate to="login" />;
  }
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Private;
