import { FC, ChangeEvent, useState } from "react";
import { ITask } from "./Interfaces";
import TodoTask from "./Components/TodoTask";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl text-blue-700 mt-5 mb-10">
        Learning TypesScript
      </h1>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <input
            className="border-2 border-black mr-1"
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            className="border-2 border-black mr-1"
            type="number"
            placeholder="Deadline (in Days)..."
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <button
          onClick={addTask}
          className="border-2 border-green-500 w-[90px]"
        >
          Add task
        </button>
      </div>
      <div className="mt-12">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
