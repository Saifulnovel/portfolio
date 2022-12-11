// import { Resume } from 'grommet-icons';
// import React from 'react';
// import { Link } from 'react-router-dom';


// const Navbar = () => {
//     return (
//       <div className="sticky top-0 z-50 mb-5">
//         <div className="navbar bg-green-200">
//           <div className="navbar-start">
//             <div className="dropdown">
//               <label tabIndex={0} className="btn btn-ghost lg:hidden">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h8m-8 6h16"
//                   />
//                 </svg>
//               </label>
//               <ul
//                 tabIndex={0}
//                 className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
//               >
//                 <li className="font-extrabold">
//                   <Link className="font-bold" to="/">
//                     Home
//                   </Link>
//                 </li>
//                 {/* <li tabIndex={0}>
//                   <a className="justify-between">
//                     Parent
//                     <svg
//                       className="fill-current"
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
//                     </svg>
//                   </a>
//                   <ul className="p-2">
//                     <li>
//                       <a>Submenu 1</a>
//                     </li>
//                     <li>
//                       <a>Submenu 2</a>
//                     </li>
//                   </ul>
//                 </li> */}
//                 <li>
//                   <Link className="font-bold" to="/about">
//                     About me
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <Link className="btn btn-ghost normal-case text-2xl font-serif font-bold">
//               Novel's Portfolio
//             </Link>
//           </div>
//           <div className="navbar-center hidden lg:flex">
//             <ul className="menu menu-horizontal px-1">
//               <li>
//                 <Link className="font-bold" to="/">
//                   Home
//                 </Link>
//               </li>
//               {/* <li tabIndex={0}>
//                 <a>
//                   Parent
//                   <svg
//                     className="fill-current"
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
//                   </svg>
//                 </a>
//                 <ul className="p-2">
//                   <li>
//                     <a>Submenu 1</a>
//                   </li>
//                   <li>
//                     <a>Submenu 2</a>
//                   </li>
//                 </ul>
//               </li> */}
//               <li>
//                 <Link className="font-bold" to="/about">
//                   About me
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div className="navbar-end">
//             <a className="btn btn-outline font-extrabold">
//               {" "}
//               <span className="green-400">
//                 {" "}
//                 <Resume></Resume>{" "}
//               </span>{" "}
//               Resume
//             </a>
//           </div>
//         </div>
//       </div>
//     );
// };

// export default Navbar;

// import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Resume } from "grommet-icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Novels Portfolio
          </a>
        </a>
        <nav className="md:ml-auto  md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-end ">
          <Link to='/' className="mr-5 font-bold text-white">
            Home
          </Link>
          <Link to='/about' className="mr-5 font-bold text-white">
            About Me
          </Link>
          <Link to='/blog' className="mr-5 font-bold text-white">
            Blogs
          </Link>
        </nav>
        <a
          href="resume.pdf" download
          className="inline-flex items-center bg-base-700 text-white border-2 py-1 px-3 focus:outline-none hover:bg-white hover:text-slate-600 rounded text-base mt-4 md:mt-0"
        >
          <Resume></Resume>
          Resume
          
        </a>
      </div>
    </header>
  );
}
