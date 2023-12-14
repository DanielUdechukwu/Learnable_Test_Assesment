import React from "react";
import Nav from "../components/Nav";
import Hero from "../assets/hero.png"
import Button from "../components/Button";

const Home = () => {
  return (
    <>
      <div className="font-Poppins">
        <Nav />
        <Main />
      </div>
    </>
  )
}

const Main = () => {
  return (
    <>
      <div className="w-[80%] md:w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row items-center mt-10">
          <div className="w-full mt-8 mb-6 lg:w-[60%]">
            <p className="font-bold text-xl lg:text-lg text-[#6acfef]">TRENDIEST FASHION EVER</p>
            <p className="mt-4 text-3xl leading-loose w-full lg:w-[50%]">When you are in doubt, wear a Viss Fashions Denim</p>
            <Button
              text = "Buy Now"
              className = "text-xs bg-[#e87a14] border border-[#e87a14] py-3 px-7 rounded-xl text-white font-semibold mt-6" 
            />
          </div>
          <div className="w-full mb-10 lg:mb-0 lg:w-[25rem]">
            <img className="w-full" src={Hero} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home