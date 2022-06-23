import "./ProductItem.scss";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { mapDispatchToProps, mapStateToProps } from "../../redux/dispatch";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import React, { ComponentType } from "react";
import { IProps, Item } from "../../interfaces";
import { product_images } from "../product_images/product_images";

const Product_item: ComponentType<IProps> = ({
  onAddInCart,
  products,
  onRemoveInCart,
  onOrdering,
  items,
}) => {
  const quantityOfGoodsCalc = (value: number, item: Item) => {
    if (value > 0) {
      item.numberOfGoods = value;
      onOrdering([item]);
    }
  };

  return (
    <TransitionGroup className="items">
      {items!.map((item) => (
        <CSSTransition timeout={500} classNames="item" key={item.id}>
          <div className="product">
            <Link to={`/${item.id}`}>
              <div className="product_img">
                <img src={product_images[item.img]} alt="description" />
              </div>

              <span className="product_title">
                {item.name + " "}
                {item.numberOfGoods > 1 && item.numberOfGoods + " шт"}
              </span>
              {item.limited && (
                <div className="product_limited">Количество ограничено</div>
              )}
            </Link>

            <div className="block_buttons">
              <span
                className="btn_add_more btn symbol"
                onClick={() =>
                  quantityOfGoodsCalc(item.numberOfGoods - 1, item)
                }
              >
                -
              </span>
              <span className="product_cost btn">
                {(item.cost * item.numberOfGoods).toLocaleString() + " "}
                &#8381;
              </span>
              <span
                className="btn_add_more btn symbol"
                onClick={() =>
                  quantityOfGoodsCalc(item.numberOfGoods + 1, item)
                }
              >
                +
              </span>
            </div>

            <div className="block_buttons">
              {products.productListCart.includes(item) ? (
                <span
                  className="btn__add_in_cart btn active"
                  onClick={() => onRemoveInCart(item)}
                >
                  Удалить из корзины
                </span>
              ) : (
                <span
                  className="btn__add_in_cart btn"
                  onClick={() => onAddInCart(item)}
                >
                  Добавить в корзину
                </span>
              )}
              <NavLink
                className="btn__buy btn"
                to="/order"
                onClick={() => onOrdering([item])}
              >
                Купить в один клик
              </NavLink>
            </div>
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Product_item);
