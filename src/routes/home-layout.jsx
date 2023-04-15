import React from "react";
import PageHeader from "../componenets/header";
import PageFooter from "../componenets/footer";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <>
      <PageHeader />
      <Outlet/>
      <PageFooter />
    </>
  );
}
