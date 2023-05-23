"use client";

import { useEffect, useState } from "react";
import { getTasks, addTask } from "csc-start/utils/data";

const ToDoList = ({ list_id }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getTasks(list_id);
      if (data) {
        setTasks(data);
      }
    };

    fetchData();
  }, [list_id]);

  const handleAddTask = async (taskName, priority, isComplete) => {
    const { success, data, error } = await addTask(
      taskName,
      priority,
      isComplete,
      list_id
    );
    if (success) {
      setTasks((prevTasks) => [...prevTasks, data]);
    } else {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>ToDo List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.taskName}</li>
        ))}
      </ul>
      <h3>Add new Task</h3>
      <form
        onSubmit={(e) => {
          const taskName = e.target.taskName.value;
          const priority = e.target.priority.value;
          const isComplete = e.target.isComplete.checked;
          handleAddTask(taskName, priority, isComplete);
          e.target.reset();
        }}
      >
        <input type="text" name="taskName" placeholder="Task Name" />
        <input type="number" name="priority" placeholder="Priority" />
        <input type="checkbox" name="isComplete" />
        <label htmlFor="isComplete">Completed</label>
        <button type="submit" className="button small">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default ToDoList;

// import { getTasks } from "csc-start/utils/data";

// const ToDoList = async ({ list_id }) => {
//   const { data: tasks, error } = await getTasks(list_id);

//   return (
//     <div>
//       {Array.isArray(tasks) &&
//         tasks.map(({ id, taskName, priority, isComplete }) => {
//           return (
//             <a key={id} name={taskName} className="button">
//               <p>{taskName}</p>
//               <p>{priority}</p>
//               <p>{isComplete}</p>
//             </a>
//           );
//         })}
//     </div>
//   );
// };

// export default ToDoList;
