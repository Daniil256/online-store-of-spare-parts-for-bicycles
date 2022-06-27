import "./Header.scss";
import { NavLink } from "react-router-dom";
import React, { FC } from "react";
const header_img = require("../../../img/header_img.jpg");

export const Header: FC = () => {
  return (
    <header className="header">
      <div className="header_img">
        <img src={header_img} alt="header" />
      </div>
      <div className="header_title">
        <strong className="logo">
          <NavLink to="/">ВЕЛОЗАПЧАСТИ</NavLink>
        </strong>
        <h2>Магазин запчастей и аксессуаров для велосипедов</h2>
      </div>
    </header>
  );
};
