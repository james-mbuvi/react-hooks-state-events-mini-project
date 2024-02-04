import React from "react";

function Task({ task,handleDeleteTask }) {


  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button onClick={(e) => handleDeleteTask(task)} className="delete"
    
      >X</button>
    </div>
  );
}

export default Task;













