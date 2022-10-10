import React, { useEffect } from "react";
import { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4040/api/v2/users/")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setUsers(data.body);
      });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <ul key={user.firstName}>
          <li>
            {user.firstName} {user.lastName}
          </li>
          <li>{user.email}</li>
          {/* <li>{user.Profiles.phoneNumber}</li> */}
          <li></li>
        </ul>
      ))}
    </div>
  );
};

export default Users;
