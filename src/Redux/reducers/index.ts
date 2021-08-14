import {combineReducers} from "redux";
import {pizzas} from "./pizza";
import {filter} from "./filter";


export const rootReducer = combineReducers({
    pizzas,
    filter
})


//Хук для useSelector
export type RootState = ReturnType<typeof rootReducer>