import {CartAction, CartActionType} from "../../types/cart";


export function addToCart(cartObj: any[]):CartAction {
    return {type: CartActionType.ADD_TO_CART_PIZZA, payload:cartObj}
}

export function clearCart():CartAction {
    return { type:CartActionType.CLEAR_CART}
}

export function MinusPizza(id:number) {
    return { type: CartActionType.MINUS_PIZZA, payload: id}
}

export function PlusPizza(id:number) {
    return {type: CartActionType.PLUS_PIZZA, payload: id}
}

export function RemovePizza(id: number) {
    return {type: CartActionType.REMOVE_PIZZA, payload: id}
}