export type initialStateForScreensType = typeof initialState

const initialState = {
    counterScreen: true,
    setValueScreen: false,
    errorScreen: false,
}

export const reducerForScreens = (state: initialStateForScreensType = initialState, action: ReducerForScreensAT): initialStateForScreensType => {
    switch (action.type) {
        case 'SCREEN-COUNTER-ON':
            return {...state, counterScreen: true, setValueScreen: false, errorScreen: false}
        case 'SCREEN-SET-ON':
            return {...state, counterScreen: false, setValueScreen: true, errorScreen: false}
        case 'SCREEN-ERROR-ON':
            return {...state, counterScreen: false, setValueScreen: false, errorScreen: true}
        default:
            return state
    }
}

type ReducerForScreensAT = ScreenCounterDisableModeAT | ScreenSetDisableModeAT | ScreenErrorDisableModeAT
type ScreenCounterDisableModeAT = {type: "SCREEN-COUNTER-ON"}
type ScreenSetDisableModeAT = {type: "SCREEN-SET-ON"}
type ScreenErrorDisableModeAT = {type: "SCREEN-ERROR-ON"}

export const screenCounterDisableModeAC = () => ({type: "SCREEN-COUNTER-ON" as const})
export const screenSetDisableModeAC = () => ({type: "SCREEN-SET-ON" as const})
export const screenErrorDisableModeAC = () => ({type: "SCREEN-ERROR-ON" as const})