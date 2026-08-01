import { useEffect, useState } from "react";

function UserList() {
  const dummyUsers = [
  {
    id: 1,
    name: {
      firstname: "ruchi",
      lastname: "gautam"
    },
    username: "ruchi",
    email: "ruchi123@gmail.com",
    phone: "7683475094"
  },
  {
    id: 2,
    name: {
      firstname: "Alex",
      lastname: "Mercer"
    },
    username: "amercer",
    email: "alex.mercer@example.com",
    phone: "1-555-014-9821"
  },
  {
    id: 3,
    name: {
      firstname: "Elena",
      lastname: "Rostova"
    },
    username: "elena_r",
    email: "elena.rostova@example.com",
    phone: "1-555-017-4432"
  },
  {
    id: 4,
    name: {
      firstname: "Marcus",
      lastname: "Vance"
    },
    username: "mvance",
    email: "marcus.vance@example.com",
    phone: "1-555-012-7765"
  },
  {
    id: 5,
    name: {
      firstname: "Chloe",
      lastname: "Bennett"
    },
    username: "chloe_b",
    email: "chloe.bennett@example.com",
    phone: "1-555-018-3390"
  }
];
  const [users, setUsers] = useState(dummyUsers);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers([...users, ...data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="page">
      <h1>User List</h1>

      <p className="description">
        Retrieve a list of all available users.
      </p>

      <div className="user-list">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <h3>
              {user.name.firstname} {user.name.lastname}
            </h3>

            <p><b>Username:</b> {user.username}</p>
            <p><b>Email:</b> {user.email}</p>
            <p><b>Phone:</b> {user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;