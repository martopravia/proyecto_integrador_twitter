import { Route, Routes } from "react-router";
import "./App.css";

import Users from "./components/Users";
import Tweets from "./components/Tweets";
import Login from "./components/pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Tweets />} />
        <Route path="/:username" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
