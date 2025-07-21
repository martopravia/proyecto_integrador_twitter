import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Users = () => {
  const [user, setUser] = useState([]);
  const token = useSelector((state) => state.user.token);
  const username = useSelector((state) => state.user.username);
  useEffect(() => {
    const getUser = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/users/${username}`,
        headers: {
          Authorization: `Bearer ${token}`,
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
