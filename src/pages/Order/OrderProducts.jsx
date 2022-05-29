import { connect } from "react-redux"
import { ProductItemLitle } from "../../components/UI/ProductItemLitle/ProductItemLitle"
import { mapDispatchToProps, mapStateToProps } from "../../redux/dispatch"

const OrderProducts = ({ products }) => {
    return (
        <div className="products">
            {products.orderList.map(item =>
                <ProductItemLitle key={item.id} item={item} order={true} />
            )}
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderProducts)
