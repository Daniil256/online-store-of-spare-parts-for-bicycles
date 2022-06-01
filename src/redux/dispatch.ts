import { Iaction, IrootReducer, Item } from "../interfaces"



export function mapStateToProps({ rootReducer }: IrootReducer) {
    return {
        products: rootReducer
    }
}
export function mapDispatchToProps(dispatch: (action: Iaction) => void) {
    return {
        onAddInCart: (item: Item) => {
            const action: Iaction = { type: 'ADD_IN_CART', item }
            dispatch(action)
        },
        onRemoveInCart: (item: Item) => {
            const action: Iaction = { type: 'REMOVE_FROM_CART', item }
            dispatch(action)
        },
        onClearCart: () => {
            const action: Iaction = { type: 'CLEAR_CART' }
            dispatch(action)
        },
        onSortByName: () => {
            const action: Iaction = { type: 'SORT_BY_NAME' }
            dispatch(action)
        },
        onSortByCost: () => {
            const action: Iaction = { type: 'SORT_BY_COST' }
            dispatch(action)
        },
        onSearch: (value: string) => {
            const action: Iaction = { type: 'SEARCH', value }
            dispatch(action)
        },
        onOrdering: (orderList: Array<Item>) => {
            const action: Iaction = { type: 'ORDERING', orderList }
            dispatch(action)
        },
        onErrorMessage: (value: string) => {
            const action: Iaction = { type: 'ERROR_MESSAGE', value }
            dispatch(action)
        },
        onLoadedProductList: (productList: Array<Item>) => {
            const action: Iaction = { type: 'PRODUCT_LIST_LOADED', productList }
            dispatch(action)
        },
    }
}