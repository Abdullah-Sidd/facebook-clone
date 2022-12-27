import React from "react";
import Herosection from "./components/Herosection";
import { useSession, signIn, signOut,getSession } from "next-auth/react"
import Login from "./components/Login";
const index = ({session}) => {
  if (!session) return <Login />;
  if(session){


  return (
    <div>
      {/* Header Component */}
      {/* <header aria-label="Site Header" className="shadow-sm">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
          <div className="flex w-0 flex-1 lg:hidden">
            <button
              className="rounded-full bg-gray-100 p-2 text-gray-600"
              type="button"
            >
              <span className="sr-only">Account</span>
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewbox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-4">
            <a href="#">
              <span className="sr-only">Logo</span>
              <span className="h-10 w-20 rounded-lg bg-gray-200"></span>
            </a>

            <form className="mb-0 hidden lg:flex">
              <div className="relative">
                <input
                  className="h-10 rounded-lg border-gray-200 pr-10 text-sm placeholder-gray-300 focus:z-10"
                  placeholder="Search..."
                  type="text"
                />

                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 mr-px rounded-r-lg p-2 text-gray-600"
                >
                  <span className="sr-only">Submit Search</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewbox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>

          <div className="flex w-0 flex-1 justify-end lg:hidden">
            <button
              className="rounded-full bg-gray-100 p-2 text-gray-500"
              type="button"
            >
              <span className="sr-only">Menu</span>
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewbox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <nav
            aria-label="Site Nav"
            className="hidden items-center justify-center gap-8 text-sm font-medium lg:flex lg:w-0 lg:flex-1"
          >
            <a className="text-gray-900" href="">
              About
            </a>
            <a className="text-gray-900" href="">
              Blog
            </a>
            <a className="text-gray-900" href="">
              Projects
            </a>
            <a className="text-gray-900" href="">
              Contact
            </a>
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="#"
              className="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-600"
            >
              Log in
            </a>

            <a
              href="#"
              className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white"
            >
              Sign up
            </a>
          </div>
        </div>

        <div className="border-t border-gray-100 lg:hidden">
          <nav className="flex items-center justify-center overflow-x-auto p-4 text-sm font-medium">
            <a className="flex-shrink-0 pl-4 text-gray-900" href="">
              About
            </a>
            <a className="flex-shrink-0 pl-4 text-gray-900" href="">
              Blog
            </a>
            <a className="flex-shrink-0 pl-4 text-gray-900" href="">
              Projects
            </a>
            <a className="flex-shrink-0 pl-4 text-gray-900" href="">
              Contact
            </a>
          </nav>
        </div>
      </header> */}


      {/* {Sidebar Component} */}
      <main>
{/* 
      <div className="flex h-screen w-16 flex-col justify-between border-r bg-white">
        <div>
          <div className="inline-flex h-16 w-16 items-center justify-center">
            <span className="block h-10 w-10 rounded-lg bg-gray-200"></span>
          </div>

          <div className="border-t border-gray-100">
            <nav aria-label="Main Nav" className="flex flex-col p-2">
              <div className="py-4">
                <a
                  href=""
                  className="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                    General
                  </span>
                </a>
              </div>

              <ul className="space-y-1 border-t border-gray-100 pt-4">
                <li>
                  <a
                    href=""
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>

                    <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                      Teams
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href=""
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>

                    <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                      Billing
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href=""
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>

                    <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                      Invoices
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href=""
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>

                    <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                      Account
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
          <form action="/logout">
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>

              <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                Logout
              </span>
            </button>
          </form>
        </div>
      </div> */}
      <Herosection/>
      </main>

    </div>
  );
}  };

export async function getServerSideProps(context) {
  const session = await getSession(context)
  return {
    props: { session }
  }
}
export default index;
