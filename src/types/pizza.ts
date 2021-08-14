export enum PizzaActionType {
    GET_PIZZA = 'GET_PIZZA',
    LOADING_PIZZA = 'LOADING_PIZZA',
    ERROR_LOADING = 'ERROR_LOADING'
}

interface GetPizzaAction {
    type : PizzaActionType.GET_PIZZA,
    payload : any[]

}

interface LoadingPizzaAction {
    type : PizzaActionType.LOADING_PIZZA
    payload :boolean
}

interface ErrorLoadingAction {
    type : PizzaActionType.ERROR_LOADING,
    payload: string,
}

export type PizzaAction = GetPizzaAction | LoadingPizzaAction | ErrorLoadingAction

export interface PizzaState {
    items: any[],
    isLoading: boolean,
    error: null | string,

}
