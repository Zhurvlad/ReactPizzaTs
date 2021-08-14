import produce from "immer";
import {PizzaAction, PizzaActionType, PizzaState} from "../../types/pizza";



const initialState:PizzaState = {
    items: [],
    isLoading: false,
    error: null,


}

export const pizzas = (state = initialState, action: PizzaAction): PizzaState => {
        return produce(state, draft => {
            switch (action.type) {
                case PizzaActionType.GET_PIZZA :
                    draft.items = action.payload
                    draft.isLoading = true
                    draft.error = null
                    break;

                case PizzaActionType.LOADING_PIZZA :
                    draft.isLoading = action.payload
                    break
                case PizzaActionType.ERROR_LOADING:
                    draft.error = action.payload
                    break
                default:
                    return state
            }
        })
}