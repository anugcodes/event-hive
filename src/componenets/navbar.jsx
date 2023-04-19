import { Link, useNavigate } from "react-router-dom";
import { BiBell, BiMenu, BiSearch } from "react-icons/bi";
import { UserAuth } from "../contexts/AuthContext";

export function PageNav() {
  const { logOut, currentUser } = UserAuth();
  const navigate = useNavigate();
  async function handleLogOut() {
    await logOut();
    console.log("logged out");
    navigate("/");
  }

  return (
    <div className="navbar bg-base-100 sticky top-0 sm:w-9/12 mx-auto">
      <div className="navbar-start">
        <Link to={"/"} className=" normal-case text-xl">
          EventHive
        </Link>
      </div>
      <div className="navbar-center"></div>
      <div className="navbar-end space-x-2">
        <Link to={"#events"} className="btn btn-ghost normal-case">
          Events
        </Link>
        {!currentUser && (
          <>
            <label htmlFor="loginModal" className="btn btn-ghost normal-case">
              Log in
            </label>
            <label
              htmlFor="RegisterModal"
              className="btn btn-primary normal-case"
            >
              Get Started
            </label>
          </>
        )}
        {currentUser && (
          <>
            <div className="tooltip tooltip-bottom" data-tip="Notifications">
              <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <BiBell className="text-2xl font-bold" />
                  <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
              </button>
            </div>
            <div className="tooltip tooltip-right" data-tip="Profile">
              <Link to={"/user"} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
