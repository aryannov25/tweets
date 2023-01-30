import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Tweets({ tweets, name }) {
  const navigate = useNavigate();

  const [meetings, setMeetings] = useState([]);

  const deletDoc = (key) => {
    meetings.tweet
      .delete()
      .then(() => {
        navigate("/home", { replace: true });
      })
      .catch(() => {
        alert("Something went wrong");
      });
  };

  return (
    // <div className="grid grid-cols-3 gap-4 content-start w-full">
    //   <div className=" bg-zinc-800 rounded mt-3 w-96 pl-3 mr-3 containerr">
    //     <div className="">
    //       <a href="/">
    //         <img
    //           src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_avatar_tailwind.jpg"
    //           alt="avatar"
    //           className="rounded-full h-12 w-12 p-1  mt-2"
    //         />
    //       </a>
    //     </div>
    //     <div className="pl-5 pt-3">
    //       <div className="text-xs text-grey-dark"></div>
    //       <div className=" ">
    //         <div>
    //           <span className="font-bold">
    //             <a href="/" className="text-white">
    //               {name}
    //             </a>
    //           </span>
    //         </div>
    //       </div>
    //       <div>
    //         <div className="mb-4">
    //           <p className="mb-6">5 mins ago ・ Edited</p>
    //           <div className="bg-zinc-600 rounded m-2 ">
    //             <div className="flex mb-3 w-80 py-2">
    //               <img
    //                 className="ml-3 inline-block h-8 w-8 rounded-full"
    //                 src="https://emoji-uc.akamaized.net/orig/32/e70ddf12ec8dc727eb8c1e6f4a31dc.png"
    //                 alt=""
    //               />
    //               <div className=" ">
    //                 <p className="mr-2 mt-2 pl-5 tweet bg-transparent text-black font-medium text-sm ">
    //                   {tweets}
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //           <a href="/">
    //             <h4 className="text-gray-400 ml-2 mt-1"> 💬 24 Comments</h4>
    //           </a>
    //         </div>
    //         <button
    //           onClick={() => {
    //             deletDoc(meetings.tweet);
    //           }}
    //         >
    //           Delete
    //         </button>{" "}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="bg-zinc-800 rounded mt-3 w-full p-1 mr-3 container">
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
            <a href="/">
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
