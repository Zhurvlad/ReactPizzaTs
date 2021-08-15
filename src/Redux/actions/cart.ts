import {CartActionType, CartAction} from "../../types/cart";


export function addToCart(cartObj: any[]):CartAction {
    return {type: CartActionType.ADD_TO_CART_PIZZA, payload:cartObj}
}

