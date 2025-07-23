import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import SideBar from "./SideBar";
import News from "./News";

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
      <div className="row colorFondo" style={{ color: "white" }}>
        <div className="col-2 col-md-2 col-lg-3">
          <SideBar />
        </div>
        <div className="col-8 col-md-8 col-lg-6">
          <Outlet />
        </div>
        <div className="col-2 col-md-2 col-lg-3">
          <News />
        </div>
      </div>
    </div>
  );
};

export default Private;
