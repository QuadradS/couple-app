import {createSelector} from 'reselect'
import {IList} from "../reducers/list";

const getListStore = (store: any) => store.list

export const getListData = createSelector(
    getListStore,
    ({coupleItems}: IList) => (coupleItems)
)

