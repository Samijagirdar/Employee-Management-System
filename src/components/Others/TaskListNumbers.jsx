import React from "react";

const TaskListNumbers = () => {
  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className="w-[40%] rounded-xl py-6 px-10 bg-red-400">
        <h2 className="text-3xl font-medium">0</h2>
        <h3 className="text-xl font-semibold">New Task</h3>
      </div>
      <div className="w-[40%] rounded-xl py-6 px-10 bg-green-400">
        <h2 className="text-3xl font-medium">0</h2>
        <h3 className="text-xl font-semibold">New Task</h3>
      </div>
      <div className="w-[40%] rounded-xl py-6 px-10 bg-blue-400">
        <h2 className="text-3xl font-medium">0</h2>
        <h3 className="text-xl font-semibold">New Task</h3>
      </div>
      <div className="w-[40%] rounded-xl py-6 px-10 bg-yellow-400">
        <h2 className="text-3xl font-medium">0</h2>
        <h3 className="text-xl font-semibold">New Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
