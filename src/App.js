import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from "./firebase-config";

function App() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(Auth, loginEmail, loginPassword);
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      <section className="flex justify-center items-center h-screen bg-black ">
        <div className="border-2 max-w-md w-full  rounded p-6 space-y-4 bg-gray-900 text-white">
          {error && (
            <div
              class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <span class="block sm:inline">{error}</span>
              <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg
                  class="fill-current h-6 w-6 text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          )}
          <div className="mb-4 bg-gray-900 text-center">
            <p className="text-gray-600 bg-gray-900">WELCOME BACK</p>

            <h2 className="text-lg font-bold bg-gray-900">
              Log into your account
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="mt-10 bg-gray-900">
            <div>
              <label className="block mb-1 bg-gray-900">
                Email or Username
              </label>
              <input
                className="dark:bg-gray-900  dark:text-white w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
                type="text"
                placeholder="Enter your email or username"
                required
                onChange={(event) => {
                  setLoginEmail(event.target.value);
                }}
              />
            </div>
            <div>
              <div className="flex justify-between bg-gray-900 mt-3">
                <label className="block mb-1 bg-gray-900">Password</label>

                <a
                  href="/forgot"
                  className="text-sm text-blue-600 hover:underline bg-gray-900"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                className="dark:bg-gray-900 dark:text-white w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
                placeholder="Enter your password"
                required
                onChange={(event) => {
                  setLoginPassword(event.target.value);
                }}
              />
            </div>
            <div className="mt-3">
              <button
                type="submit"
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-100"
              >
                Login
              </button>
            </div>
            <div className="flex items-center justify-between mt-2 bg-gray-900">
              <p className="text-gray-600 bg-gray-900">
                Not registered yet? &nbsp;
                <Link to="/register" className="text-white bg-gray-900">
                  Register &#129062;
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
