import React from "react";
import "./TaskBar.css";

const TaskBar = ({ task, handleClear, handleChecked }) => {
  return (
    <div className="task-bar">
      <div className="inputbox">
        <input
          type="checkbox"
          className={"checkbox"}
          defaultChecked={task.status}
          onClick={() => {
            handleChecked(task.status, task.id);
          }}
        />
        <span>{task.task}</span>
      </div>
      <div className="clear-task">
        <div
          onClick={() => {
            handleClear(task.id);
          }}
        ></div>
      </div>
    </div>
  );
};

export default TaskBar;
