"use client";
import React from "react";
import { BlogItem } from "@/components/interface/blog";
export default function BLogItem2(blogItem: BlogItem) {
  const [isAdmin, setIsAdmin] = React.useState(true);
  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <div
        className="flex flex-col font-mono"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="relative">
          <button className="absolute top-1 right-1 text-lg text-white rounded-full px-2 transition ease-in-out delay-150 bg-blue-500  hover:scale-125 hover:bg-indigo-500 duration-300">
            {isAdmin && "Edit"}
          </button>
          <img
            src={blogItem.image}
            className="w-full h-36 object-cover rounded-xl"
          />
        </div>
        <h1 className="font-bold">
          {blogItem?.description?.substring(0, 50)}
          {"..."}
        </h1>
        <div className="flex place-content-between font-light">
          <p className="text-violet-500">{blogItem.author}</p>
          <p className="text-violet-500">
            {formatDate(new Date(blogItem?.createdAt))}
          </p>
        </div>
      </div>
      {open && blogItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black bg-opacity-50 "
            onClick={() => setOpen(false)}
          ></div>
          <div className="relative bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg h-2/3 w-11/12 md:w-1/2 lg:w-1/3 animate-slide-up overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-xl text-white rounded-full px-2 transition ease-in-out delay-150 bg-blue-500  hover:scale-125 hover:bg-indigo-500 duration-300"
              onClick={() => setOpen(false)}
            >
              &times;
            </button>
            <div>
              <img
                src={blogItem.image}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <h1 className="font-bold text-xl mt-4">{blogItem.content}</h1>
            <p className="mt-2">{blogItem.description}</p>
            <div className="flex place-content-between font-light mt-4">
              <p className="text-violet-500">{blogItem.author}</p>
              <p className="text-violet-500">
                {formatDate(new Date(blogItem?.createdAt))}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
