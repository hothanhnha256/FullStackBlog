import React from "react";
import avatar from "@/img/avatar.jpg";
const AboutMe = () => {
  return (
    <div className="relative group m-10 md:m-20">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <div className="relative px-4 py-2 bg-stone-100 dark:bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
        <div className="flex place-content-between m-5 items-center gap-5">
          <div className="flex flex-col w-2/3">
            <div className="text-3xl font-bold font-mono">About Me</div>
            <div className=" text-sm font-mono">
              Hiiii, I'm Ho Thanh Nha, if this is the first time you visit my
              blog, welcome!
              <br />I was born in 2004 in Binh Dinh Province, Vietnam. Now, I'm
              living in Ho Chi Minh City and studying in Ho Chi Minh University
              of Technology. My major is Computer Science. I'm interested in Web
              Development and Data Engineer.
              <br />
              This Blogsite is my personal project, which I built to share my
              knowledge and experience in programming. I hope that this blog
              will help you to learn more about programming and technology. If
              you have any questions or want to discuss with me, feel free to
              contact me via email or social media in the footer.
            </div>
          </div>

          <div>
            <img src={avatar.src} className="h-80  rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
