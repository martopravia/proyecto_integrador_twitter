import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./components/pages/Login";
import Private from "./components/Private";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import Following from "./components/pages/Following";
import Followers from "./components/pages/Followers";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Private />}>
          <Route path="/" element={<Home />} />
          <Route path="/:username" element={<Profile />} />
          <Route path="/:username/following" element={<Following />} />
          <Route path="/:username/followers" element={<Followers />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
