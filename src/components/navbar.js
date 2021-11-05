import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white max-w-">
        <div className="max-w-full mx-auto px-16 sm:px-6 md:px-10 lg:px-16 shadow">
          <div className="flex items-center justify-between h-16 ">
            <div className="w-full justify-between flex items-center">
              <div className="flex-shrink-0">
                <a href="/">
                    <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                        alt="Home"
                    />
                </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 font-base font-bold">
                  <a
                    href="/"
                    className="text-base hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg "
                  >
                    Sign Up
                  </a>

                  <a
                    href="/"
                    className="text-base hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg "
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
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 font-bold">
                <a
                  href="/"
                  className="text-base hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg "
                >
                  Sign Up
                </a>

                <a
                  href="/"
                  className="text-base hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-lg"
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