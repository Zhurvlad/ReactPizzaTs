export enum FilterActionType {
    SET_CATEGORY = 'SET_CATEGORY',
    SET_SORT = 'SET_SORT',
}

interface SetCategoryAction {
    type : FilterActionType.SET_CATEGORY,
    payload : any

}

interface SetSortAction {
    type : FilterActionType.SET_SORT
    payload :{
        name: string,
        type: string
    },
}


export type FilterAction = SetCategoryAction | SetSortAction

export interface FilterState {
    category: any,
    popupObj: {
        name: string,
        type: string
    }
}
