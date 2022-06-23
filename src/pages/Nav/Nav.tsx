import "./Nav.scss";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../redux/dispatch";
import React, { ComponentType } from "react";
import { IProps } from "../../interfaces";
const Nav: ComponentType<IProps> = ({ products }) => {
  return (
    <div className="navigation yell-orange">
      <ul className="header_links">
        <li>
          <NavLink to="/">Главная</NavLink>
        </li>
        <li>
          <NavLink to="cart">
            Корзина
            <span>
              {products.productListCart.length > 0 &&
                products.productListCart.length}
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink to="contacts">Отзывы</NavLink>
        </li>
        <li>
          <NavLink to="about">О нас</NavLink>
        </li>
      </ul>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
