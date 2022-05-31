export function mapStateToProps({ items }: any) {
    return {
        products: items
    }
}
export function mapDispatchToProps(dispatch: any) {
    return {
        onAddInCart: (item: object) => {
            const action = { type: 'ADD_IN_CART', item }
            dispatch(action)
        },
        onRemoveInCart: (item: object) => {
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
        onSearch: (value: string) => {
            const action = { type: 'SEARCH', value }
            dispatch(action)
        },
        onOrdering: (orderList: Array<object>) => {
            const action = { type: 'ORDERING', orderList }
            dispatch(action)
        },
        onErrorMessage: (value: string) => {
            const action = { type: 'ERROR_MESSAGE', value }

            console.log(dispatch);
            dispatch(action)
        },
        onLoadedProductList: (productList: any[]) => {
            const action = { type: 'PRODUCT_LIST_LOADED', productList }
            dispatch(action)
        },
    }
}