import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./components/pages/Login";
import Private from "./components/Private";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Private />}>
          <Route path="/" element={<Home />} />
          <Route path="/:username" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
