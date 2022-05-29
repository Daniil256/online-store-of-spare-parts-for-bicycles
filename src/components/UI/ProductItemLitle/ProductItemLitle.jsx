import { Link } from 'react-router-dom'
import './ProductItemLitle.css'

export const ProductItemLitle = ({ item, order }) => {
    return (
        <div className="ProductItemLitle">
            <Link to={`/${item.id}`} >
                <div className="product_img">
                    <img src={`./img/products_img/${item.img}.jpg`} alt="description" />
                </div>
                <span className="product_title">{item.name + ' '}

                    {order && item.numberOfGoods + ' шт '}

                    {order && (item.cost * item.numberOfGoods).toLocaleString() + ' ₽'}
                </span>
            </Link>
        </div>
    )
}