"use client";
import FacebookIcon from "@/svg/facebookicon";
import InstagramIcon from "@/svg/instagramicon";
import LinkedInIcon from "@/svg/linkedicon";
import GitHubIcon from "@/svg/githubicon";
import iconpage from "@/img/iconpage.png";
export default function Footer() {
  return (
    <div className="w-full bg-stone-100 dark:bg-slate-900 shadow-md shadow-slate-700 font-mono p-10 gap-5 ">
      <div className="flex w-full place-content-between py-10">
        <div>
          <h2 className="text-xl font-bold">Sign up to my blog</h2>
          <p>Stay up to date with the latest post from me</p>
        </div>
        <div className="flex gap-3 h-10">
          <input
            type="text"
            className="border border-stone-300 rounded-lg px-2 bg-stone-100 dark:bg-gray-950 dark:border-gray-700"
            placeholder="Email address"
          />
          <div className="">
            <div className="grid gap-8 items-start justify-center">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button className="relative px-4 py-2 bg-stone-100 dark:bg-black rounded-lg leading-none flex items-center divide-x dark:divide-gray-600">
                  <span className="flex items-center space-x-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-pink-600 -rotate-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                    <span className="pr-6 dark:text-gray-100">Subscribe</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full place-content-between self-center content-center ">
        <div className="flex w-80 place-content-center">
          <img
            src={iconpage.src}
            className="w-30 h-30"
            onClick={() => (window.location.href = "/")}
          />
        </div>
        <div className="flex flex-col place-items-center gap-2">
          <div className="place-content-center">Contact with me</div>
          <div className="flex gap-2">
            <FacebookIcon />
            {/* <InstagramIcon /> */}
            <LinkedInIcon />
            <GitHubIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
