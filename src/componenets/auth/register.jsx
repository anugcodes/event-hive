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
      <input type="checkbox" id="RegisterModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative max-w-sm">
          <label
            htmlFor="RegisterModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="mx-auto">
            <h2 className="text-xl font-light">Register Yourself</h2>
            <form onSubmit={(e) => handleFormSubmit(e)}>
              <InputGrp
                label={"Full Name"}
                placeholder="e.g John Dow"
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={formstate.errors.name}
              />
              <InputGrp
                label={"Email Address"}
                placeholder="e.g example@mail.com"
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={formstate.errors.email}
              />
              <InputGrp
                label={"Create Password"}
                placeholder="e.g password"
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={formstate.errors.password}
              />
              <button
                className="btn btn-secondary w-full normal-case mt-2 "
                disabled={formstate.submitting}
              >
                Sign Up
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
