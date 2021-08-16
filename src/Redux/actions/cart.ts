import {CartAction, CartActionType} from "../../types/cart";


export function addToCart(cartObj: any[]):CartAction {
    return {type: CartActionType.ADD_TO_CART_PIZZA, payload:cartObj}
}

export function clearCart():CartAction {
    return { type:CartActionType.CLEAR_CART}
}

