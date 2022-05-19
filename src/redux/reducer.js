import { productList } from "../App";
import { ADD_IN_CART, CLEAR_CART, REMOVE_FROM_CART, SORT_BY_NAME, SORT_BY_COST, SEARCH, ORDERING, TOTAL_COST } from "./types";

const initalState = {
    productListCart: [],
    productList: productList,
    orderList: [],
}

export const reducer = (state = initalState, action) => {
    switch (action.type) {

        case ADD_IN_CART:
            state.productListCart.push(action.item)
            localStorage.setItem('cartData', JSON.stringify(state.productListCart))
            return {
                ...state
            }

        case REMOVE_FROM_CART:
            const index = state.productListCart.indexOf(action.item)
            state.productListCart.splice(index, 1)
            localStorage.setItem('cartData', JSON.stringify(state.productListCart))
            return {
                ...state,
            }

        case CLEAR_CART:
            state.productListCart.splice(0)
            localStorage.setItem('cartData', state.productListCart)
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
            state.productList = productList.filter((item) =>
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
            localStorage.getItem('cartData') && (state.productListCart = JSON.parse(localStorage.getItem('cartData')))

            return state
    }
}