import React, { useState } from "react";

function SimpleForm() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", input);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        className="border p-2 mr-2 rounded"
        placeholder="Enter text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}

export default SimpleForm;