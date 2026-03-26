import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import TaskContext from "./context/TaskContext.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TaskContext>
      <App />
    </TaskContext>
  </BrowserRouter>
);
