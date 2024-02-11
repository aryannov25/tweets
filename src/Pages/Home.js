import React, { useState, useEffect } from "react";
import "../App.css";
import Nav from "./Navbar";
import { Auth } from "../firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Tweets from "./Tweets";
import { getDatabase, ref, onValue, remove, update } from "firebase/database";
import app from "../firebase-config";

function Home() {
  const [user, setUser] = useState({});
  const [tweet, setTweet] = useState({});
  const [value, setValue] = useState({});
  const [meetings, setMeetings] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  useEffect(() => {
    const db = getDatabase(app);
    const meetingsRef = ref(db, "meetings");
    onValue(meetingsRef, (snapshot) => {
      const data = snapshot.val();
      const loadedMeetings = [];
      for (const key in data) {
        loadedMeetings.push({ id: key, ...data[key] });
      }
      setMeetings(loadedMeetings);
    });
  }, []);

  const handleDeleteTweet = (tweetId) => {
    const db = getDatabase(app);
    remove(ref(db, "meetings/" + tweetId));
  };

  const handleModifyTweet = (tweet) => {
    const newTweet = prompt("Edit your tweet:", tweet.tweet);
    if (newTweet !== null) {
      const db = getDatabase(app);
      update(ref(db, "meetings/" + tweet.id), { tweet: newTweet });
    }
  };

  useEffect(() => {
    fetch("https://project-dd1f5-default-rtdb.firebaseio.com/meetings.json")
      .then((response) => response.json())
      .then((data) => {
        const meetings = [];
        for (const key in data) {
          const meeting = { id: key, ...data[key] };
          meetings.push(meeting);
        }
        setMeetings(meetings);
        const abc = meetings;
        console.log(abc);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Nav />
      <div className="container mx-auto py-8 px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">
            Hello, {user.email ? user.email : "there"}
          </h1>
          <p className="text-lg text-gray-400">Here are your tweets 🕊️</p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-gray-300"></div>
          </div>
        ) : (
          <>
            {meetings.length === 0 ? (
              <div className="text-center text-gray-500">
                <p>No Tweets available!!</p>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                {meetings.map((meeting) => (
                  <div className="w-full max-w-4xl mb-4">
                    {" "}
                    {/* Adjust the max-width as needed */}
                    <Tweets
                      key={meeting.id}
                      tweet={meeting.tweet}
                      name={user.email}
                      onDelete={() => handleDeleteTweet(meeting.id)}
                      onModify={() => handleModifyTweet(meeting)}
                    />
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
export default Home;
