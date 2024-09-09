"use client";
import React from "react";
import BLogItem from "./blog_items";
import { BlogItem } from "@/components/interface/blog";
import { useState, useEffect } from "react";
export default function PopularPost() {
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
    <div className=" px-10">
      <h1 className="text-2xl font-bold  font-mono text-center text-gray-900 dark:text-white ">
        Popular Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-3">
        <BLogItem
          key={0}
          createdAt={blogs[0]?.createdAt}
          name={blogs[0]?.name}
          description={blogs[0]?.description}
          content={blogs[0]?.content}
          field={blogs[0]?.field}
          author={blogs[0]?.author}
          id={blogs[0]?.id}
          image={blogs[0]?.image}
        />
        <BLogItem
          key={1}
          createdAt={blogs[1]?.createdAt}
          name={blogs[1]?.name}
          description={blogs[1]?.description}
          content={blogs[1]?.content}
          field={blogs[1]?.field}
          author={blogs[1]?.author}
          id={blogs[1]?.id}
          image={blogs[1]?.image}
        />
        <BLogItem
          key={2}
          createdAt={blogs[2]?.createdAt}
          name={blogs[2]?.name}
          description={blogs[2]?.description}
          content={blogs[2]?.content}
          field={blogs[2]?.field}
          author={blogs[2]?.author}
          id={blogs[2]?.id}
          image={blogs[2]?.image}
        />
      </div>
    </div>
  );
}
