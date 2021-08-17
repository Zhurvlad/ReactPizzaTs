export enum CartActionType {
    ADD_TO_CART_PIZZA = 'ADD_TO_CART_PIZZA',
    CLEAR_CART = 'CLEAR_CART',
    MINUS_PIZZA = 'MINUS_PIZZA',
    PLUS_PIZZA = 'PLUS_PIZZA',
    REMOVE_PIZZA = 'REMOVE_PIZZA'

}

interface AddToCartAction {
    type : CartActionType.ADD_TO_CART_PIZZA,
    payload : any
}

interface ClearCartAction {
    type: CartActionType.CLEAR_CART

}

interface PlusPizzaAction {
    type: CartActionType.PLUS_PIZZA
    payload: number
}

interface MinusPizzaAction {
    type: CartActionType.MINUS_PIZZA
    payload: number
}

interface RemovePizza {
    type: CartActionType.REMOVE_PIZZA
    payload: number
}



export type CartAction =
    AddToCartAction
    | ClearCartAction
    | PlusPizzaAction
    | MinusPizzaAction
    | RemovePizza

export interface CartState {
    items: any,
    totalCount: number,
    totalPrice: number,
}
