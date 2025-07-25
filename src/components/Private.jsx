import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import SideBar from "./SideBar";
import News from "./News";

const Private = () => {
  const token = useSelector((state) => state.user?.token);

  if (!token) {
    return <Navigate to="login" />;
  }
  return (
    <div className="container">
      <div className="row" style={{ color: "white" }}>
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-3">
          <SideBar />
        </div>
        <div className="col-xs-10 col-sm-10 col-md-8 col-lg-6">
          <Outlet />
        </div>
        <div className="d-xs-none d-sm-none d-md-flex col-md-2 col-lg-3">
          <News />
        </div>
      </div>
    </div>
  );
};

export default Private;
