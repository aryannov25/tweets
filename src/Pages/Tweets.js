import React from "react";

function Tweets({ tweet, name, onDelete, onModify }) {
  return (
    <div className="bg-zinc-700 rounded-lg overflow-hidden shadow-lg my-5">
      <div className="p-5 bg-zinc-700">
        <div className="flex items-center bg-zinc-700 space-x-4">
          <a href="#" className="block bg-zinc-700">
            <img
              className="rounded-full w-12 h-12 object-cover"
              src="https://randomuser.me/api/portraits/men/80.jpg"
              alt="User avatar"
            />
          </a>
          <div className="flex-1 bg-zinc-700">
            <div className="flex items-center justify-between bg-zinc-700">
              <a
                href="#"
                className="text-lg font-semibold bg-zinc-700 text-white hover:text-blue-400 transition-colors"
              >
                {name}
              </a>
              <span className="text-sm text-slate-400 bg-zinc-700">25 minutes ago</span>
            </div>
            <p className="text-white mt-3 bg-zinc-700">{tweet}</p>
          </div>
        </div>
      </div>
      <div className="px-5 py-3 bg-zinc-700 flex justify-between items-center">
        <button
          onClick={onDelete}
          className="bg-red-600 hover:bg-red-700 transition-colors text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Delete
        </button>
        <button
          onClick={onModify}
          className="bg-blue-600 hover:bg-blue-700 transition-colors text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Modify
        </button>
      </div>
    </div>
  );
}

export default Tweets;
