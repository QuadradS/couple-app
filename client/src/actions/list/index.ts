import {createAction} from 'redux-actions'
import * as listActionsTypes from './actionsTypes'
import {getList} from "../../services/list";
import {ICoupleItem} from "../../reducers/list/types";
import {ResponseTypes} from "../../services/types";
import {Dispatch} from "redux";
import {ActionTypes} from "../types";
import {ILIstPayload} from "../../reducers/list";


const getAllStart = createAction<void>(listActionsTypes.GET_LIST_START)
const getAllSuccess = createAction<ICoupleItem>(listActionsTypes.GET_LIST_SUCCESS)
const getAllError = createAction<string>(listActionsTypes.GET_LIST_ERROR)

export const getAll = () => async (dispatch: Dispatch<ActionTypes<ILIstPayload>>) => {
    dispatch(getAllStart())
    try {
        const res: ResponseTypes<ICoupleItem> = await getList()

        dispatch(getAllSuccess(res.data))
    } catch (e) {
        dispatch(getAllError('ERROR IN LIST ACTION'))
    }
}

const deleteListItemAction = createAction<string>(listActionsTypes.DELETE_LIST_ITEM)
export const deleteListItem = (name: string) => (dispatch: Dispatch<ActionTypes<ILIstPayload>>) => {
    dispatch(deleteListItemAction(name))
}

const initListAction = createAction<void>(listActionsTypes.INIT_LIST)
export const initList = () => (dispatch: Dispatch<ActionTypes<ILIstPayload>>) => {
    dispatch(initListAction())
}
