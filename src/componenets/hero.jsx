import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";

export default function PageHero() {
    const {currentUser} = UserAuth();
  return (
    <div className="hero min-h-[60vh] sm:w-9/12 mx-auto">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg "
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          {!currentUser && (
            <label
              htmlFor="RegisterModal"
              className="btn btn-primary normal-case"
            >
              Get Started
            </label>
          )}
        </div>
      </div>
    </div>
  );
}
