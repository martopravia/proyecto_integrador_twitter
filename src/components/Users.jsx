import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      const response = await axios({
        method: "GET",
        url: "http://localhost:3000/users/:username",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODY0Mzg0NDE4N2JiMzc5ZDk5Yjg0YzIiLCJpYXQiOjE3NTI3NjE2MzN9.7S6zkIDnsbsMDnmdJB-VRcZhc74hlouLvgU-wEIeZII`,
        },
      });
      console.log(response.data);
      setUser(response.data);
    };
    getUser();
  }, []);
  return <div>User</div>;
};

export default Users;
