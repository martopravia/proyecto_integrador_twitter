import { Route, Routes } from "react-router";
import "./App.css";

import Users from "./components/Users";
import Tweets from "./components/Tweets";
import Login from "./components/pages/Login";

import Private from "./components/Private";
import Register from "./components/pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Private />}>
          <Route path="/" element={<Tweets />} />
          <Route path="/:username" element={<Users />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
