import { Params, useParams } from "react-router";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../redux/dispatch";
import "./ProductPage.css";
import { ProductItemLitle } from "../../components/ProductItemLitle/ProductItemLitle";
import { NavLink } from "react-router-dom";
import React, { ComponentType } from "react";
import { IProps, Item } from "../../interfaces";

const ProductPage: ComponentType<IProps> = ({
  onAddInCart,
  products,
  onRemoveInCart,
  onOrdering,
}) => {
  const ProductsInBlockSimilar = products.productList.slice(0, 5);

  const { id }: Readonly<Params<string>> = useParams();

  let item: Item =
    products.productList.find((unit: any) => unit.id === Number(id)) ||
    JSON.parse(localStorage.getItem("ProductPage")!);

  localStorage.setItem("ProductPage", JSON.stringify(item));

  const quantityOfGoodsCalc = (value: number, item: Item) => {
    if (value > 0) {
      item.numberOfGoods = value;
      onOrdering([item]);
    }
  };

  return (
    <div className="ProductPage row content">
      <div className="title">
        <h2>{item.name}</h2>
      </div>

      <div className="column image">
        <div className="block brown">
          <div className="img">
            <img src={`./img/products_img/${item.img}.jpg`} alt="description" />
          </div>
          <h5>{item.name} Lorem ipsum dolor sit amet consectetur.</h5>
        </div>
        <div className="block green-black">
          <h4>Преимущества</h4>
          <ol>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim!
            </li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              expedita?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, a
              repudiandae!
            </li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="block red">
          <h4>Описание</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            repellendus nihil fuga aut facere quos quod earum minima eos id
            nobis ducimus minus, et consectetur perferendis, ipsum accusamus,
            vero inventore?
          </p>
          <p>
            Ipsum dolor sit, amet consectetur adipisicing elit. Quo, asperiores
            molestias iure sunt corporis molestiae vero maxime minus fuga unde!
          </p>
        </div>
        <div className="block yellow cost">
          <span>
            {(item.cost * item.numberOfGoods).toLocaleString()} &#8381;
          </span>
          <span className="old_cost">
            {Math.ceil(item.cost * 1.3 * item.numberOfGoods).toLocaleString()}{" "}
            &#8381;
          </span>
          <p>
            * за {item.numberOfGoods}
            {item.numberOfGoods === 1
              ? " единицу "
              : item.numberOfGoods > 4
              ? " единиц "
              : item.numberOfGoods > 1
              ? " единицы "
              : ""}
            товара
          </p>
        </div>
        {item.limited && (
          <div className="block green-blue">
            <span>
              Количество этого товара ограничено, и скоро он уйдет с продажи
            </span>
          </div>
        )}
        <div className="block pink buttons">
          <span
            className="btn_add_more btn symbol"
            onClick={() => quantityOfGoodsCalc(item.numberOfGoods - 1, item)}
          >
            Убрать
          </span>
          <span
            className="btn_add_more btn symbol"
            onClick={() => quantityOfGoodsCalc(item.numberOfGoods + 1, item)}
          >
            Добавить
          </span>

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

        <div className="block green-blue">
          <h4>Характеристики</h4>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos, numquam?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              similique delectus recusandae!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat!
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
              enim quo ducimus consequatur placeat odio?
            </li>
          </ul>
        </div>
        <div className="block violet-red">
          <h4>Смотреть похожие</h4>
          <div className="products">
            {ProductsInBlockSimilar.map((item: Item) => (
              <ProductItemLitle key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
