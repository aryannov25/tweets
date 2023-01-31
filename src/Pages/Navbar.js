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
    // <Navbar className="mx-auto max-w-full  nav ">
    //   <div className="container mx-auto flex items-center justify-around text-white">
    // <Typography
    //   as="a"
    //   href="home"
    //   variant="small"
    //   className="mr-4 cursor-pointer py-1.5 font-bold "
    // >
    //   <span>Twieets</span>
    // </Typography>

    // <span>
    //     <a href="new"><button className="bg-blue-400 hover:bg-blue-500 rounded-full text-white font-bold py-2 px-4 mr-6 ">New Post</button></a>
    // <button onClick={logout} className="bg-blue-400 hover:bg-blue-500 rounded-full text-white font-bold py-2 px-4   float-right">
    //     Sign Out
    // </button></span>

    //   </div>

    // </Navbar>

  //   <div className="flex items-center text-white justify-between border-b border-gray-400 py-8">
  //     <a href="/">
  //       <Typography
  //         as="a"
  //         href="home"
  //         variant="small"
  //         className="mr-4 cursor-pointer py-1.5 font-bold "
  //       >
  //         <span>Twieets</span>
  //       </Typography>
  //     </a>
  //     <nav>
  //       <section className="MOBILE-MENU flex :hidden">
  //         <div
  //           className="HAMBURGER-ICON space-y-2"
  //           onClick={() => setIsNavOpen((prev) => !prev)}
  //         >
  //           <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
  //           <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
  //           <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
  //         </div>

  //         <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
  //           <div
  //             className="absolute top-0 right-0 px-8 py-8"
  //             onClick={() => setIsNavOpen(false)}
  //           >
  //             <svg
  //               className="h-8 w-8 text-gray-600"
  //               viewBox="0 0 24 24"
  //               fill="none"
  //               stroke="currentColor"
  //               strokeWidth="2"
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //             >
  //               <line x1="18" y1="6" x2="6" y2="18" />
  //               <line x1="6" y1="6" x2="18" y2="18" />
  //             </svg>
  //           </div>
  //           <ul className="flex flex-col items-center justify-between min-h-[250px]">
  //             {/* <li className="border-b border-gray-400 my-8 uppercase">
  //             <a href="/about">About</a>
  //           </li> */}
  //             <span>
  //               <a href="new">
  //                 <button className="bg-blue-400 hover:bg-blue-500 rounded-full text-white font-bold py-2 px-4 mr-6 ">
  //                   New Post
  //                 </button>
  //               </a>
  //               <button
  //                 onClick={logout}
  //                 className="bg-blue-400 hover:bg-blue-500 rounded-full text-white font-bold py-2 px-4   float-right"
  //               >
  //                 Sign Out
  //               </button>
  //             </span>
  //           </ul>
  //         </div>
  //       </section>

  //       <ul className="DESKTOP-MENU hidden space-x-8 :flex">
  //         <span>
  //           <a href="new">
  //             <button className="bg-blue-400 hover:bg-blue-500 rounded-full text-white font-bold py-2 px-4 mr-6 ">
  //               New Post
  //             </button>
  //           </a>
  //           <button
  //             onClick={logout}
  //             className="bg-blue-400 hover:bg-blue-500 rounded-full text-white font-bold py-2 px-4   float-right"
  //           >
  //             Sign Out
  //           </button>
  //         </span>
  //       </ul>
  //     </nav>
  //     <style>{`
  //   .hideMenuNav {
  //     display: none;
  //   }
  //   .showMenuNav {
  //     display: block;
  //     position: absolute;
  //     width: 100%;
  //     height: 100vh;
  //     top: 0;
  //     left: 0;
  //     background: white;
  //     z-index: 10;
  //     display: flex;
  //     flex-direction: column;
  //     justify-content: space-evenly;
  //     align-items: center;
  //   }
  // `}</style>
  //   </div>



    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3 text-white">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between :w-auto :static :block :justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/home"
            >
              pink Tailwind Starter Kit
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block :hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "flex align-center items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col  list-none ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text- leading- text-white opacity-75"></i><span className="ml-2">Share</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text- leading- text-white opacity-75"></i><span className="ml-2">Tweet</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text- leading- text-white opacity-75"></i><span className="ml-2">Pin</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  </>
  );
}
export default Nav;
