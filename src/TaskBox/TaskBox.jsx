import React from "react";
import "./TaskBox.css";
import TaskBar from "../TaskBar/TaskBar";
import MonitorBar from "../MonitorBar/MonitorBar";

const TaskBox = ({
  handleClear,
  handleChecked,
  handleClearCompleted,
  taskView,
  handleTaskView,
  handleViewChange,
}) => {
  const tasks = handleTaskView(taskView);

  return (
    <div className="task-box">
      {tasks.map((task) => {
        return (
          <TaskBar
            key={task.id}
            task={task}
            handleChecked={handleChecked}
            handleClear={handleClear}
          />
        );
      })}
      <MonitorBar
        taskView={taskView}
        tasks={tasks}
        handleViewChange={handleViewChange}
        handleClearCompleted={handleClearCompleted}
      />
    </div>
  );
};

export default TaskBox;
