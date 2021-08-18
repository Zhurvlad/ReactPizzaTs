import produce from "immer";

import {CartAction, CartActionType, CartState} from "../../types/cart";


const initialState: CartState = {
    items: {},
    totalCount: 0,
    totalPrice: 0
}


export const cart = (state = initialState, action: CartAction): CartState => {
    return produce(state, draft => {
        switch (action.type) {
            case CartActionType.ADD_TO_CART_PIZZA :
                if (!draft.items[action.payload.id]) {
                    draft.items[action.payload.id] = {items: [], pizzaPrice: {}}
                }
                //Пушим в объект который созали пиццу
                draft.items[action.payload.id].items.push(action.payload)
                //Подсчитываем стоимость пицц в объекте по Id
                draft.items[action.payload.id].pizzaPrice = draft.items[action.payload.id].items.reduce((sum: number, obj: any) => obj.price + sum, 0)
                draft.totalPrice = draft.totalPrice + action.payload.price
                //Объединяем все пиццы в объекте по id  в один массив и достаём число пицц
                draft.totalCount = [].concat.apply([], (Object.values(draft.items)).map((obj: any) => obj.items)).length
                break;
            case CartActionType.CLEAR_CART:
                draft.items = []
                draft.totalCount = 0
                draft.totalPrice = 0
                break

            case CartActionType.MINUS_PIZZA:
                if (draft.items[action.payload].items.length > 1) {
                    draft.items[action.payload].items.shift()
                    draft.totalCount = draft.totalCount - 1
                    draft.totalPrice = draft.totalPrice - draft.items[action.payload].items[0].price
                    draft.items[action.payload].pizzaPrice = draft.items[action.payload].items.reduce((sum: number, obj: any) => obj.price + sum, 0)
                }
                break

            case CartActionType.PLUS_PIZZA:
                draft.items[action.payload].items.push(draft.items[action.payload].items[0])
                draft.totalPrice = draft.totalPrice + draft.items[action.payload].items[0].price
                draft.totalCount = draft.totalCount + 1
                draft.items[action.payload].pizzaPrice = draft.items[action.payload].items.reduce((sum: number, obj: any) => obj.price + sum, 0)
                break

            case CartActionType.REMOVE_PIZZA:
                draft.totalPrice = draft.totalPrice - draft.items[action.payload].pizzaPrice
                draft.totalCount = draft.totalCount - draft.items[action.payload].items.length
                delete draft.items[action.payload]
                break
            default:
        }
    });
}