import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";
import "../styles/hero.css";
export default function PageHero() {
  const { currentUser } = UserAuth();
  return (
    <section className="overflow-hidden">
      <div className=" p-12 md:p-16 lg:px-16 lg:py-28">
        <div className="blur"></div>
        <div className="text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className=" hero-heading text-4xl  sm:text-4xl md:text-6xl">
            Join the Community of Tech and Non-Tech Enthusiasts Where Your
            Passion Meets Opportunities
          </h2>

          <p className="max-w-2xl mx-auto my-6   text-center">
            Explore events, fests, conferences from different colleges across
            the nation to learn, showcase skills, build communities, interact
            with like-minded people, display their achievements and pursue their
            passions.
          </p>

          {!currentUser && (
            <div className="mt-4 sm:mt-8">
              <Link
                to="/auth/register"
                className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started
              </Link>
            </div>
          )}
          {currentUser && (
            <div className="mt-4 sm:mt-8">
              <Link
                to="/user"
                className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                go to Dashboard
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
