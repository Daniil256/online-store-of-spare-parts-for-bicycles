export function mapStateToProps({ items }) {
    return {
        products: items
    }
}
export function mapDispatchToProps(dispatch) {
    return {
        onAddInCart: (item) => {
            const action = { type: 'ADD_IN_CART', item }
            dispatch(action)
        },
        onRemoveInCart: (item) => {
            const action = { type: 'REMOVE_FROM_CART', item }
            dispatch(action)
        },
        onClearCart: () => {
            const action = { type: 'CLEAR_CART' }
            dispatch(action)
        },
        onSortByName: () => {
            const action = { type: 'SORT_BY_NAME' }
            dispatch(action)
        },
        onSortByCost: () => {
            const action = { type: 'SORT_BY_COST' }
            dispatch(action)
        },
        onSearch: (value) => {
            const action = { type: 'SEARCH', value }
            dispatch(action)
        },
        onOrdering: (value) => {
            const action = { type: 'ORDERING', value }
            dispatch(action)
        },
        onLoadedProductList: (productList) => {
            const action = { type: 'PRODUCT_LIST_LOADED', productList }
            dispatch(action)
        },
    }
}