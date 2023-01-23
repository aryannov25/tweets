import React, { useRef, lazy } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Nav from "./Navbar";
import { Auth } from "../firebase-config";
import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Tweets from "./Tweets";
import moment from "moment";
import useOnline from "./useOnline";

// const Tweets = lazy(() => import("./Tweets"));

// const isOnline = useOnline();
// if (!isOnline) {
//   return <h1>🔴 Offline, please check your internet connection!!</h1>;
// }

function Home() {
  const [user, setUser] = useState({});
  const [tweet, setTweet] = useState({});
  const [value, setValue] = useState({});
  const [meetings, setMeetings] = useState([]);

  const navigate = useNavigate();
  const tweetInputRef = useRef();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  useEffect(() => {
    fetch("https://fir-auth-5ce51-default-rtdb.firebaseio.com/meetings.json")
      .then((response) => response.json())
      .then((data) => {
        const meetings = [];
        for (const key in data) {
          const meeting = { id: key, ...data[key] };
          meetings.push(meeting);
        }
        setMeetings(meetings);
        console.log(meetings);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Nav />

      <div className=" flex flex-col lg:flex-row text-sm dark:bg-black dark:text-white">
        <div className="w-full lg:w-1/4 pl-4 lg:pl-0 pr-6 mt-8 mb-4 dark:bg-black dark:text-white"></div>
        <div className="w-full lg:w-1/2 bg-white mb-4 dark:bg-black dark:text-white">
          <div className="flex mb-42 mb-12">
            <div>
              <h1 className="px-0 py-2 text-2xl font-bold text-white">
                Hello {user.email}
              </h1>

              <h1 className="text-lg">Here are your tweets &#129303;</h1>
            </div>
          </div>

          <div className={loading ? "loading" : "d-none"}>
            {Array(1)
              .fill("")
              .map((e, index) => (
                <div className="loading-animation">loading...</div>
              ))}
          </div>
          <div
            className={
              tweet.length === 0 ? "container text-center flex" : "d-none"
            }
          >
            <p>No Tweets available!!</p>
          </div>
          <div className="grid grid-cols-1 p-2">
            {meetings.map((meetings) => {
              return <Tweets tweets={meetings.tweet} name={user.email} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
