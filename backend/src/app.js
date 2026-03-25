// all imports
const express = require("express");
const noteModels = require("./models/task.model");

const app = express(); //instance of the express

// all middleware
app.use(express.json()); //to read the content

// POST API

app.post("/api/task", async (req, res) => {
  const { title, description, estatus, priority, createdAt } = req.body;
  const notes = await noteModels.create({
    title,
    description,
    estatus,
    priority,
    createdAt,
  });
  res.status(201).json({
    message: "notes created successfully",
    notes,
  });
});

// get API

app.get("/api/task", async (req, res) => {
  const allTask = await noteModels.find();
  res.status(200).json({
    message: "all task fetched successfully",
    allTask,
  });
});

// delete API

app.delete("/api/task/:id", async (req, res) => {
  const id = req.params.id;
  const deletedTask = await noteModels.findByIdAndDelete(id);
  res.status(200).json({
    message: "task deleted successfuly",
    deletedTask,
  });
});

// patch API

app.patch("/api/task/:id", async (req, res) => {
  const { title, description, estatus, priority } = req.body;
  const id = req.params.id;
  await noteModels.findByIdAndUpdate(id, {
    title,
    description,
    estatus,
    priority,
  });
  res.status(200).json({
    message: "Task updated successfully",
  });
});

module.exports = app;
