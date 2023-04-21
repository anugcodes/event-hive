import { Link, useNavigate, useLocation } from "react-router-dom";
import { InputGrp } from "../input-grp";
import { UserAuth } from "../../contexts/AuthContext";
import React, { useState, useEffect, useRef } from "react";

export function Login() {
  const { logIn, currentUser, googleLogIn } = UserAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [formstate, setformstate] = useState({
    submitting: false,
    errors: {},
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // manage redirects
  let nextRoute = useRef("/user");
  useEffect(() => {
    if (currentUser) {
      navigate(-1, { replace: true });
    }
  }, []);

  const validateInputs = () => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  };

  const clearform = () => {
    setEmail("");
    setPassword("");
    setformstate({ ...formstate, errors: {} });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const errors = validateInputs();
    if (Object.keys(errors).length === 0) {
      setformstate({ ...formstate, submitting: true });
      try {
        console.log("signing in", email, password);
        await logIn(email, password);
        // todo: add new user to database.
        setformstate({ ...formstate, submitting: false });
        clearform();
        navigate(nextRoute.current);
      } catch (err) {
        let errmsg = err.code.replace("auth/", "").replaceAll("-", " ");
        errmsg.includes("password")
          ? (errors.password = errmsg)
          : (errors.email = errmsg);
        setformstate({ ...formstate, submitting: false, errors: errors });
      }
    } else {
      setformstate({ ...formstate, errors: errors });
    }
  };

  const handleGoogleLogin = async () => {
    setformstate({ ...formstate, submitting: true });
    try {
      await googleLogIn();
      setformstate({ ...formstate, submitting: false });
      navigate(nextRoute.current);
    } catch (err) {
      setformstate({ ...formstate, submitting: false });
      console.log(err);
    }
  };

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 h-screen">
        <div className="mx-auto max-w-sm">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Get started today
          </h1>

          <form
            action=""
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
            onSubmit={(e) => handleFormSubmit(e)}
          >
            <p className="text-center text-lg font-medium">Register yourself</p>

            <InputGrp
              id="email"
              placeholder="Email"
              error={formstate.errors.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputGrp
              id="password"
              placeholder="Password"
              error={formstate.errors.password}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Sign In
            </button>
            <div className="my-3 text-center">OR</div>
            <button
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
              onClick={() => handleGoogleLogin()}
              type="button"
            >
              Continue with Google
            </button>

            <p className="text-center text-sm text-gray-500">
              Already have an account
              <Link className="underline mx-2" to={"/auth/register"}>
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
