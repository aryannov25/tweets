import { React, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "./NewPost.css";
import Nav from "./Navbar";
import { Auth } from "../firebase-config";
import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";

function Home() {
  const [user, setUser] = useState({});
  const [tweet, setTweet] = useState({});
  const navigate = useNavigate();
  const tweetInputRef = useRef();

  useEffect(() => {
    onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  function submitHandler(e) {
    e.preventDefault();

    const setTweet = tweetInputRef.current.value;

    const meetingData = {
      tweet: setTweet,
    };

    //Post Tweets
    fetch(
      "https://project-dd1f5-default-rtdb.firebaseio.com/meetings.json",
      {
        method: "POST",
        body: JSON.stringify(meetingData),
      },
      alert("success")
    ).then(() => {
      navigate("/home", { replace: true });
    });
  }

  return (
    <div className="bg">
      <Nav />
      <section className="">
        <div className="container1 text-center mt-1">
          <h1 className="px-0 py-2 text-2xl font-bold text-white">
            Hello {user.email}
          </h1>

          <h3 className="text-white">
            How are you doing today? Would you like to share something with the{" "}
            <br />
            community &#129303;
          </h3>

          <form
            className="flex justify-center items-center h-96  mt-4 "
            onSubmit={submitHandler}
          >
            <div className="form-post rounded">
              {/* <!--middle creat tweet--> */}
              <h2 className="px-4 py-3 text-lg font-semibold text-white">
                Create Post
              </h2>

              <div className="flex rounded mx-4 form-post">
                <div className="m-2 w-10 py-1">
                  <img
                    className="inline-block h-10 w-10 rounded-full"
                    src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
                    alt=""
                  />
                </div>
                <div className="flex-1 p-4  ">
                  <textarea
                    className=" bg-transparent text-white font-medium text-lg w-full"
                    rows="2"
                    cols="70"
                    placeholder="What's happening?"
                    ref={tweetInputRef}
                  ></textarea>
                </div>
              </div>
              <div className="flex">
                <div className="flex-1 mb-2">
                  <button
                    type="submit"
                    className="bg-blue-400 hover:bg-blue-500 mt-4 text-white font-bold py-2 px-8 rounded-full mr-8 float-right"
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
export default Home;
