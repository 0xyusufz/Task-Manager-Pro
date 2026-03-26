import React from "react";
import { Routes, Route ,Link} from "react-router-dom";
import "./App.css";

// components
import CreateTask from './components/CreateTask'
import AllTask from './components/AllTask'
import Todo from './components/Todo'
import ProgressTask from './components/ProgressTask'
import CompletedTask from './components/CompletedTask'
const App = () => {
  return (
    <div className="main-area">
      <div className="heading">
        <h1>Task Manager Pro</h1>
      </div>
      <div className="aside">
        <Link to={"/"}><h1>Create Task</h1> </Link>
        <Link to={"/alltask"}><h1>All Task</h1> </Link>
        <Link to={"/todo"}><h1>Todo</h1></Link>
        <Link to={"/progress"}><h1>In Progress</h1></Link>
        <Link to={"/completed"}><h1>Completed</h1></Link>
      </div>
      <div className="dynamic">
        <Routes>
          <Route path="/" element={<CreateTask />} />
          <Route path="/alltask" element={<AllTask />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/progress" element={<ProgressTask />} />
          <Route path="/completed" element={<CompletedTask />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
