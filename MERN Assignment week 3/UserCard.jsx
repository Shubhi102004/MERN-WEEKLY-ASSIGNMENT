import React from "react";

function UserCard({ name, email }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 m-4 border w-80">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
}

export default UserCard;