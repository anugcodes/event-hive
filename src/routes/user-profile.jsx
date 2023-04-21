import React from "react";
import { UserAuth } from "../contexts/AuthContext";
import { BiMap, BiBookBookmark } from "react-icons/bi";
import ProfileImg from "../assets/profile.jpg";
export default function UserProfile() {
  const { currentUser } = UserAuth();
  console.log(currentUser);
  return (
    <div className="lg:w-9/12 mx-auto md:flex mt-6 px-2 space-x-2">
      <div className="px-2 py-4  max-w-xs mx-auto bg-slate-800 bg-opacity-25">
        <div className="w-60 mask mask-squircle mx-auto">
          <img src={ProfileImg} className="mx-auto" />
        </div>
        <div className="text-center my-2 py-2  max-w-xs mx-auto space-y-1">
          <h3 className="text-2xl font-semibold">
            {currentUser.displayName || "Current User"}
          </h3>
          {/* <h5>{ currentUser.email || 'user\'s email'}</h5> */}
          <h5 className="text-lg font-light font-mono">username</h5>
          <button className="btn btn-outline btn-sm normal-case w-full max-w-[15rem] ">
            Edit Profile
          </button>

          <div className="mx-8 md:mx-0 space-y-1 py-2">
            <div className="flex space-x-2 items-center">
              <BiMap />
              <span className="font-sans">
                {currentUser.location || "User's location"}
              </span>
            </div>
            <div className="flex space-x-2 items-center">
              <BiBookBookmark />
              <span className="font-sans">
                {currentUser.college || "User's college"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-2 py-4 flex-1 bg-slate-800 bg-opacity-25">
        <div className="min-h-[5rem]">
          <div className="border-b border-slate-700 pb-1">
            <div
              className="tooltip tooltip-right"
              data-tip="recent participated events"
            >
              <span className="text-xl">Recent Events</span>
            </div>
          </div>
        </div>
        <div className="min-h-[5rem]">
          <div className="border-b border-slate-700 pb-1 min-h-">
            <div
              className="tooltip tooltip-right text-xl"
              data-tip="past participated events"
            >
              Past Events
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
