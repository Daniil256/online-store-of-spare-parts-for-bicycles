import React, { useState } from 'react'
import { Form, Field } from 'react-final-form'
import Card from './Card'
import { NavLink } from 'react-router-dom'
import './Order.css'
import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate
} from './cardUtils'
import Map from '../../components/map/Map'
import { mapDispatchToProps, mapStateToProps } from '../../redux/dispatch'
import { connect } from 'react-redux'
import OrderProducts from './OrderProducts'

const formData = []

const onSubmit = values => {
    formData.push(values)
}

const Order = ({ products }) => {

    const [checkoutWindowNumber, setCheckoutWindowNumber] = useState(1)
    const [checkoutWindowNumberStopLoss, setCheckoutWindowNumberStopLoss] = useState(1)

    const calcCheckoutPageNumber = (value) => {
        if (checkoutWindowNumberStopLoss >= value) {
            setCheckoutWindowNumber(value)
        }
    }
    const nextCheckoutWindowNumber = (value) => {
        setCheckoutWindowNumber(value)
        setCheckoutWindowNumberStopLoss(value)
    }

    let totalCost = 0

    products.orderList.map(item => {
        if (!item.numberOfGoods) item.numberOfGoods = 1
        totalCost += item.numberOfGoods * item.cost
    })

    return (
        <div className="Order content">
            <div className="title">
                <h2>Оформление заказа</h2>
            </div>
            <div className="order-progress">
                <span className={checkoutWindowNumber >= 1 ? "item active" : 'item'} onClick={() => calcCheckoutPageNumber(1)}>Информация о покупателе</span>
                <span className={checkoutWindowNumber >= 2 ? "item active" : 'item'} onClick={() => calcCheckoutPageNumber(2)}>Оплата</span>
                <span className={checkoutWindowNumber >= 3 ? "item active" : 'item'} onClick={() => calcCheckoutPageNumber(3)}>Доставка</span>
                <span className={checkoutWindowNumber >= 4 ? "item active" : 'item'} onClick={() => calcCheckoutPageNumber(4)}>Оформление заказа</span>
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
                        active
                    }) => {
                        if (checkoutWindowNumber === 1) {
                            return (
                                <form className='form' onSubmit={handleSubmit}>
                                    <h2>Информация о покупателе</h2>
                                    <Field
                                        name="name"
                                        component="input"
                                        type="text"
                                        placeholder="Имя"
                                    />
                                    <Field
                                        name="last__name"
                                        component="input"
                                        type="text"
                                        placeholder="Фамилия"
                                    />
                                    <Field
                                        name="tel"
                                        component="input"
                                        type="tel"
                                        placeholder="Ваш номер телефона"
                                    />
                                    <Field
                                        name="email"
                                        component="input"
                                        type="text"
                                        placeholder="Ваш email"
                                    />
                                    <label>
                                        <Field
                                            name="personal_data"
                                            component="input"
                                            type="checkbox"
                                        />
                                        Я согласен на обработку персональных данных
                                    </label>
                                    <label>
                                        <Field
                                            name="mailing_of_letters"
                                            component="input"
                                            type="checkbox"
                                        />
                                        Подписаться на скидки и акции магазина
                                    </label>
                                    <div className="row">
                                        <button
                                            type='submit'
                                            className='btn'
                                            onClick={() => nextCheckoutWindowNumber(checkoutWindowNumber + 1)}>
                                            Далее
                                        </button>
                                        <button
                                            onClick={form.reset}
                                            className='btn'
                                            type='reset'
                                            disabled={submitting || pristine}>
                                            Очистить поля
                                        </button>
                                    </div>
                                </form>
                            )
                        }
                        if (checkoutWindowNumber === 2) {
                            return (
                                <form onSubmit={handleSubmit} className='form'>
                                    <h2>Оплата</h2>
                                    <Card
                                        number={values.number || ''}
                                        name={values.name || ''}
                                        expiry={values.expiry || ''}
                                        cvc={values.cvc || ''}
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
                                    <div className='row'>
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
                                        <button type='submit'
                                            onClick={() => nextCheckoutWindowNumber(checkoutWindowNumber + 1)}>
                                            Далее
                                        </button>
                                        <button
                                            type="button"
                                            onClick={form.reset}
                                            disabled={submitting || pristine}>
                                            Очистить поля
                                        </button>
                                        <button onClick={() => nextCheckoutWindowNumber(checkoutWindowNumber - 1)}>Назад</button>
                                    </div>
                                </form>
                            )
                        }
                        if (checkoutWindowNumber === 3) {
                            return (
                                <form className='form' onSubmit={handleSubmit}>
                                    <h2>Адрес доставки</h2>
                                    <Field
                                        name="city"
                                        component="input"
                                        type="text"
                                        placeholder="Город"
                                    />
                                    <Field
                                        name="street"
                                        component="input"
                                        type="text"
                                        placeholder="Улица"
                                    />
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
                                            type='submit'
                                            className='btn'
                                            onClick={() => nextCheckoutWindowNumber(checkoutWindowNumber + 1)}>
                                            Оплатить заказ
                                        </button>
                                        <button
                                            onClick={form.reset}
                                            className='btn'
                                            type='reset'
                                            disabled={submitting || pristine}>
                                            Очистить поля
                                        </button>
                                        <button
                                            onClick={() => nextCheckoutWindowNumber(checkoutWindowNumber - 1)}>
                                            Назад
                                        </button>
                                    </div>
                                </form>
                            )
                        }
                        if (checkoutWindowNumber === 4) {
                            return (
                                <div className='form'>
                                    <p>
                                        Посылка будет отправлена в ближайшее время на имя {values.last__name} {values.name} по адресу {values.city}, улица {values.street} дом {values.home}. Ваш номер телефона {values.tel}.
                                    </p>
                                    <p>
                                        Банковские реквизиты:
                                        <ul>
                                            <li>Номер карты {values.number}</li>
                                            <li>владелец карты {values.card_name}</li>
                                            <li>срок действия {values.expiry}</li>
                                        </ul>
                                    </p>
                                    <span className="btn"><NavLink to='/'>На главную!</NavLink></span>
                                </div>
                            )
                        }
                    }}
                />
                <div className="order-list">
                    <h2>Ваш заказ</h2>
                    <span>Общая стоимость
                        {totalCost
                            ?
                            ' ' + totalCost.toLocaleString() + ' '
                            :
                            ' ' + products.orderList[0].cost.toLocaleString() + ' '}
                        &#8381;</span>
                    <OrderProducts />
                </div>
            </div>
        </div >
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Order)
