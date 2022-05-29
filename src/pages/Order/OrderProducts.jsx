import { connect } from "react-redux"
import { ProductItemLitle } from "../../components/ProductItemLitle/ProductItemLitle"
import { mapDispatchToProps, mapStateToProps } from "../../redux/dispatch"

const OrderProducts = ({ products, totalCost }) => {
    return (
        <div className="order-list">
            <h2>Ваш заказ</h2>
            <span>Общая стоимость {totalCost.toLocaleString()} &#8381;</span>
            <div className="products">
                {products.orderList.map(item =>
                    <ProductItemLitle key={item.id} item={item} order={true} />
                )}
            </div>
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderProducts)
