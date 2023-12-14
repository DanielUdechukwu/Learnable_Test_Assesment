import React, { useState } from "react";
import { Link } from "react-router-dom"
import Ham from "../assets/hamburger.svg"
import Button from "./Button";

const Nav = () => {

  const [toggle, setToggle] = useState(false)

  const toggleHamburger = () => {
    setToggle(!toggle)
    console.log(toggle)
  }

  const disableHamburger = () => {
    setToggle(false);
  }

  return(
    <header className="bg-white">
      <nav className="w-[90%] mx-auto flex items-center justify-between py-5">
        <p className="text-2xl font-medium">Viss Fashions</p>

        <div className={`${toggle ? 'rotate-180' : 'rotate-0'} lg:hidden cursor-pointer`} onClick={toggleHamburger}>
          <img className="h-8" src={Ham} alt="" />
        </div>

        <div className={`${toggle ? 'visible shadow-md' : 'invisible'} lg:shadow-none absolute top-[4rem] right-0 w-full pt-4 pb-2 lg:visible lg:static lg:p-0 lg:w-auto md:border-b-[1px] lg:border-b-0 border-gray-400 px-2 bg-white`}>
          <ul className={`${toggle ? 'flex-col lg:flex-row' : 'flex-row'} flex lg:gap-2`}>
            <li className="text-sm cursor-pointer lg:hover:text-[#e87a14] transition duration-450 ease-out hover:ease-in border-b w-full h-12 flex items-center hover:bg-[#e5e7eb] px-4 lg:border-none lg:hover:bg-white">About</li>
            <li className="text-sm cursor-pointer lg:hover:text-[#e87a14] transition duration-450 ease-out hover:ease-in border-b w-full h-12 flex items-center hover:bg-[#e5e7eb] px-4 lg:border-none lg:hover:bg-white">Clothing</li>
            <li className="text-sm cursor-pointer lg:hover:text-[#e87a14] transition duration-450 ease-out hover:ease-in border-b w-full h-12 flex items-center hover:bg-[#e5e7eb] px-4 lg:border-none lg:hover:bg-white">Accessories</li>
            <li className="text-sm cursor-pointer lg:hover:text-[#e87a14] transition duration-450 ease-out hover:ease-in border-b w-full h-12 flex items-center hover:bg-[#e5e7eb] px-4 lg:border-none lg:hover:bg-white">Services</li>

            <div className="lg:hidden mt-6 mb-2 flex flex-row-reverse justify-end px-4 gap-4">
              <Link to="/login">
                <Button
                  text = "Login"
                  className = "text-xs border border-transparent hover:border-[#e87a14] py-3 px-7 rounded-xl font-semibold transition duration-650 ease-out hover:ease-in" 
                />
              </Link>
              <Button
                text = "Sign up"
                className = "text-xs bg-[#e87a14] border border-[#e87a14] py-3 px-7 rounded-xl text-white font-semibold"
              />
            </div>
          </ul>
          
        </div>
        
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/login">
            <Button
              text = "Login"
              className = "text-xs border border-transparent hover:border-[#e87a14] py-3 px-7 rounded-xl font-semibold transition duration-650 ease-out hover:ease-in" 
            />
          </Link>
          <Button
            text = "Sign up"
            className = "text-xs bg-[#e87a14] border border-[#e87a14] py-3 px-7 rounded-xl text-white font-semibold"
          />
        </div>
      </nav>
    </header>
  )
}

export default Nav

// import React from "react";
// import Button from "./Button";

// const Nav = () => {
//   return (
//     <>
//       <header className="">
//         <nav className="w-[90%] mx-auto flex items-center justify-between py-5">
//           <p className="text-2xl font-medium">Viss Fashions</p>
//           <ul className="flex items-center gap-8">
//             <li className="text-sm cursor-pointer hover:text-[#e87a14] transition duration-450 ease-out hover:ease-in">About</li>
//             <li className="text-sm cursor-pointer hover:text-[#e87a14] transition duration-450 ease-out hover:ease-in">Clothing</li>
//             <li className="text-sm cursor-pointer hover:text-[#e87a14] transition duration-450 ease-out hover:ease-in">Accessories</li>
//             <li className="text-sm cursor-pointer hover:text-[#e87a14] transition duration-450 ease-out hover:ease-in">Services</li>
//           </ul>
//           <div className="hidden lg:flex items-center gap-4">
//             <Button
//               text = "Login"
//               className = "text-xs border border-transparent hover:border-[#e87a14] py-3 px-7 rounded-xl font-semibold transition duration-650 ease-out hover:ease-in" 
//             />
//             <Button
//               text = "Sign up"
//               className = "text-xs bg-[#e87a14] border border-[#e87a14] py-3 px-7 rounded-xl text-white font-semibold"
//             />
//           </div>
//         </nav>
//       </header>
//     </>
//   )
// }

// export default Nav