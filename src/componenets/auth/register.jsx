import { Link, useNavigate } from "react-router-dom";
import { InputGrp } from "../input-grp";
import { UserAuth } from "../../contexts/AuthContext";
import React, { useState, useEffect, useRef } from "react";

export function Register() {
  const { signUp, currentUser, googleLogIn } = UserAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formstate, setformstate] = useState({
    submitting: false,
    errors: {},
  });

  let nextRoute = useRef("/user");
  useEffect(() => {
    if (currentUser) {
      navigate(-1, { replace: true });
    }
  },[]);

  const validateInputs = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errors = {};
    if (!name.trim()) {
      errors.name = "Name is required";
    }
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
        console.log("signing up", name, email, password);
        let user = await signUp(email, password);
        console.log(user);
        setformstate({ ...formstate, submitting: false });
        clearform();
        navigate(nextRoute.current);
      } catch (err) {
        errors.email = err.code.replace("auth/", "").replaceAll("-", " ");
        setformstate({ ...formstate, submitting: false, errors: errors });
      }
    } else {
      setformstate({ ...formstate, errors: errors });
    }
  };

  const handleGoogleLogin = async () => {
    setformstate({ ...formstate, submitting: true });
    try {
      let user = await googleLogIn();
      console.log(user);
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
              id="name"
              placeholder="Full Name"
              error={formstate.errors.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputGrp
              id="email"
              placeholder="Email"
              error={formstate.errors.email}
              value={email}
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputGrp
              id="password"
              type="password"
              placeholder="Password"
              error={formstate.errors.password}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Sign Up
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
              <Link className="underline mx-2" to="/auth/login">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
