import express from "express";


app.get("/welcome", (req, res) => {
    res.json({ message: "Welcome to Express!" });
  });