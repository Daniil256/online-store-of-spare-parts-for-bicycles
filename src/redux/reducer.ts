import { Iaction, InitalState } from "../interfaces";
import { ADD_IN_CART, CLEAR_CART, ERROR_MESSAGE, ORDERING, PRODUCT_LIST_LOADED, REMOVE_FROM_CART, SEARCH, SORT_BY_COST, SORT_BY_NAME } from "./types";


const initalState: InitalState = {
    productListCart: [],
    productList: [],
    orderList: [],
    productListFilter: [],
    errorMessage: '',
}

export const reducer = (state = initalState, action: Iaction) => {
    switch (action.type) {
        case ERROR_MESSAGE:
            state.errorMessage = action.value!
            return {
                ...state
            }
        case PRODUCT_LIST_LOADED:
            state.productList = action.productList!
            state.productListFilter = action.productList!
            return {
                ...state
            }

        case ADD_IN_CART:
            state.productListCart.push(action.item!)

            return {
                ...state
            }

        case REMOVE_FROM_CART:
            const index = state.productListCart.indexOf(action.item!)
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
            if (state.productList.length) {
                state.productListFilter = state.productList.filter((item: any) =>
                    item.name.toLowerCase().includes(action.value!.toLowerCase()))
                if (state.productListFilter.length === 0) {
                    state.errorMessage = 'Ничего не найдено'
                }
            }
            return {
                ...state,
            }
        case ORDERING:
            state.orderList = action.orderList!
            localStorage.setItem('orderData', JSON.stringify(state.orderList))

            return {
                ...state,
            }

        default:
            if (localStorage.getItem('orderData'))
                state.orderList = JSON.parse(localStorage.getItem('orderData')!)
            return state
    }
}