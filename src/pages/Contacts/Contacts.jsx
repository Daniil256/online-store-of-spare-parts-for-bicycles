import './Contacts.css'
export const Contacts = () => {
    return (
        <div className="Contacts content">
            <div className="title red">
                <h2>Отправьте нам ваши отзывы и предложения!</h2>
            </div>
            <form action="#" className="contacts">
                <input type="text" name="name" placeholder="Ваше имя" className="input" />
                <input type="tel" name="text" placeholder="Ваш email" className="input" />
                <textarea name="text" placeholder="Ваши отзывы и пожелания" className="input textarea"></textarea>
                <label className="btn"><button type="submit" hidden></button>Отправить</label>
            </form>
        </div>
    )
}