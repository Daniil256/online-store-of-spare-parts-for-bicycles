import './Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header className="header">
            <div className="header_img">
                <img src="../img/header_img.jpg" alt="header" />
            </div>
            <div className="header_title">
                <strong className="logo">
                    <Link to="/">
                        ВЕЛОЗАПЧАСТИ
                    </Link>
                </strong>
                <h2>Магазин запчастей и аксессуаров для велосипедов </h2>
            </div>
        </header>
    )
}