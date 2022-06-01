import ProductItem from "../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import "./Products.css";
import { Button } from "../../components/UI/Button/Button";
import { mapDispatchToProps, mapStateToProps } from "../../redux/dispatch";
import React, { useEffect, useRef, useState } from "react";
import { Loading } from "../../components/UI/Loading/Loading";
import { IProps } from "../../interfaces";
import { ComponentType } from "react";

const Products: ComponentType<IProps> = ({
  products,
  onSortByName,
  onSortByCost,
  onSearch,
  onOrdering,
}) => {
  let productList = products.productListFilter;

  const [load, setLoad] = useState<boolean>(true);

  const [countriesPerPage, setCountriesPerPage] = useState<number>(15);

  const lastElement = useRef<HTMLDivElement>(null!);
  const observer = useRef<IntersectionObserver | null>(null);

  const currentCountry = productList.slice(0, countriesPerPage);

  useEffect(() => {
    let page: number = 1;

    const callback = function (entries: Array<{ isIntersecting: boolean }>) {
      if (entries[0].isIntersecting && page * 15 < productList.length) {
        setLoad(true);
        setTimeout(() => {
          page++;
          setCountriesPerPage(page * 15);
          setLoad(false);
        }, 500);
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current);
  }, [productList]);

  useEffect(() => {
    onSearch("");
    onOrdering([]);
  }, []);

  return (
    <div className="Products content">
      <div className="title blue-violet">
        <h2>Список товаров</h2>
      </div>

      <div className="sort">
        <span className="text">
          Показано позиций: {currentCountry.length} из {productList.length}
        </span>
        <Button func={onSortByName}>Сортировать по названию</Button>
        <Button func={onSortByCost}>Сортировать по цене</Button>
        <input
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onSearch(e.target.value)
          }
          name="search"
          placeholder="Поиск по названию..."
        />
      </div>
      {products.errorMessage ? (
        <h4 className="message">{products.errorMessage}</h4>
      ) : (
        <>
          <ProductItem items={currentCountry} />
          {load && <Loading />}
        </>
      )}
      <div ref={lastElement} />
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
