import { Outlet } from "react-router";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import Nav from "../Nav/Nav";
import React, { FC } from "react";

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};
