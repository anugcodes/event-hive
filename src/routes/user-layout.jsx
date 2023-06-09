import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  BiDownArrow,
  BiMenu
} from "react-icons/bi";
import { UserAuth } from "../contexts/AuthContext";
import Logo from "../assets/logo.svg"
export default function UserLayout() {
  return (
    <div>
      <ProfileNav />
      <Outlet />
    </div>
  );
}

function ProfileNav() {
  const { currentUser, logOut } = UserAuth();
  const [menu, setMenu] = useState(false);
  const handleLogout = () => {
    logOut();
    console.log("user logged out");
  };
  return (
    <header aria-label="Site Header">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="block text-teal-600" to="/">
          <span className="sr-only">Home</span>
          {/* <h2>EventHive</h2> */}
          <img src={Logo}  className="h-16"/>
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Site Nav" className="hidden md:block">
            {/* <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  to="/fests"
                >
                  About
                </Link>
              </li>
            </ul> */}
          </nav>

          {!currentUser && (
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link
                  className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                  tot="/auth/login"
                >
                  Login
                </Link>

                <Link
                  className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                  to="/auth/register"
                >
                  Register
                </Link>
              </div>

              <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                <span className="sr-only">Toggle menu</span>
                <BiMenu />
              </button>
            </div>
          )}

          {currentUser && (
            <div className="flex items-center gap-4">
              <Link
                to="/community"
                className="block rounded-lg px-4 py-2 text-sm text-gray-500  hover:text-gray-200"
                role="menuitem"
              >
                Community
              </Link>
              <div className="sm:flex sm:gap-4">
                <div className="relative">
                  <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
                    <button
                      className="flex space-x-2 border-e px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                      onClick={() => setMenu(!menu)}
                    >
                      <span >Participate</span>
                      <span className="sr-only">Menu</span>
                      <BiDownArrow />
                    </button>

                    {/* <button className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"></button> */}
                  </div>

                  {menu && (
                    <div
                      className="absolute end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
                      role="menu"
                    >
                      <div className="p-2">
                        <Link
                          to="/events"
                          className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                          role="menuitem"
                        >
                          Events
                        </Link>
                        <Link
                          to="/fests"
                          className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                          role="menuitem"
                        >
                          Festivals
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <button
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                onClick={() => handleLogout()}
              >
                Sign Out
              </button>

              <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                <span className="sr-only">Toggle menu</span>
                <BiMenu />
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
