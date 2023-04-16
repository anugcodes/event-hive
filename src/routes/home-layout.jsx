import React from "react";
import PageHeader from "../componenets/header";
import PageFooter from "../componenets/footer";
import { Link, Outlet } from "react-router-dom";
import { Login } from "../componenets/auth/login";
import {Register} from "../componenets/auth/register"
export default function HomeLayout() {
  return (
    <>
      <PageHeader />
      <Login />
      <Register />
      <Outlet />
      <PageFooter />
    </>
  );
}




