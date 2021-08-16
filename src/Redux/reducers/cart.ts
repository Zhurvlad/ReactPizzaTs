import produce from "immer";

import {CartAction, CartActionType, CartState} from "../../types/cart";


const initialState:CartState = {
    items: {},
    totalCount: 0,
    totalPrice: 0
}


export const cart = (state = initialState, action: CartAction): CartState => {
    return produce(state, draft => {
        switch (action.type) {
            case CartActionType.ADD_TO_CART_PIZZA :
                if(!draft.items[action.payload.id]){
                    draft.items[action.payload.id] = []
                }

                draft.items[action.payload.id].push(action.payload)
                draft.totalPrice = draft.totalPrice+ action.payload.price
                draft.totalCount = draft.totalCount + 1


                break;
            case CartActionType.CLEAR_CART:
                draft.items = []
                break

            default:
        }
    })
}