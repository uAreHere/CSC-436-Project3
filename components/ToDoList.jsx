"use client";
import { useState } from "react";
import { addTask } from "csc-start/utils/data";

const ToDoList = () => {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [id, setListID] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const addedTask = await addTask(taskName, priority, isComplete, id);
    if (addedTask.success) {
      setTaskName("");
      setPriority();
      setIsComplete(false);
      setListID("");
    } else {
      console.error(addedTask.error);
    }
  };

  return (
    <div>
      <h2 className="h2 inline-block">ToDo List:</h2>

      <h3 className="">Add new Task</h3>
      <form className="m-4" onSubmit={handleFormSubmit}>
        <label className="inline-block text-center w-[200px]">Task:</label>
        <input
          onChange={(e) => setTaskName(e.target.value)}
          className="border border-2 border-black px-2"
          type="text"
          value={taskName}
          placeholder="Task Name"
        />
        <label className="inline-block text-center w-[200px]">
          Set Priority
        </label>
        <input
          onChange={(e) => setPriority(e.target.value)}
          className="border border-2 border-black px-2"
          type="number"
          value={priority}
          placeholder="Priority"
        />
        <label htmlFor="isComplete" className="inline-block w-[200px]">
          Select if Completed
        </label>
        <input
          type="checkbox"
          value={isComplete}
          onChange={(e) => setIsComplete(e.target.checked)}
        />
        <label className="inline-block text-center w-[200px]">
          List_ID(test)
        </label>
        <input
          onChange={(e) => setListID(e.target.value)}
          className="border border-2 border-black px-2"
          value={id}
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
