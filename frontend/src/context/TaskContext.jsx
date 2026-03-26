import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UseTaskContext = createContext();
const TaskContext = ({children}) => {
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    try{
      const res = await axios.get("http://localhost:3000/api/task");
      setdata(res.data.allTask);
    }catch(e){
      console.log("error during fetching data")
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <UseTaskContext.Provider value={{ data, fetchData, setdata }}>
        {children}
      </UseTaskContext.Provider>
    </>
  );
};

export default TaskContext;
