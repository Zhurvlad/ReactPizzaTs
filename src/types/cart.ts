export enum CartActionType {
    ADD_TO_CART_PIZZA = 'ADD_TO_CART_PIZZA',
    CLEAR_CART = 'CLEAR_CART'

}

interface AddToCartAction {
    type : CartActionType.ADD_TO_CART_PIZZA,
    payload : any
}

interface ClearCartAction {
    type: CartActionType.CLEAR_CART
}




export type CartAction = AddToCartAction | ClearCartAction

export interface CartState {
    items: any,
    totalCount: number,
    totalPrice: number,
}
