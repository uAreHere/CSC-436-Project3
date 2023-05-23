"use client";

import { useState } from "react";
import { addTask } from "csc-start/utils/data";

const ToDoList = () => {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [listID, setListID] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const addedTask = await addTask(taskName, priority, isComplete, listID);
    if (addedTask.success == true) {
      setTaskName("");
      setPriority("");
      setIsComplete(false);
      setListID("");
    } else {
    }
  };

  return (
    <div>
      <h2 className="h2 inline-block">ToDo List:</h2>

      <h3 className="">Add new Task</h3>
      <form className="m-4" onSubmit={handleFormSubmit}>
        <label className="inline-block text-center w-[200px]">Task:</label>
        <input
          className="border border-2 border-black px-2"
          type="text"
          name="taskName"
          placeholder="Task Name"
        />
        <label className="inline-block text-center w-[200px]">
          Set Priority
        </label>
        <input
          className="border border-2 border-black px-2"
          type="number"
          name="priority"
          placeholder="Priority"
        />
        <label htmlFor="isComplete" className="inline-block w-[200px]">
          Select if Completed
        </label>
        <input type="checkbox" name="isComplete" />
        <label className="inline-block text-center w-[200px]">
          List_ID(test)
        </label>
        <input
          className="border border-2 border-black px-2"
          type="text"
          name="listID"
        />
        <p className="m-5 text-center">
          <button type="submit" className="button small">
            Add Task
          </button>
        </p>
      </form>
    </div>
  );
};

export default ToDoList;
