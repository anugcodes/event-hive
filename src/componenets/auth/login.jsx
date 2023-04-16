import { Link, useNavigate,useLocation } from "react-router-dom";
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

  const clearform = () =>{
    setEmail("");
    setPassword("");
    setformstate({...formstate,errors:{}});
  }

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
      <input type="checkbox" id="loginModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative max-w-xs">
          <label
            htmlFor="loginModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className=" max-w-xs mx-auto">
            <h2 className="text-xl font-light">Sign In</h2>
            <form onSubmit={(e) => handleFormSubmit(e)}>
              <InputGrp
                label={"Email Address"}
                placeholder="example@mail.com"
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={formstate.errors.email}
              />
              <InputGrp
                label={"Password"}
                placeholder={"password"}
                forgetpw={true}
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}               
                error={formstate.errors.password}
              />
              <button className="btn btn-secondary w-full normal-case mt-2" disabled={formstate.submitting}>
                Sign In
              </button>
            </form>
            <div className="divider">OR</div>
            <button
              className="btn btn-accent w-full normal-case"
              onClick={() => handleGoogleLogin()}
              disabled={formstate.submitting}
            >
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
