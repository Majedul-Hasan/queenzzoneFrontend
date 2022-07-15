import React from "react";
import Img from "../Img/massage2.jpg";

const Search = () => {
  return (
    <div>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <img src={Img} alt="Massage Icon" />
          </div>

          <div className="search-box f_flex">
            <input type="text" placeholder="Search and hit enter..." />
            <i className="fa fa-search"></i>
          </div>

          <div className="icon f_flex shop-logo">
            <i className="fa fa-user icon-circle"></i>
            <div className="cart">
              <i className="fa fa-shopping-bag icon-circle"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;
