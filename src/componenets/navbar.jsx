import { Link, useNavigate } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { UserAuth } from "../contexts/AuthContext";
import Logo from "../assets/logo.svg";
import Hive from "../assets/hive.svg";
export function PageNav() {
  const { logOut, currentUser } = UserAuth();
  const navigate = useNavigate();
  async function handleLogOut() {
    await logOut();
    console.log("logged out");
    navigate("/");
  }

  return (
    <>
      <header aria-label="Site Header">
        <div className="mx-auto flex h-20 max-w-screen-xl items-center gap-8 px-4 sm:px-8 backdrop-blur-sm">
          <Link className="block text-teal-600" to="/">
            <span className="sr-only">Home</span>
            <img src={Logo} alt="Event Hive" className="h-20 " />
          </Link>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Site Nav" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-200/80"
                    to="#about"
                    reloadDocument
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-200/80"
                    to="#features"
                    reloadDocument
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-200/80"
                    to="/fests"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-200/80"
                    to="/events"
                  >
                    Festivals
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              {currentUser && (
                <div>
                  <Link
                    to={"/user"}
                    className="text-gray-500 transition hover:text-gray-200/80"
                  >
                    profile
                  </Link>
                </div>
              )}
              {!currentUser && (
                <Link
                  to={"/auth/login"}
                  className="text-gray-500 transition hover:text-gray-200/80 hover:border-gray-200/80 border border-transparent px-4 py-2 rounded-lg"
                >
                  Login
                </Link>
              )}
              <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                <span className="sr-only">Toggle menu</span>
                <BiMenu />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
