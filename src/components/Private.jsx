import React from "react";
import { Outlet } from "react-router";

const Private = () => {
  console.log("entre a este comp");
  return (
    <div>
      <h1>Titulo</h1>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
};

export default Private;
