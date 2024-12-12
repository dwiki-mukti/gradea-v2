/* eslint-disable @next/next/no-img-element */
'use client'

import InputText from "@/externals/components/inputs/InputText";
import { Poppins } from "next/font/google";
import { useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: "normal",
});

function LoginPage() {
  /**
   * State declaration
   */
  const [FormLogin, setFormLogin] = useState({})


  /**
   * Function handler
   */
  // function onSubmitLogin(e: FormEvent<HTMLFormElement>) {
  //   e.preventDefault()
  //   window.location.href = '/admin/buku'
  // }

  const SocialMediaButton = ({
    label = 'Github',
    icon
  }: { label: string; icon: string }) => {
    return (
      <button className="border-[1px] border-slate-200 text-center w-full py-3 rounded-lg justify-center items-center flex gap-3">
        <img className="w-4 lg:w-6" src={icon} alt={label} />
        <div className="font-bold text-sm lg:text-md">
          <span>Sign up</span>{' '}<span className="hidden lg:inline-block">with {label}</span>
        </div>
      </button>
    )
  }

  /**
   * Render JSX
   */
  return (
    <section style={poppins.style} className={'min-h-screen lg:min-h-0 lg:h-screen flex p-[1rem] bg-blue-200/40'}>
      <div className="block lg:flex w-full overflow-hidden">
        <div className="bg-white min-h-full lg:min-h-0 lg:h-full flex-1  w-full flex justify-center items-center py-8">
          <div className="w-[80%]">
            <div className="flex-1">
              <span className="font-bold block text-md lg:text-[1.3rem] text-black pb-6 lg:pb-2">Welcome Back</span>
              <div className="flex justify-between gap-4">
                <SocialMediaButton label="Google" icon="/public/images/google-icon.svg" />
                <SocialMediaButton label="Github" icon="/public/images/github-icon.svg" />
              </div>

              <div className="flex mt-4 lg:mt-8 mb-2 items-center gap-4">
                <hr className="bg-black h-[1px] w-full" />
                <span className="text-sm lg:text-md">or</span>
                <hr className="bg-black h-[1px] w-full" />
              </div>

              <form action="" className="flex flex-col gap-2">
                <div className="py-2 gap-2 flex flex-col">
                  <label className="text-sm lg:text-md" htmlFor="email">Email</label>
                  <InputText stateHandler={[FormLogin, setFormLogin]} name={"email"} placeholder="john.doe@example.com" noLabel />
                </div>
                <div className="py-2 gap-2 flex flex-col">
                  <label className="text-sm lg:text-md" htmlFor="password">Password</label>
                  <InputText stateHandler={[FormLogin, setFormLogin]} name={"password"} placeholder="****" noLabel type="password" />
                </div>
                <div className="flex flex-col lg:flex-row justify-between gap-2">
                  <div className="flex gap-2">
                    <input type="checkbox" id="rememberMe" name="rememberMe" />
                    <label className="text-sm lg:text-md" htmlFor="rememberMe">Remember Me</label>
                  </div>

                  <div>
                    <a href="#" className="text-sm lg:text-md text-primary hover:text-primary">Forgot Password?</a>
                  </div>
                </div>
                <div className="my-2">
                  <button className="text-sm lg:text-md bg-primary block w-full py-3 mx-auto text-white rounded-lg" type="submit">Sign In</button>
                </div>
              </form>

              <span className="text-sm lg:text-md text-slate-600 hover:text-slate-700 mt-2 mb-4">Don&apos;t have an account? <a href="#" className="text-primary hover:text-primary">Sign up now</a></span>

            </div>

            <div className="mt-12">
              <div className="text-center text-slate-600">
                <span className="text-sm lg:text-md">&copy; 2024 SILOG. All rights reserved.</span>
              </div>
            </div>
          </div>

        </div>
        <div className="hidden lg:flex bg-white min-h-full lg:min-h-0 lg:h-full flex-1  w-full justify-center items-center py-8 relative" style={{
          backgroundImage: `url("/public/images/login-background.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh"
        }}>
          <div className="absolute top-0 right-0 bottom-0 left-0 z-1 bg-black/50" />
          <div className="w-[80%] relative z-1">
            <img src={"/public/images/main-logo.png"} alt="" className="mb-5" />
            <span className="vision text-slate-100 font-bold lg:text-[3.4rem] lg:leading-[3.8rem] block mb-5">Explore the world leading design portfolios</span>
            <span className="description text-slate-300 block text-sm">Millions of designers and agencies around the world showcase their portfolio work on Flowbite - the home to the world&apos;s best design and creative professionals.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginPage