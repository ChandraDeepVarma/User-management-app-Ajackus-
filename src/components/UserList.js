// src/components/UserList.js
import React from "react";
import UserItem from "./UserItem";

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <UserItem
            key={user.id}
            user={user}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
