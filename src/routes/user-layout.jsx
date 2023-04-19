import React from "react";
import { Outlet, Link } from "react-router-dom";
import { BiBell, BiArrowBack, BiLogOut } from "react-icons/bi";
import { UserAuth } from "../contexts/AuthContext";
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
  return (
    <div className="bg-cyan-800">
      <div className="navbar   sm:w-9/12 mx-auto">
        <div className="navbar-start space-x-2">
          <div className="tooltip tooltip-right" data-tip="home">
            <Link to="/">
              <button className=" btn btn-ghost btn-circle text-xl btn-sm md:btn-md">
                <BiArrowBack className="text-xl" />
              </button>
            </Link>
          </div>
          <h2 className=" normal-case text-xl select-none">EventHive</h2>
        </div>
        <div className="navbar-center"></div>
        <div className="navbar-end space-x-2">
          <div
            className="tooltip tooltip-bottom"
            data-tip="participate in events"
          >
            <Link to={"/fests"}>
              <button className="btn btn-sm md:btn-md btn-secondary normal-case">
                Participate
              </button>
            </Link>
          </div>
          {currentUser && (
            <>
              <div className="tooltip tooltip-bottom" data-tip="Notifications">
                <button className="btn btn-ghost btn-circle btn-sm md:btn-md">
                  <div className="indicator">
                    <BiBell className="text-xl" />
                    <span className="badge badge-xs badge-primary indicator-item"></span>
                  </div>
                </button>
              </div>
              <div className="tooltip tooltip-bottom" data-tip="sign out">
                <button
                  className="btn btn-ghost btn-circle text-xl btn-sm md:btn-md"
                  onClick={() => logOut()}
                >
                  <BiLogOut className="text-xl" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
