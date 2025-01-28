// src/components/UserItem.js
import React from "react";

const UserItem = ({ user, onEdit, onDelete }) => {
  return (
    <li>
      {user.name} - {user.email}
      <button onClick={() => onEdit(user)}>Edit</button>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </li>
  );
};

export default UserItem;
