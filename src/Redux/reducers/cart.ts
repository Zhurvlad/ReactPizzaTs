import produce from "immer";

import {CartAction, CartActionType, CartState} from "../../types/cart";



const initialState:CartState = {
    items: [],
    totalCount: 0,
    totalPrice: 0



}

export const cart = (state = initialState, action: CartAction): CartState => {
    return produce(state, draft => {
        switch (action.type) {
            case CartActionType.ADD_TO_CART_PIZZA :
                draft.items = action.payload
                break;

            default:
        }
    })
}