import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Auth } from "../firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";

function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const logout = async () => {
    await signOut(Auth);
    navigate("/");
  };

  return (
    <Navbar className="mx-auto max-w-full  nav ">
      <div className="container mx-auto flex items-center justify-around text-white">
        <Typography
          as="a"
          href="home"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-bold "
        >
          <span>Twieets</span>
        </Typography>

        <span>
          <Link to="/new">
            <button className="bg-blue-400 hover:bg-blue-500 rounded-full text-white font-bold py-2 px-4 mr-6 ">
              New Post
            </button>
          </Link>
          <button
            onClick={logout}
            className="bg-blue-400 hover:bg-blue-500 rounded-full text-white font-bold py-2 px-4 float-right"
          >
            Sign Out
          </button>
        </span>
      </div>
    </Navbar>
  );
}
export default Nav;
