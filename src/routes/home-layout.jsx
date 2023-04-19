import React from "react";
import PageHero from "../componenets/hero";
import { PageNav } from "../componenets/navbar";
import PageFooter from "../componenets/footer";
import { Link, Outlet } from "react-router-dom";
import { Login } from "../componenets/auth/login";
import {Register} from "../componenets/auth/register"
export default function HomeLayout() {
  return (
    <>
      <PageNav />
      <PageHero />
      <Login />
      <Register />
      <Outlet />
      <PageFooter />
    </>
  );
}




