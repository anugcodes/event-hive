import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <div className="grid h-screen px-4 bg-white place-content-center">
        <h1 className="tracking-widest text-gray-500 uppercase">
          404 | Not Found
        </h1>
        <Link to={'/'} className="text-blue-400 text-center"> return home</Link>
      </div>
    </>
  );
}
