import * as listActionsTypes from '../../actions/list/actionsTypes';
import {ICoupleItem} from "./types";
import {ActionTypes} from "../../actions/types";
import {getSavedFromLocalStorage, saveToLocalStorage} from "../../util";

export type ILIstPayload = ICoupleItem | string | void


export interface IList {
    coupleItems: ICoupleItem[]
}

const initState: IList = {
    coupleItems: []
}

export const list = (state: IList = initState, {type, payload}: ActionTypes<ILIstPayload>) => {
    switch (type) {
        case listActionsTypes.INIT_LIST:
            const data: ICoupleItem[] = getSavedFromLocalStorage('coupleItems') || []
            return ({...state, coupleItems: data});
        case listActionsTypes.GET_LIST_START:
            return state;
        case listActionsTypes.GET_LIST_SUCCESS:
            saveToLocalStorage('coupleItems', [...state.coupleItems, payload])
            return ({...state, coupleItems: [...state.coupleItems, payload]});
        case listActionsTypes.GET_LIST_ERROR:
            return state;
        case listActionsTypes.DELETE_LIST_ITEM:
            const filteredItem = state.coupleItems.filter((it: ICoupleItem) => it.name !== payload)
            saveToLocalStorage('coupleItems', filteredItem)
            return ({...state, coupleItems: filteredItem})

        default:
            return state;
    }
}
