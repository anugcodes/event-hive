import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg"
import Hive from "../assets/hive.svg"
import "../index.css";
export default function PageFooter() {
  return (
    <>
      <footer aria-label="Site Footer" style={{position:"relative"}} className="bg-slate-900 bg-opacity-50 overflow-hidden">
        <div className="mx-auto  px-4 py-16 sm:px-6 lg:px-8 ">
          {/* <div className="blur"></div> */}
          {/* <p className="mx-auto mt-6 max-w-md  leading-relaxed hero-heading text-4xl ">
            Do you want to step in to the events before others
          </p> */}

          {/* <div className="flex justify-center text-teal-600">
            <img src={Logo} alt="EventHive" className="h-20"/>
          </div> */}
          <img src={Hive} className="footer-hive" />

          <nav aria-label="Footer Nav" className="mt-12">
            <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
              <li>
                <Link
                  className=" text-lg hover:text-slate-300 transition text-slate-500/75"
                  to="/events"
                >
                  Events
                </Link>
              </li>

              <li>
                <Link
                  className=" text-lg hover:text-slate-300 transition text-slate-500/75"
                  to="/fests"
                >
                  Festivals
                </Link>
              </li>

              <li>
                <Link
                  className=" text-lg hover:text-slate-300 transition text-slate-500/75"
                  to="/#about"
                  reloadDocument
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  className=" text-lg hover:text-slate-300 transition text-slate-500/75"
                  to="/#features"
                  reloadDocument
                >
                  Features
                </Link>
              </li>
            </ul>
          </nav>

          <ul className="mt-12 flex justify-center gap-6 md:gap-8">
            <li>
              <Link
                to="#"
                rel="noreferrer"
                target="_blank"
                className="hover:text-gray-300 transition text-slate-500/75 text-2xl"
              >
                <span className="sr-only">Facebook</span>
                <BsFacebook />
              </Link>
            </li>
            <li>
              <Link
                to="#"
                rel="noreferrer"
                target="_blank"
                className="hover:text-gray-300 transition text-slate-500/75 text-2xl"
              >
                <span className="sr-only">Instagram</span>
                <BsInstagram />
              </Link>
            </li>
            <li>
              <Link
                to="#"
                rel="noreferrer"
                target="_blank"
                className="hover:text-gray-300 transition text-slate-500/75 text-2xl"
              >
                <span className="sr-only">Twitter</span>
                <BsTwitter />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
