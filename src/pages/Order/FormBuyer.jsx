import { Field } from 'react-final-form'


export const FormBuyer = ({ handleSubmit, form, submitting, pristine, nextCheckoutWindowNumber, checkoutWindowNumber }) => {
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