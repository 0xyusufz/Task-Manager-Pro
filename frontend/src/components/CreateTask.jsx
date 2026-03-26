import React, { useState } from "react";
import axios from 'axios'

const CreateTask = () => {
  const [priority, setpriority] = useState("low");
  const formHandler = async (e)=>{
    e.preventDefault()
    const {title,priority,description} = e.target.elements
    try{
      await axios.post("http://localhost:3000/api/task",{
        title: title.value,
        description : description.value,
        estatus : "todo",
        priority : priority.value,
        createdAt : new Date()
      })
      alert("Task Added successfully")
    }catch(e){
      alert("failed to create Task pls try agaib")
    }
    e.target.reset()
  }
  return (
    <div className="create-Task">
      <div className="head">
        <h1>Create your Task</h1>
      </div>
      <form className="form" onSubmit={formHandler}>
        <div className="form-inputs">
          <input type="text" placeholder="enter title" name="title" required />
          <select
            name="priority"
            required
            value={priority}
            onChange={(e) => {
              setpriority(e.target.value);
            }}
          >
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
          </select>
        </div>
        <textarea
          name="description"
          placeholder="enter description"
          required
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateTask;
