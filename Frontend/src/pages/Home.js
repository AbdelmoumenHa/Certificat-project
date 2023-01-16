import React from "react";
import "../App.css";
import { Backgrand } from "../component/Backgrand";
import { Certif } from "../component/Certif";

export const Home = () => {
  return (
    <>
      <div className="home-title">
        <h3>tradimed</h3>
      </div>
      {/* <Backgrand></Backgrand> */}
      <Certif></Certif>
    </>
  );
};
