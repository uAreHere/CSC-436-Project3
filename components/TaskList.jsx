import { getAllUsersTasks } from "csc-start/utils/data";

const TaskList = async () => {
  const { data: tasks } = await getAllUsersTasks();

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {Array.isArray(tasks) &&
          tasks.map(({ id, taskName, priority, isComplete, list_id }) => {
            return (
              <li key={id} className="border border-2 border-black px-2">
                <p>TaskID: {id}</p>
                <p>Task: {taskName}</p>
                <p>Priority: {priority}</p>
                <p>Completed y/n? {isComplete}</p>
                <p>To-DoList ID: {list_id}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default TaskList;
