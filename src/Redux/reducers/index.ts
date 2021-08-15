import {combineReducers} from "redux";
import {pizzas} from "./pizza";
import {filter} from "./filter";
import {cart} from "./cart";


export const rootReducer = combineReducers({
    pizzas,
    filter,
    cart
})


//Хук для useSelector
export type RootState = ReturnType<typeof rootReducer>