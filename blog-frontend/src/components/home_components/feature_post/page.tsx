"use client";
import { useState, useEffect } from "react";
import BLogItem2 from "./blog_items";
import { BlogItem } from "@/components/interface/blog";
const FeaturePost = () => {
  const [numberBlog, setNumberBlog] = useState(4);
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  useEffect(() => {
    fetch("https://65b75fb446324d531d5468b0.mockapi.io/none/Blog")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <div className=" px-10 mt-5">
      <h1 className="text-2xl font-bold  font-mono text-center text-gray-900 dark:text-white">
        Feature Posts
      </h1>
      <div className="flex gap-5 place-content-center py-5 items-center w-full ">
        <div className="w-80">
          <form className="max-w-md mx-auto">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search by title"
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="">
          <form className="max-w-sm mx-auto">
            <select
              id="quantity"
              name="quantity"
              onChange={(e) => setNumberBlog(+e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="4">4</option>
              <option value="8">8</option>
              <option value="16">16</option>

              <option value="32">32</option>
            </select>
          </form>
        </div>
      </div>

      <div className="grid grid-cols-4 px-16 gap-10 place-content-center mt-5">
        {[...Array(numberBlog)].map((_, index) => (
          <BLogItem2
            key={index}
            createdAt={blogs[index]?.createdAt}
            name={blogs[index]?.name}
            description={blogs[index]?.description}
            content={blogs[index]?.content}
            field={blogs[index]?.field}
            author={blogs[index]?.author}
            id={blogs[index]?.id}
            image={blogs[index]?.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturePost;
