"use client";
import React from "react";
import { useState } from "react";
import { BlogAPI } from "../../../api/api";
export default function CreateBlog() {
  const blogAPI = new BlogAPI();
  async function handleSubmit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    const response = await blogAPI.createBlog({
      title: (document.getElementById("title") as HTMLInputElement).value,
      content: (document.getElementById("content") as HTMLInputElement).value,
    });
    console.log(response);
    if (response.status === 201) {
      alert("Blog created successfully");
    }
  }
  const [createBlog, setCreateBlog] = useState(false);
  return (
    <div className="flex place-content-center ">
      <div className="self-center">
        <button
          className="bg-blue-500 rounded-xl px-4 py-2 font-mono text-lg font-bold
            hover:ease-in-out hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-blue-300
            hover:scale-110 hover:text-white duration-300
        "
          onClick={() => setCreateBlog(true)}
        >
          Create Blog
        </button>
      </div>
      {createBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/90">
            <div className="flex place-content-center place-items-center flex-col w-full h-screen items-center">
              <div className="max-w-md mx-auto relative min-w-80">
                <button
                  className="absolute right-0 top-0 bg-blue-500 ease-in-out  rounded-full hover:scale-110 hover:bg-indigo-500 duration-300 text-xs px-3"
                  onClick={() => setCreateBlog(false)}
                >
                  -
                </button>
                <h1 className="text-2xl font-bold font-mono text-center text-white mb-5">
                  Create Blog
                </h1>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="title"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Title
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="content"
                    id="content"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="content"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Content
                  </label>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 ease-in-out rounded-lg hover:scale-110 hover:bg-indigo-500 duration-300 text-white px-4 py-2 font-mono text-lg font-bold
                    focus:ring-4 focus:outline-none focus:ring-blue-300
                    hover:text-white
                    items-center flex w-full text-center
                    "
                  onClick={handleSubmit}
                >
                  Create Blog
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
