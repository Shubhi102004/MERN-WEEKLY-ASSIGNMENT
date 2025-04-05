let users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" }
];

// Get all users
app.get("/users", (req, res) => {
  res.json(users);
});

// Add a user
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = Date.now();
  users.push(newUser);
  res.status(201).json(newUser);
});

// Update user by ID
app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex((u) => u.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...req.body };
    res.json(users[index]);
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

// Delete user by ID
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter((u) => u.id !== id);
  res.json({ message: "User deleted" });
});