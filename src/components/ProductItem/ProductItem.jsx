import './ProductItem.css'
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import { mapDispatchToProps, mapStateToProps } from '../../redux/dispatch';
import { useMemo, useState } from 'react';

const Product_item = ({ item, onAddInCart, products, onRemoveInCart, onOrdering }) => {
    const [quantityOfGoods, setQuantityOfGoods] = useState(1)
    useMemo(() => {
        if (item.numberOfGoods) setQuantityOfGoods(item.numberOfGoods)
    }, [])

    const quantityOfGoodsCalc = (value, item) => {
        if (value > 0) {
            setQuantityOfGoods(value)
            item['numberOfGoods'] = value
            onOrdering([item])
        }
    }

    return (
        <div className="product">
            <div className="product_img"><img src={`./img/products_img/${item.img}.jpg`} alt="description" /></div>
            <span className="product_title">{item.name + ' '}
                {
                    quantityOfGoods > 1 ? quantityOfGoods + ' шт' : ''
                }
            </span>

            <div className="block_buttons">
                <span className="btn_add_more btn symbol"
                    onClick={() => quantityOfGoodsCalc(quantityOfGoods - 1, item)}
                >-</span>
                <span className="product_cost btn">
                    {
                        (item.cost * quantityOfGoods).toLocaleString() + ' '
                    }
                    &#8381;
                </span>
                <span className="btn_add_more btn symbol"
                    onClick={() => quantityOfGoodsCalc(quantityOfGoods + 1, item)}
                >+</span>
            </div>

            <div className="block_buttons">
                {products.productListCart.includes(item)
                    ?
                    <span className="btn__add_in_cart btn active" onClick={() => onRemoveInCart(item)}>Удалить из корзины</span>
                    :
                    <span className="btn__add_in_cart btn" onClick={() => onAddInCart(item)}>Добавить в корзину</span>
                }
                <NavLink className="btn__buy btn" to='/order' onClick={() => onOrdering([item])}>Купить в один клик</NavLink>
                {item.limited && <div className="product_limited">Количество ограничено</div>}
            </div>

        </div >
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Product_item)