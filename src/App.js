import { useState } from "react";
import './App.css'
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

export default function App() {
  const [users, setUsers] = useState([]);


  const onUserAdd = (newUser) => {
    setUsers((prevUser) => [...prevUser, newUser]);
  };

  return (
    <div>
      <h1 >Learn Test</h1>
      <UserForm onUserAdd={onUserAdd} />
      <UserList users={users} />
    </div>
  );
}
