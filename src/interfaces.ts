export interface Item {
    name: string
    cost: number
    limited: boolean
    img: string
    id: number
    numberOfGoods: number
}

export interface Iproducts {
    productListCart: Array<Item>
    productList: Array<Item>
    productListFilter: Array<Item>
    orderList: Array<Item>
    errorMessage: string
}

export interface IProps {
    products: Iproducts;
    items?: Array<Item>
    totalCost?: number
    onSortByName(): void;
    onSortByCost(): void;
    onSearch(value: string): void;
    onOrdering(array: Array<Item>): void;
    onAddInCart(item: object): void
    onRemoveInCart(item: object): void
    onLoadedProductList: (response: Array<Item>) => void;
    onErrorMessage: (value: string) => void
    onClearCart: () => void
}

export interface InitalState {
    productList: Array<Item>
    productListFilter: Array<Item>
    productListCart: Array<Item>
    orderList: Array<Item>
    errorMessage: string
}

export interface Iaction {
    item?: Item
    type: string
    value?: string
    orderList?: Array<Item>
    productList?: Array<Item>
}

export interface Iform {
    handleSubmit?: any
    form?: any
    submitting?: any
    pristine?: any
    nextCheckoutWindowNumber?: any
    checkoutWindowNumber?: any
    values?: any
    active?: any
}
export interface IrootReducer {
    rootReducer: Iproducts
}