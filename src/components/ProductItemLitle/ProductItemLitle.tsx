import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Item } from "../../interfaces";
import { product_images } from "../product_images/product_images";
import "./ProductItemLitle.scss";

export const ProductItemLitle: FC<{ item: Item; order?: boolean }> = ({
  item,
  order,
}) => {
  return (
    <div className="ProductItemLitle">
      <Link to={`/${item.id}`}>
        <div className="product_img">
          <img src={product_images[item.img]} alt="description" />
        </div>
        <div className="product_title">
          {item.name + " "}
          {order && (
            <>
              <span>{item.numberOfGoods} шт</span>
              <span className="cost">
                {(item.cost * item.numberOfGoods).toLocaleString()} ₽
              </span>
            </>
          )}
        </div>
      </Link>
    </div>
  );
};
