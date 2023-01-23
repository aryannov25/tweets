import { useNavigate } from "react-router-dom";
import "../App.css";
import "../index.css";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { Auth } from "../firebase-config";
import { Alert } from "@material-tailwind/react";

function App() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(true);

  async function triggerResetEmail(e) {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(Auth, email);
      setSuccess("Password reset email sent");
      alert("Password reset email sent");
    } catch (error) {
      setError(error.message);
      alert(error.message);
    }
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
          {success && (
            <Alert
              show={show}
              dismissible={{
                onClose: () => setShow(false),
              }}
              className="bg-blue-100 border w-full border-blue-500 text-blue-500 px-4 py-3 rounded relative"
            >
              {success}
            </Alert>
          )}

          {/* {success && (
            <div class="bg-red-100 border border-blue-500 text-blue-500 px-4 py-3 rounded relative" role="alert" show={show}
            dismissible={{
              onClose: () => setShow(false),
            }}>
            <span class="block sm:inline">{success}</span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg class="fill-current h-6 w-6 text-blue-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
          </div>
          )}
          {error && (
            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span class="block sm:inline">{error}</span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
            </span>
          </div>
          )} */}
          <div className="mb-4 text-center">
            <p className="text-gray-600">WELCOME </p>

            <h2 className="text-lg font-bold">Forgot Password</h2>
          </div>
          <form onSubmit={triggerResetEmail} className="mt-10 ">
            <div>
              <label className="block mb-1">Email </label>
              <input
                className="dark:bg-gray-900 dark:text-white w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
                type="text"
                placeholder="Enter your email "
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mt-3">
              <button
                type="submit"
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-100"
              >
                Reset Password
              </button>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-gray-600">
                Not registered yet? &nbsp;
                <a href="/register" className="text-white">
                  Register &#129062;
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
