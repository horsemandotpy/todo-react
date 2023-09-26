import React from "react";
import "./Form.css";
import TitleBox from "../TitleBox/TitleBox";
import InputBar from "../InputBar/InputBar";
import TaskBox from "../TaskBox/TaskBox";
import { useState } from "react";

const Form = () => {
  const [taskList, setTaskList] = useState([
    { id: 1, status: true, task: "Clean the kitchen" },
    { id: 2, status: true, task: "Take out the trash" },
    { id: 3, status: false, task: "Buy some stuff" },
    { id: 4, status: true, task: "Make a million Bucc" },
  ]);

  const [taskView, setTaskView] = useState("all");

  function handleTaskView(view) {
    if (view === "all") return taskList;
    if (view === "active") {
      const activeTask = taskList.filter((task) => !task.status);
      return activeTask;
    }
    return taskList.filter((task) => task.status);
  }

  function handleViewChange(view) {
    setTaskView(view);
  }

  function handleEnter(e) {
    if (e.code === "Enter") {
      const newTaskList = taskList.slice();
      const newTask = {
        id: taskList.length + 1,
        status: false,
        task: e.target.value,
      };
      newTaskList.push(newTask);
      setTaskList(newTaskList);
    }
  }

  function handleClear(id) {
    const filterTask = taskList.filter((task) => task.id !== id);
    setTaskList(filterTask);
  }

  function handleChecked(status, id) {
    if (status) {
      const newTaskStatus = taskList.map((task) => {
        if (task.id === id) task.status = false;
        return task;
      });
      setTaskList(newTaskStatus);
    } else {
      const newTaskStatus = taskList.map((task) => {
        if (task.id === id) task.status = true;
        return task;
      });
      setTaskList(newTaskStatus);
    }
  }

  function handleClearCompleted() {
    const notCompletedTask = taskList.filter((task) => {
      return task.status === false;
    });
    setTaskList(notCompletedTask);
  }

  return (
    <div className="form-box">
      <TitleBox />
      <InputBar handleEnter={handleEnter} taskList={taskList} />
      <TaskBox
        taskList={taskList}
        taskView={taskView}
        handleTaskView={handleTaskView}
        handleClear={handleClear}
        handleChecked={handleChecked}
        handleClearCompleted={handleClearCompleted}
        handleViewChange={handleViewChange}
      />
    </div>
  );
};

export default Form;
