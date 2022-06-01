import React, { ComponentType, useState } from "react";
import { Form } from "react-final-form";
import "./Order.css";
import { mapDispatchToProps, mapStateToProps } from "../../redux/dispatch";
import { connect } from "react-redux";
import OrderProducts from "./OrderProducts";
import { FormBuyer } from "./FormBuyer";
import { FormPayment } from "./FormPayment";
import { FormDelivery } from "./FormDelivery";
import { FormSending } from "./FormSending";
import { IProps, Item } from "../../interfaces";

const formData: Array<object> = [];

const onSubmit = (values: object) => {
  formData.push(values);
};

const Order: ComponentType<IProps> = ({ products }) => {
  const [checkoutWindowNumber, setCheckoutWindowNumber] = useState<number>(1);
  const [checkoutWindowNumberStopLoss, setCheckoutWindowNumberStopLoss] =
    useState<number>(1);

  const calcCheckoutPageNumber = (value: number) => {
    if (checkoutWindowNumberStopLoss >= value) {
      setCheckoutWindowNumber(value);
    }
  };

  const nextCheckoutWindowNumber = (value: number) => {
    setCheckoutWindowNumber(value);
    setCheckoutWindowNumberStopLoss(value);
  };

  let totalCost: number = 0;

  products.orderList.map(
    (item) => (totalCost += item.numberOfGoods * item.cost)
  );

  return (
    <div className="Order content">
      <div className="title">
        <h2>Оформление заказа</h2>
      </div>
      <div className="order-progress">
        <span
          className={checkoutWindowNumber >= 1 ? "item active" : "item"}
          onClick={() => calcCheckoutPageNumber(1)}
        >
          Информация о покупателе
        </span>
        <span
          className={checkoutWindowNumber >= 2 ? "item active" : "item"}
          onClick={() => calcCheckoutPageNumber(2)}
        >
          Оплата
        </span>
        <span
          className={checkoutWindowNumber >= 3 ? "item active" : "item"}
          onClick={() => calcCheckoutPageNumber(3)}
        >
          Доставка
        </span>
        <span
          className={checkoutWindowNumber >= 4 ? "item active" : "item"}
          onClick={() => calcCheckoutPageNumber(4)}
        >
          Оформление заказа
        </span>
      </div>
      <div className="row">
        <Form
          onSubmit={onSubmit}
          render={({
            handleSubmit,
            form,
            submitting,
            pristine,
            values,
            active,
          }) => {
            switch (checkoutWindowNumber) {
              case 1:
                return (
                  <FormBuyer
                    handleSubmit={handleSubmit}
                    form={form}
                    submitting={submitting}
                    pristine={pristine}
                    checkoutWindowNumber={checkoutWindowNumber}
                    nextCheckoutWindowNumber={nextCheckoutWindowNumber}
                  />
                );
              case 2:
                return (
                  <FormPayment
                    handleSubmit={handleSubmit}
                    form={form}
                    submitting={submitting}
                    pristine={pristine}
                    checkoutWindowNumber={checkoutWindowNumber}
                    nextCheckoutWindowNumber={nextCheckoutWindowNumber}
                    values={values}
                    active={active}
                  />
                );
              case 3:
                return (
                  <FormDelivery
                    handleSubmit={handleSubmit}
                    form={form}
                    submitting={submitting}
                    pristine={pristine}
                    checkoutWindowNumber={checkoutWindowNumber}
                    nextCheckoutWindowNumber={nextCheckoutWindowNumber}
                  />
                );
              case 4:
                return <FormSending values={values} />;
              default:
                return (
                  <FormBuyer
                    handleSubmit={handleSubmit}
                    form={form}
                    submitting={submitting}
                    pristine={pristine}
                    checkoutWindowNumber={checkoutWindowNumber}
                    nextCheckoutWindowNumber={nextCheckoutWindowNumber}
                  />
                );
            }
          }}
        />
        <OrderProducts totalCost={totalCost} />
      </div>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Order);
