import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const [openNav, setOpenNav] = useState(false);  
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

 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 

 
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
            <a href="new"><button className="bg-blue-400 hover:bg-blue-500 rounded-full text-white font-bold py-2 px-4 mr-6 ">New Post</button></a>
        <button onClick={logout} className="bg-blue-400 hover:bg-blue-500 rounded-full text-white font-bold py-2 px-4   float-right">
            Sign Out
        </button></span>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      
    </Navbar>
  );
}
export default Nav;