import React from "react";
import "./Header.css"
import Search from './Search'
import Navbar from "../Navbar";



const HeaderComponent = () => {
  return <div>
    <Search />
    <Navbar />
  </div>;
};

export default HeaderComponent;
