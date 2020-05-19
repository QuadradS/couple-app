import React, {useEffect} from "react";
import {connect} from 'react-redux'
import {deleteListItem, getAll, initList} from "../actions/list";
import {getListData} from "../selectors/list";
import {IStore} from "../reducers";
import {ICoupleItem} from "../reducers/list/types";
import './main.css'

interface IMain {
    coupleItems: ICoupleItem[]
    getAll: () => void
    initList: () => void
    deleteListItem: (name: string) => void
}

const Main = ({coupleItems, getAll, deleteListItem, initList}: IMain) => {

    useEffect(() => initList(), [])

    const handleDelete = (name: string) => () => deleteListItem(name)

    return (
        <div>
            <div className={'list'}>
                {coupleItems.map((ci: ICoupleItem) => (
                    <div key={ci.name}>
                        <p>{ci.name}</p>
                        <button onClick={handleDelete(ci.name)} className={'button'}>Delete</button>
                        <br/>
                        <hr/>
                    </div>
                ))}
            </div>
            <button className={'button'} onClick={getAll}>CLICK</button>

        </div>
    )
}

export default connect((store: IStore) => ({
    coupleItems: getListData(store)
}), {
    getAll,
    deleteListItem,
    initList
})(Main)
