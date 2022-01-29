import {ReducersType} from './store';

export const saveLocalStorage = (state: ReducersType) => {
    let saverToLocalStorage = JSON.stringify(state)
    localStorage.setItem("state", saverToLocalStorage)
}
export const loadLocalStorage = () => {
    let loaderFromLocalStorageChecker = localStorage.getItem("state")
    if (loaderFromLocalStorageChecker) return JSON.parse(loaderFromLocalStorageChecker)
}