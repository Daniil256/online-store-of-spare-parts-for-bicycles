import React, { ComponentType } from "react";
import { Field } from "react-final-form";
import Map from "../../components/map/Map";
import { Iform } from "../../interfaces";

export const FormDelivery: ComponentType<Iform> = ({
  handleSubmit,
  form,
  submitting,
  pristine,
  nextCheckoutWindowNumber,
  checkoutWindowNumber,
}) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Адрес доставки</h2>
      <Field name="city" component="input" type="text" placeholder="Город" />
      <Field name="street" component="input" type="text" placeholder="Улица" />
      <Field
        name="home"
        component="input"
        type="text"
        placeholder="Дом, квартира"
      />
      <div className="map">
        <Map />
      </div>
      <div className="row">
        <button
          type="submit"
          className="btn"
          onClick={() => nextCheckoutWindowNumber(checkoutWindowNumber + 1)}
        >
          Оплатить заказ
        </button>
        <button
          onClick={form.reset}
          className="btn"
          type="reset"
          disabled={submitting || pristine}
        >
          Очистить поля
        </button>
        <button
          onClick={() => nextCheckoutWindowNumber(checkoutWindowNumber - 1)}
        >
          Назад
        </button>
      </div>
    </form>
  );
};
