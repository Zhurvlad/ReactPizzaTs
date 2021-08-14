import {FilterAction, FilterActionType} from "../../types/filter";

export function setCategory(category: any):FilterAction {
    return {type: FilterActionType.SET_CATEGORY, payload:category}
}

export function setPopup(popupObj: any):FilterAction {
    return {type: FilterActionType.SET_SORT, payload: popupObj }
}