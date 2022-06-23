import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import "./App.scss";
import "./index.css";
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
import { IProps } from "./interfaces";
import { usefetch } from "./components/useFetch/useFetch";

const App: FC<IProps> = ({ onLoadedProductList, onErrorMessage }) => {
  const { data, error } = usefetch(
    "https://api.jsonbin.io/b/628cdd79449a1f3821ecad9b/2"
  );
  useEffect(() => {
    onErrorMessage(error);
    onLoadedProductList(data);
  }, [error, data]);

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
