import React from "react";
import { Link } from "react-router-dom";
import Orange from "../assets/orange.png"
import Logo from "../assets/logo.svg"
import Google from "../assets/google.svg"
import Facebook from "../assets/facebook.svg"
import Apple from "../assets/apple.svg"
import Twitter from "../assets/twitter.svg"
import Mail from "../assets/envelop.svg"
import Phone from "../assets/phone.svg"
import X from "../assets/x.svg"

const LoginMethodData = [
  {
    icon: Google,
    method: "Google"
  },
  {
    icon: Facebook,
    method: "Facebook"
  },
  {
    icon: Apple,
    method: "Apple"
  },
  {
    icon: Twitter,
    method: "Twitter"
  },
  {
    icon: Mail,
    method: "Email"
  },
  {
    icon: Phone,
    method: "Phone"
  },
]

const Login = () => {
  return (
    <>
      <div className="font-Poppins relative bg-[#b24038] min-h-screen lg:h-screen flex items-center justify-center">
        <Link to="/" className="absolute top-6 right-[45%] md:right-[48%] lg:right-16">
          <img src={X} alt="" />
        </Link>
        <div className="min-h-[90%] mt-20 mb-10 lg:h-[85%] w-[90%] lg:w-[70%] xl:w-[55%] flex">
          <div className="bg-white rounded-xl lg:rounded-l-xl lg:rounded-r-none py-4 w-full lg:w-[50%] md:w-[70%] mx-auto">
            <div className="flex flex-col justify-center items-center mt-8 mb-6">
              <img className="h-8 mb-3" src={Logo} alt="" />
              <p className="text-[#333333] text-lg font-medium">Log in or Sign up</p>
              <p className="text-xs text-[#828282]">Use your email or other serivce to continue with us  </p>
            </div>
            <div className="w-[85%] mx-auto">
              {LoginMethodData.map((items) => (
                <LoginMethod
                icon = {items.icon}
                method = {items.method}
              />
              ))}
            </div>
          </div>

          <div className="h-full rounded-r-xl w-[50%] hidden lg:block">
            <img className="h-full w-full rounded-r-xl" src={Orange} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

const LoginMethod = (props) => {
  return (
    <>
      <div className="border rounded-full flex items-center h-10 cursor-pointer hover:bg-[#e5e7eb] text-[#828282] hover:text-black transition duration-450 ease-out hover:ease-in mb-4">
        <div className="flex gap-4 items-center w-[60%] md:w-[45%] lg:w-[60%] mx-auto">
          <img className="h-5" src={props.icon} alt="" />
          <p className="text-xs font-medium">Continue with {props.method}</p>
        </div>
      </div>
    </>
  )
}

export default Login