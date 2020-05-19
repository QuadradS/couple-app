import {createSelector} from 'reselect'
import {IList} from "../reducers/list";
import {IStore} from "../reducers";

const getListStore = (store: IStore) => store.list

export const getListData = createSelector(
    getListStore,
    ({coupleItems}: IList) => (coupleItems)
)

