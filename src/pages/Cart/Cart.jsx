import { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import ProductItem from "../../components/ProductItem/ProductItem"
import { mapDispatchToProps, mapStateToProps } from '../../redux/dispatch';
import './Cart.css'

const Cart = ({ products, onClearCart, onOrdering }) => {

    useEffect(() => {
        onOrdering([])
    }, [])


    return (
        <div className="Cart content">
            <div className="title violet-red">
                <h2>Корзина</h2>
            </div>
            {products.productListCart.length
                ?
                <>
                    <NavLink className="btn_cart" to='/order' onClick={() => onOrdering(products.productListCart)} >Оформить заказ</NavLink>
                    <span className="btn_cart" onClick={() => onClearCart()}>Очистить корзину</span>
                    <div className="items">
                        {products.productListCart.map(item =>
                            <ProductItem item={item} key={item.id} />
                        )}
                    </div>
                </>
                :
                <h4>Добавьте товары в корзину чтобы не потерять!</h4>
            }
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
