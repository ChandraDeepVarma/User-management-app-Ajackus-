// src/components/UserForm.js
import React from "react";

const UserForm = ({ onSubmit, userData, onInputChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={userData.name}
        onChange={onInputChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={userData.email}
        onChange={onInputChange}
        placeholder="Email"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
