import {
    ADD_IN_CART,
    CLEAR_CART,
    REMOVE_FROM_CART,
    SORT_BY_NAME,
    SORT_BY_COST,
    SEARCH,
    ORDERING,
    PRODUCT_LIST_LOADED
} from "./types";

const initalState = {
    productListCart: [],
    productList: [],
    orderList: [],
}
let productListOriginal = []
export const reducer = (state = initalState, action) => {
    switch (action.type) {
        case PRODUCT_LIST_LOADED:
            state.productList = action.productList
            productListOriginal = action.productList
            return {
                ...state
            }

        case ADD_IN_CART:
            state.productListCart.push(action.item)

            return {
                ...state
            }

        case REMOVE_FROM_CART:
            const index = state.productListCart.indexOf(action.item)
            state.productListCart.splice(index, 1)

            return {
                ...state,
            }

        case CLEAR_CART:
            state.productListCart.splice(0)
            return {
                ...state,
            }

        case SORT_BY_NAME:
            state.productList.sort((a, b) => (b.name > a.name) ? -1 : 1)
            return {
                ...state,
            }

        case SORT_BY_COST:
            state.productList.sort((a, b) => (b.cost > a.cost) ? -1 : 1)
            return {
                ...state,
            }

        case SEARCH:
            state.productList = productListOriginal.filter((item) =>
                item.name.toLowerCase().includes(action.value.toLowerCase()))
            return {
                ...state,
            }
        case ORDERING:
            state.orderList = action.value
            localStorage.setItem('orderData', JSON.stringify(state.orderList))

            return {
                ...state,
            }

        default:
            localStorage.getItem('orderData') && (state.orderList = JSON.parse(localStorage.getItem('orderData')))
            return state
    }
}