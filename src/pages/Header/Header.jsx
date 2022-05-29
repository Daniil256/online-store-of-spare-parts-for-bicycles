import './Header.css'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <header className="header">
            <div className="header_img">
                <img src="../img/header/header_img.jpg" alt="header" />
            </div>
            <div className="header_title">
                <strong className="logo">
                    <NavLink to="/">
                        ВЕЛОЗАПЧАСТИ
                    </NavLink>
                </strong>
                <h2>Магазин запчастей и аксессуаров для велосипедов </h2>
            </div>
        </header>
    )
}