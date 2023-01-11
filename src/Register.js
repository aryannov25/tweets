import { useNavigate } from "react-router-dom";
import "./App.css";
import "./index.css";
import { Alert } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { Auth } from "./firebase-config";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [userName, setUserName] = useState({});

  const [show, setShow] = useState(true);


  useEffect(() => {
    onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);


  async function handleSubmit(e) {
    e.preventDefault();
     
    try {
      
      await createUserWithEmailAndPassword(
        Auth,
        registerEmail,
        registerPassword,
        userName
      );
      
      navigate("/home");
    } catch (error) {
      setError(error.message);
      alert(error.message);

      
    }
    navigate("/register");


  }

  return (
    <div>
      <section className="flex justify-center items-center h-screen bg-gray-100 dark:bg-black ">
        <div className="border-2 max-w-md w-full bg-white rounded p-6 space-y-4 dark:bg-gray-900 dark:text-white">
        {error && (
            <Alert
              show={show}
              dismissible={{
                onClose: () => setShow(false),
              }}
              className="bg-red-100 border w-full border-red-500 text-red-500 px-4 py-3 rounded relative"
            >
              {error}
            </Alert>
          )}

          <h1 className="text-white text-center">WELCOME</h1>

          <div className="mb-4 text-center">
            <h2 className="text-lg font-bold">Sign Up</h2>
          </div>
          <form onSubmit={handleSubmit} className="mt-10 ">
            <div>
              <label className="block mb-1">Username</label>
              <input
                className="dark:bg-gray-900 dark:text-white w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
                type="text"
                placeholder="Enter your username"
                required
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
              />
            </div>
            <div className="mt-3">
              <label className="block mb-1">Email</label>
              <input
                className="dark:bg-gray-900 dark:text-white w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
                type="text"
                placeholder="Enter your email "
                required
                onChange={(event) => {
                  setRegisterEmail(event.target.value);
                }}
              />
            </div>
            <div>
              <div className="flex justify-between mt-3">
                <label className="block mb-1 ">Password</label>
              </div>
              <input
                type="password"
                className="dark:bg-gray-900 dark:text-white w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
                placeholder="Enter your password"
                required
                onChange={(event) => {
                  setRegisterPassword(event.target.value);
                }}
              />
            </div>
            <div className="mt-3">
              <button
                type="submit"
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-100"
              >
                Register
              </button>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-gray-600">
                Already have a account?{" "}
                <a href="/" className="text-white">
                  Login &#129062;
                </a>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
