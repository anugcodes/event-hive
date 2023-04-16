import { Link } from "react-router-dom";

export function PageNav() {
  return (
    <div className="navbar bg-slate-500 sticky top-0 z-10 px-4">
      <div className="flex-1">
        <Link to={"/"} className=" normal-case text-xl">
          EventHive
        </Link>
      </div>
      <div className="flex-none space-x-4">
        <div className="btn btn-ghost">
          <Link to={"#events"}>Events</Link>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://cdn-icons-png.flaticon.com/512/5556/5556468.png" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
