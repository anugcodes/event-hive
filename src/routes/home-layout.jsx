import React from "react";
import PageHero from "../componenets/hero";
import { PageNav } from "../componenets/navbar";
import PageFooter from "../componenets/footer";
import { Link, Outlet } from "react-router-dom";
import "../styles/hero.css";
import Hive from "../assets/hive.svg";
export default function HomeLayout() {
  return (
    <>
      <div className="h-screen landing-container">
        <img src={Hive} alt="" className="top-hive" />
        <PageNav />
        <PageHero />
        <img src={Hive} alt="" className="bottom-hive" />
      </div>
      <Outlet />
      <img src={Hive} alt="" className="bottom-hive" />
      <PageFooter />
    </>
  );
}
