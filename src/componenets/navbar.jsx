import { Link } from "react-router-dom";
import { BiBell, BiMenu, BiSearch } from "react-icons/bi";
export function PageNav() {
  return (
    <div className="navbar bg-base-100 sticky top-0 w-9/12 mx-auto">
      <div className="navbar-start">
        <Link to={"/"} className=" normal-case text-xl">
         EventHive 
        </Link>
      </div>
      <div className="navbar-center"></div>
      <div className="navbar-end space-x-2">
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <BiBell className="text-2xl font-bold" />
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        <Link to={"#events"} className="btn btn-ghost">Events</Link>
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
