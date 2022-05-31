import React, { ComponentType } from "react";
import { Field } from "react-final-form";
import { Iform } from "../../interfaces";
import Card from "./Card";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./cardUtils";

export const FormPayment: ComponentType<Iform> = ({
  handleSubmit,
  form,
  submitting,
  pristine,
  nextCheckoutWindowNumber,
  checkoutWindowNumber,
  values,
  active,
}) => {
  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Оплата</h2>
      <Card
        number={values.number || ""}
        name={values.name || ""}
        expiry={values.expiry || ""}
        cvc={values.cvc || ""}
        focused={active}
      />
      <div>
        <Field
          name="number"
          component="input"
          type="text"
          pattern="[\d| ]{16,22}"
          placeholder="Номер карты"
          format={formatCreditCardNumber}
        />
      </div>
      <div>
        <Field
          name="card_name"
          component="input"
          type="text"
          placeholder="Имя пользователя карты"
        />
      </div>
      <div className="row">
        <Field
          name="expiry"
          component="input"
          type="text"
          pattern="\d\d/\d\d"
          placeholder="Срок действия"
          format={formatExpirationDate}
        />
        <Field
          name="cvc"
          component="input"
          type="text"
          pattern="\d{3,4}"
          placeholder="CVC"
          format={formatCVC}
        />
      </div>
      <div className="buttons">
        <button
          type="submit"
          onClick={() => nextCheckoutWindowNumber(checkoutWindowNumber + 1)}
        >
          Далее
        </button>
        <button
          type="button"
          onClick={form.reset}
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
