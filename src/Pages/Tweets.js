import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Tweets({ tweets, name }) {
  const navigate = useNavigate();

  const [meetings, setMeetings] = useState([]);

  return (
    <div className="bg-zinc-800 rounded mt-3 p-1 mr-3 sm:content-left container grid grid-col-reverse">
      <div className="p-4 bg-zinc-800">
        <div className="media bg-zinc-800 flex pb-1">
          <a className="mr-4 bg-zinc-800" href="#">
            <img
              className="rounded-full max-w-none w-12 h-12"
              src="https://randomuser.me/api/portraits/men/80.jpg"
            />
          </a>
          <div className="media-body bg-zinc-800">
            <div className="bg-zinc-800">
              <a
                className="inline-block text-base bg-zinc-800 font-bold mr-2"
                href="#"
              >
                {name}
              </a>
              <span className="text-slate-500 dark:text-slate-300 bg-zinc-800">
                25 minutes ago
              </span>
            </div>
            <p className="bg-zinc-800">{tweets}</p>
            <a href="#">
              <h4 className="text-gray-400 bg-zinc-800 mt-1">
                {" "}
                💬 24 Comments
              </h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweets;
