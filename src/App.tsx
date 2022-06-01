import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { useMemo } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./App.css";
import { Layout } from "./pages/Layout/Layout";
import Products from "./pages/Products/Products";
import { Contacts } from "./pages/Contacts/Contacts";
import { About } from "./pages/About/About";
import Order from "./pages/Order/Order";
import Cart from "./pages/Cart/Cart";
import { mapDispatchToProps, mapStateToProps } from "./redux/dispatch";
import ProductPage from "./pages/ProductPage/ProductPage";
import { FC } from "react";
import React from "react";
import { IProps, Item } from "./interfaces";

const App: FC<IProps> = ({ onLoadedProductList, onErrorMessage }) => {
  useMemo(async () => {
    try {
      const response: { data: Array<Item> } = await axios.get(
        "https://api.jsonbin.io/b/628cdd79449a1f3821ecad9b/2"
      );
      console.log("Произведен запрос на сервер");
      onLoadedProductList(response.data);
    } catch (e) {
      onErrorMessage("Ошибка загрузки данных с сервера " + e);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Products />} />
          <Route path=":id" element={<ProductPage />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="order" element={<Order />} />
          <Route
            path="*"
            element={<h2 className="message">Страница не найдена</h2>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
