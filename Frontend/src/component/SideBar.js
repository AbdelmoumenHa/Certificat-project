import React from "react";
import logo from "../asset/logo.png";

export const SideBar = () => {
  return (
    <section className="side-bar">
      <div className="logo ">
        <img src={logo} alt="" />
      </div>
      <div className="side-item">
        <h3>home</h3>
      </div>
      <div className="side-item">
        <h3>certificat</h3>
      </div>
    </section>
  );
};
