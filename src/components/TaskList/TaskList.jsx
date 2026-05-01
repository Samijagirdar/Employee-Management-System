import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-[50%] w-full py-5 flex items-center justify-start flex-nowrap overflow-x-auto gap-5 mt-10"
    >
      <div className="shrink-0 bg-yellow-400 p-5 w-80 h-full rounded-xl">
        <div className="flex justify-between items-center">
          <h2 className="bg-red-600 text-sm rounded px-3 py-1">High</h2>
          <h3 className="text-sm">20 Feb 2024</h3>
        </div>
        <h2 className="text-2xl font-semibold mt-5">Make a youtube video</h2>
        <p className="mt-2 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque rerum
          similique quidem necessitatibus eos inventore?
        </p>
      </div>
      <div className="shrink-0 bg-blue-400 p-5 w-80 h-full rounded-xl">
        <div className="flex justify-between items-center">
          <h2 className="bg-red-600 text-sm rounded px-3 py-1">High</h2>
          <h3 className="text-sm">20 Feb 2024</h3>
        </div>
        <h2 className="text-2xl font-semibold mt-5">Make a youtube video</h2>
        <p className="mt-2 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque rerum
          similique quidem necessitatibus eos inventore?
        </p>
      </div>
      <div className="shrink-0 bg-red-400 p-5 w-80 h-full rounded-xl">
        <div className="flex justify-between items-center">
          <h2 className="bg-red-600 text-sm rounded px-3 py-1">High</h2>
          <h3 className="text-sm">20 Feb 2024</h3>
        </div>
        <h2 className="text-2xl font-semibold mt-5">Make a youtube video</h2>
        <p className="mt-2 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque rerum
          similique quidem necessitatibus eos inventore?
        </p>
      </div>
      <div className="shrink-0 bg-green-400 p-5 w-80 h-full rounded-xl">
        <div className="flex justify-between items-center">
          <h2 className="bg-red-600 text-sm rounded px-3 py-1">High</h2>
          <h3 className="text-sm">20 Feb 2024</h3>
        </div>
        <h2 className="text-2xl font-semibold mt-5">Make a youtube video</h2>
        <p className="mt-2 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque rerum
          similique quidem necessitatibus eos inventore?
        </p>
      </div>
    </div>
  );
};

export default TaskList;
