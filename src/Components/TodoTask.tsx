import React from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="flex flex-row my-2 justify-center items-center">
      <div className="flex flex-row  mr-4 ">
        <div className="w-[45px]">
          <span>{task.taskName}</span>
        </div>
        <div className=" mx-4 w-[75px]">
          <p className="text-right">{task.deadline}</p>
        </div>
      </div>
      <button
        onClick={() => completeTask(task.taskName)}
        className="border-2 w-7 bg-red-400"
      >
        x
      </button>
    </div>
  );
};

export default TodoTask;
