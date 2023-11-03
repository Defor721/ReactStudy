import React from "react";
import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";
import { useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState([]);

  const userListHanlder = (uname, uage) => {
    setUserInfo((prev) => [
      ...prev,
      { username: uname, age: uage, id: Math.random().toString() },
    ]);
  };

  return (
    <div>
      <AddUser onAddUser={userListHanlder} />
      <UsersList users={userInfo} />
    </div>
  );
}

export default App;
