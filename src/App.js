// src/App.js
import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import axios from "axios";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [userData, setUserData] = useState({ name: "", email: "" });

  // Fetch users from the server
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3001/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddOrUpdateUser = async () => {
    try {
      if (editingUser) {
        // Update user logic (PUT request)
        await axios.put(
          `http://localhost:3001/users/${editingUser.id}`,
          userData
        );
        setEditingUser(null);
      } else {
        // Add new user logic (POST request)
        await axios.post("http://localhost:3001/users", userData);
      }
      setUserData({ name: "", email: "" }); // Reset form
      fetchUsers(); // Refresh the user list
    } catch (error) {
      console.error("Error adding/updating user:", error);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setUserData(user); // Populate form with selected user data
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/users/${id}`);
      fetchUsers(); // Refresh the user list after deletion
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div>
      <h1>User Management</h1>
      <UserForm
        onSubmit={handleAddOrUpdateUser}
        userData={userData}
        onInputChange={handleInputChange}
      />
      <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
