"use client";
import React, { useEffect } from "react";
import { UserProps } from "../../../api/api";
import { AuthAPI } from "../../../api/api";
import { useRouter } from "next/navigation";
const videoBg = require("../../assets/video/video.mp4");
export default function LoginPage() {
  const [isSignedIn, setIsSignedIn] = React.useState(1);
  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      setIsSignedIn(3);
    }
  }, []);

  async function handleSignIn(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    const form = e.currentTarget.form as HTMLFormElement;
    const email = form.elements.namedItem("email") as HTMLInputElement;
    const password = form.elements.namedItem("password") as HTMLInputElement;
    try {
      const authAPI = new AuthAPI();
      const response = await authAPI.signinUser(email.value, password.value);
      if (response.data.access_token) {
        localStorage.setItem("access_token", response.data.access_token);
        setIsSignedIn(3);
        console.log("Access token saved to localStorage");
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSignUp(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    const form = e.currentTarget.form as HTMLFormElement;
    const password = form.elements.namedItem("password") as HTMLInputElement;
    const repeatPassword = form.elements.namedItem(
      "repeat-password"
    ) as HTMLInputElement;
    const email = form.elements.namedItem("email") as HTMLInputElement;
    const name = form.elements.namedItem("name") as HTMLInputElement;
    const phone = form.elements.namedItem("phone") as HTMLInputElement;
    const dateOfBirth = form.elements.namedItem(
      "dateOfBirth"
    ) as HTMLInputElement;
    const description = form.elements.namedItem(
      "description"
    ) as HTMLInputElement;

    if (password.value !== repeatPassword.value) {
      alert("Passwords do not match");
      return;
    }
    try {
      const authAPI = new AuthAPI();
      console.log("SignUp", email.value, password.value);
      const response = await authAPI.signup({
        email: email.value,
        password: password.value,
        name: name.value,
        phone: phone.value,
        dateOfBirth: dateOfBirth.value,
        description: description.value,
      } as UserProps);
      console.log("SignUp", response);
      if (response.data.status === 409) {
        alert("User already exists");
      } else if (response.status === 201) {
        setIsSignedIn(1);
        alert("User created successfully");
      }
    } catch (error) {
      console.error(error);
    }
  }

  const router = useRouter();
  // function handleLogout() {
  //   localStorage.removeItem("access_token");
  //   setIsSignedIn(1);
  //   console.log("Access token removed from localStorage");
  // }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className="relative z-10 flex flex-col place-items-center place-content-center gap-10 font-bold text-white bg-black/40
        border border-white border-opacity-50 rounded-lg shadow-lg  
        w-full h-full
        "
      >
        <div className="flex flex-col">
          {isSignedIn == 3 && (
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-white">
                Welcome Back!
              </h1>
              <p className="mt-2 text-gray-500">You are signed in.</p>
              <button
                onClick={() => {
                  router.push("/");
                }}
                className="mt-4 rounded-md bg-blue-600 px-3 py-2 text-white focus:bg-blue-700 focus:outline-none"
              >
                Home
              </button>
            </div>
          )}
          {isSignedIn == 1 && (
            <div className="relative mx-auto w-full max-w-md bg-black/80 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
              <div className="w-full">
                <div className="text-center">
                  <h1 className="text-3xl font-semibold text-white">Sign in</h1>
                  <p className="mt-2 text-gray-500">
                    Sign in below to access your account
                  </p>
                </div>
                <div className="mt-5">
                  <form action="">
                    <div className="relative mt-6">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Name"
                        className="peer  mt-1 w-full border-b-2 border-gray-300 px-2 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                      />
                      <label
                        htmlFor="email"
                        className="pointer-events-none absolute top-0 left-2 origin-left -translate-y-1/2 transform text-xs text-gray-600 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-xs peer-focus:text-gray-600"
                      >
                        Email Address
                      </label>
                    </div>
                    <div className="relative mt-6">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        className="peer peer mt-1 w-full border-b-2 border-gray-300 px-2 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                      />
                      <label
                        htmlFor="password"
                        className="pointer-events-none absolute top-0 left-2 origin-left -translate-y-1/2 transform text-xs text-gray-600 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-xs peer-focus:text-gray-600"
                      >
                        Password
                      </label>
                    </div>
                    <div className="my-6">
                      <button
                        type="submit"
                        onClick={(e) => handleSignIn(e)}
                        className="w-full rounded-md bg-violet-600 px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
                      >
                        Sign in
                      </button>
                    </div>
                    <p className="text-center text-sm text-gray-500">
                      Don&#x27;t have an account yet?
                      <button
                        className="font-semibold text-violet-500 hover:underline focus:text-violet-500 focus:outline-none"
                        onClick={() => setIsSignedIn(2)}
                      >
                        Sign up
                      </button>
                      .
                    </p>
                  </form>
                </div>
              </div>
            </div>
          )}

          {isSignedIn == 2 && (
            <div className="relative mx-auto w-full max-w-md bg-black/80 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
              <div className="w-full">
                <div className="text-center">
                  <h1 className="text-3xl font-semibold text-white">Sign in</h1>
                  <p className="mt-2 text-gray-500">
                    Sign in below to access your account
                  </p>
                </div>
                <div className="mt-5">
                  <form action="">
                    <div className="relative mt-6">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email Address"
                        className="peer  mt-1 w-full border-b-2 border-gray-300 px-2 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                      />
                      <label
                        htmlFor="email"
                        className="pointer-events-none absolute top-0 left-2 origin-left -translate-y-1/2 transform text-xs text-gray-600 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-xs peer-focus:text-gray-600"
                      >
                        Email Address
                      </label>
                    </div>
                    <div className="relative mt-6">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        className="peer  mt-1 w-full border-b-2 border-gray-300 px-2 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                      />
                      <label
                        htmlFor="name"
                        className="pointer-events-none absolute top-0 left-2 origin-left -translate-y-1/2 transform text-xs text-gray-600 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-xs peer-focus:text-gray-600"
                      >
                        Name"
                      </label>
                    </div>
                    <div className="relative mt-6">
                      <input
                        type=""
                        name="phone"
                        id="phone"
                        placeholder="Phone"
                        className="peer  mt-1 w-full border-b-2 border-gray-300 px-2 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                      />
                      <label
                        htmlFor="phone"
                        className="pointer-events-none absolute top-0 left-2 origin-left -translate-y-1/2 transform text-xs text-gray-600 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-xs peer-focus:text-gray-600"
                      >
                        Phone"
                      </label>
                    </div>
                    <div className="relative mt-6">
                      <input
                        type="date"
                        name="dateOfBirth"
                        id="dateOfBirth"
                        placeholder="Date of Birth"
                        className="peer  mt-1 w-full border-b-2 border-gray-300 px-2 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                      />
                      <label
                        htmlFor="dateOfBirth"
                        className="pointer-events-none absolute top-0 left-2 origin-left -translate-y-1/2 transform text-xs text-gray-600 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-xs peer-focus:text-gray-600"
                      >
                        Date of Birth"
                      </label>
                    </div>
                    <div className="relative mt-6">
                      <input
                        type="text"
                        name="description"
                        id="description"
                        placeholder="Description"
                        className="peer  mt-1 w-full border-b-2 border-gray-300 px-2 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                      />
                      <label
                        htmlFor="description"
                        className="pointer-events-none absolute top-0 left-2 origin-left -translate-y-1/2 transform text-xs text-gray-600 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-xs peer-focus:text-gray-600"
                      >
                        Description"
                      </label>
                    </div>
                    <div className="relative mt-6">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        className="peer peer mt-1 w-full border-b-2 border-gray-300 px-2 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                      />
                      <label
                        htmlFor="password"
                        className="pointer-events-none absolute top-0 left-2 origin-left -translate-y-1/2 transform text-xs text-gray-600 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-xs peer-focus:text-gray-600"
                      >
                        Password
                      </label>
                    </div>
                    <div className="relative mt-6">
                      <input
                        type="password"
                        name="repeat-password"
                        id="repeat-password"
                        placeholder="Repeat Password"
                        className="peer peer mt-1 w-full border-b-2 border-gray-300 px-2 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                      />
                      <label
                        htmlFor="repeat-password"
                        className="pointer-events-none absolute top-0 left-2 origin-left -translate-y-1/2 transform text-xs text-gray-600 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-xs peer-focus:text-gray-600"
                      >
                        Repeat Password
                      </label>
                    </div>
                    <div className="my-6">
                      <button
                        type="submit"
                        onClick={(e) => handleSignUp(e)}
                        className="w-full rounded-md bg-violet-600 px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
                      >
                        Sign Up
                      </button>
                    </div>
                    <p className="text-center text-sm text-gray-500">
                      Already have an account yet?
                      <button
                        className="font-semibold text-violet-500 hover:underline focus:text-violet-500 focus:outline-none"
                        onClick={() => setIsSignedIn(1)}
                      >
                        Sign In
                      </button>
                      .
                    </p>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
