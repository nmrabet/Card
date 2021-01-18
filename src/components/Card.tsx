import React, { useState, useEffect } from "react";
import { ListUsers, AllUsers } from "../types/index";

export default function Card() {
  const [users, setUsers] = useState<AllUsers[]>([]);

  const url = "https://reqres.in/api/users?page=2";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data: ListUsers) => {
        console.log(data);
        setUsers(data.data);
      });
  }, []);

  console.log(users);
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <img src={user.avatar} alt='user' />
            <h2>{user.first_name + " " + user.last_name}</h2>
            <h3>{user.email}</h3>
          </div>
        );
      })}
    </div>
  );
}
