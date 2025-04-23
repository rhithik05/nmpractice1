import React from "react";
import Navbar from "./Navbar";
import Herosection from "./Herosection";
import Aboutus from "./Aboutus";
import Register from "./Registrationform";
import Menu from "./Menu";

const Mainpage = () => {
  return (
    <>
      <Navbar></Navbar>
      <Herosection></Herosection>
      <div id="menu">
        <Menu></Menu>
      </div>
      <div id="about">
        <Aboutus></Aboutus>
      </div>
      <div id="booktable">
        <Register></Register>
      </div>
    </>
  );
};

export default Mainpage;
