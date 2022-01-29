import {combineReducers, createStore} from 'redux';
import {reducerForValues} from './reducerForValues';
import {reducerForButtons} from './reducerForButtons';
import {reducerForScreens} from './reducerForScreens';
import {loadLocalStorage, saveLocalStorage} from './localStorageFunctions';

export type ReducersType = ReturnType<typeof reducers>
type StoreType = typeof store

export const reducers = combineReducers({
    values: reducerForValues,
    buttons: reducerForButtons,
    screens: reducerForScreens
})

export const store = createStore(reducers, loadLocalStorage())

store.subscribe(() => {
    saveLocalStorage({
        values: store.getState().values,
        buttons: store.getState().buttons,
        screens: store.getState().screens,
    })
})
