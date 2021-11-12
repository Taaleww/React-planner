import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import "./base.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white ">
        <div className="max-w-full mx-auto shadow-sm pdbase">
          <div className="flex items-center justify-between h-full my-0.5">
            <div className="w-full justify-between flex items-center">
              <div className="flex-shrink-0">
                <a href="/">
                  <img
                        className="h-10/12 w-10/12"
                        src="img/logo.png"
                        alt="Home"
                    />
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                    
                  </svg>
                  <h1 className="font-mono font-bold ">CHIGO SOY MILK</h1>
                  <h1 className="font-mono font-bold">PROJECT SCHUDULER</h1> */}
                </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 font-base font-bold">
                  <a
                    href="/regis"
                    className="text-base hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base "
                  >
                    Sign Up
                  </a>

                  <a
                    href="/login"
                    className="text-base hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base "
                  >
                    Log In
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-base hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3 font-bold"
              >
                <a
                  href="/"
                  className="text-base hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base"
                >
                  Sign Up
                </a>

                <a
                  href="/"
                  className="text-base hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base"
                >
                  Log In
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>

      {/* <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
            </div>
            </div>
        </main> */}
    </div>
  );
}

export default Navbar;
