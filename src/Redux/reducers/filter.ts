import produce from "immer";

import {FilterState, FilterAction, FilterActionType} from "../../types/filter";




const initialState:FilterState = {
    category: null,
    popupObj: {
        name: 'популярности',
        type: 'rating'
    },
}

export const filter = (state = initialState, action: FilterAction): FilterState => {
    return produce(state, draft => {
        switch (action.type) {
            case FilterActionType.SET_CATEGORY :
                draft.category = action.payload
                break;
            case FilterActionType.SET_SORT:
                draft.popupObj = action.payload
                break
            default:
                return state
        }
    })
}