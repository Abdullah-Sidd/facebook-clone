import React from 'react'
import { useSession, SessionProvider,signOut } from 'next-auth/react';

const Herosection = () => {
  const { data: session } = useSession();
  return (
<div>


<>
  {/* component */}
  {/* component */}
  <div className="flex bg-white">
    <div className="md:flex w-2/5 md:w-1/4 h-screen bg-white border-r hidden">
      <div className="mx-auto py-10">
        <h1 className="text-2xl font-bold mb-10 cursor-pointer text-[#EC5252] duration-150">
          Asason
        </h1>
        <ul>
          <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="font-semibold">Home</span>
          </li>
          <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="font-semibold">All Courses</span>
          </li>
          <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
            <span className="font-semibold">My Course</span>
          </li>
          <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="font-semibold">Profile</span>
          </li>
          <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            <span className="font-semibold">Setthing</span>
          </li>
          <button className="w-full mt-10 bg-[#EC5252] rounded-full py-1.5 text-white">
            Learn
          </button>
        </ul>
      </div>
    </div>
    <main className="min-h-screen w-full bg-white border-l">
      <nav className="flex items-center justify-between px-10 bg-white py-6 border-b">
        <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md space-x-3 w-96">
          <input
            type="text"
            placeholder="search"
            className="bg-gray-100 outline-none w-full"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 cursor-pointer text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="flex items-center space-x-4">
          <img
            className="w-8 rounded-full"
            src="https://imagez.tmz.com/image/f7/1by1/2021/12/14/f7703994b69d48ca802df55729a2325c_xl.jpg"
            alt="Elon Musk"
          />
          <p className="hidden md:block">Elon Musk</p>
        </div>
      </nav>
      <div className="mx-6">
        <h1 className="my-6 text-3xl text-center">Upload posts</h1>
        <div className="md:flex  space-y-3 md:space-y-0 md:space-x-4 mt-6">


        <div className="bg-white  rounded-2xl  text-gray-500 font-medium mt-6 mx-auto">
      <div className="flex space-x-4 p-4 items-center">
        <img
         onClick={() => signOut()}
          className="rounded-full cursor-pointer"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow lg:ml-24 focus:outline-none"
            type="text"
          />
          <button hidden>
            Submit
          </button>
        </form>

          <div
            className="flex flex-col  filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img className="h-10 object-contain "   src="https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/ced1773f92d55861ad0e7e4de88405e6" alt="" />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
      </div>

      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" /></svg>
          <p className="text-xs sm:text-sm xl:text-base">Live</p>
        </div>

        <div
          className="inputIcon"
        >
          <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg>
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input
            type="file"
            hidden
          />
        </div>

        <div className="inputIcon">
          <svg className="w-6 h-6  text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" /></svg>
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>

        
        </div>
      </div>
      <div className="mx-6 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 mt-10">
        <div className="shadow-lg rounded-t-md overflow-hidden ">
          <div className="">
            <img
              className="w-sm"
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
            <div className="p-2 relative">
              <p className="text-lg mt-6 font-semibold">
                Basic how to ride your skateboard comfortly
              </p>
              <p>53K views • 2 weeks ago</p>
              <img
                className="h-12 w-12 rounded-full absolute -top-6 p-0.5 border-2 right-6"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="shadow-lg rounded-t-md overflow-hidden">
          <div className="">
            <img
              className="w-sm"
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
            <div className="p-2 relative">
              <p className="text-lg mt-6 font-semibold">
                Basic how to ride your skateboard comfortly
              </p>
              <p>53K views • 2 weeks ago</p>
              <img
                className="h-12 w-12 rounded-full absolute -top-6 p-0.5 border-2 right-6"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="shadow-lg rounded-t-md overflow-hidden ">
          <div className="">
            <img
              className="w-sm"
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
            <div className="p-2 relative">
              <p className="text-lg mt-6 font-semibold">
                Basic how to ride your skateboard comfortly
              </p>
              <p>53K views • 2 weeks ago</p>
              <img
                className="h-12 w-12 rounded-full absolute -top-6 p-0.5 border-2 right-6"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="shadow-lg rounded-t-md overflow-hidden ">
          <div className="">
            <img
              className="w-sm"
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
            <div className="p-2 relative">
              <p className="text-lg mt-6 font-semibold">
                Basic how to ride your skateboard comfortly
              </p>
              <p>53K views • 2 weeks ago</p>
              <img
                className="h-12 w-12 rounded-full absolute -top-6 p-0.5 border-2 right-6"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  <footer className="text-center py-6 mt-4">
    Copyright © 2022 dej45.com Template by Namina
  </footer>
</>


</div>
  )
}

export default Herosection
