
export const saveToLocalStorage = (key:string, data: object) => {
    localStorage.setItem(key, JSON.stringify(data))
}

export const getSavedFromLocalStorage = (key:string) => {

    const data = localStorage.getItem(key)

    if(!!data) {
        return JSON.parse(data)
    }

    return undefined
}
