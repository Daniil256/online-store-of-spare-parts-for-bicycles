import { connect } from "react-redux"
import { mapDispatchToProps, mapStateToProps } from "../../redux/dispatch"

const OrderProducts = ({ products }) => {
    return (
        <div className="products">
            {products.orderList.map(item =>
                <div className="product_order" key={item.id}>
                    <div className="product_img"><img src={`./img/products_img/${item.img}.jpg`} alt="description" /></div>
                    <span className="product_title">{item.name + ' '}

                        {item.numberOfGoods + ' шт '}

                        {(item.cost * item.numberOfGoods).toLocaleString() + ' '} &#8381;
                    </span>
                </div>
            )}
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderProducts)
