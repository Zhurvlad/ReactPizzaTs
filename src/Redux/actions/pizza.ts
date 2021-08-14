import {PizzaAction, PizzaActionType} from "../../types/pizza";
import {Dispatch} from "redux";
import axios from "axios";



export const fetchPizza = (category:any, popupObj:any) => {
    return async (dispatch: Dispatch<PizzaAction>) => {
        try {
            dispatch({type: PizzaActionType.LOADING_PIZZA, payload: false})
            const {data} = await axios.get(`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${popupObj.type}&_order=${popupObj.order}`)
           dispatch({type: PizzaActionType.GET_PIZZA, payload: data})

        } catch (e) {
            dispatch({
                type: PizzaActionType.ERROR_LOADING,
                payload : 'Произошла ошибка при загрузке пицц'})
        }
    }
}