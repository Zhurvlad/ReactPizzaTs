export enum CartActionType {
    ADD_TO_CART_PIZZA = 'ADD_TO_CART_PIZZA',

}

interface AddToCartAction {
    type : CartActionType.ADD_TO_CART_PIZZA,
    payload : any[]

}



export type CartAction = AddToCartAction

export interface CartState {
    items: any[],
    totalCount: number,
    totalPrice: number,

}
