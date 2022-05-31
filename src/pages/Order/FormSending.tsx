import React, { ComponentType } from "react";
import { NavLink } from "react-router-dom";
import { Iform } from "../../interfaces";

export const FormSending: ComponentType<Iform> = ({ values }) => {
  return (
    <div className="form">
      <p>
        Посылка будет отправлена в ближайшее время на имя {values.last__name}{" "}
        {values.name} по адресу {values.city}, улица {values.street} дом{" "}
        {values.home}. Ваш номер телефона {values.tel}.
      </p>
      Банковские реквизиты:
      <ul>
        <li>Номер карты {values.number}</li>
        <li>владелец карты {values.card_name}</li>
        <li>срок действия {values.expiry}</li>
      </ul>
      <span className="btn">
        <NavLink to="/">На главную!</NavLink>
      </span>
    </div>
  );
};
