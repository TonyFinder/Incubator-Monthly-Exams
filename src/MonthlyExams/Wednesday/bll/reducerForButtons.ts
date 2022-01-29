export type InitialStateButtonType = typeof initialState

const initialState = {
    setButtonValue: false,
    incButtonValue: true,
    resetButtonValue: false
}

export const reducerForButtons = (state: InitialStateButtonType = initialState, action: ReducerForButtonsAT): InitialStateButtonType => {
    switch (action.type) {
        case 'BUTTON-SET-VALUE-CHANGE':
            return {...state, setButtonValue: action.value}
        case 'BUTTON-INC-VALUE-CHANGE':
            return {...state, incButtonValue: action.value}
        case 'BUTTON-RESET-VALUE-CHANGE':
            return {...state, resetButtonValue: action.value}
        default:
            return state
    }
}

type ReducerForButtonsAT = SetButtonValueAT | IncButtonValueAT | ResetButtonValueAT
type SetButtonValueAT = {type: "BUTTON-SET-VALUE-CHANGE", value: boolean}
type IncButtonValueAT = {type: "BUTTON-INC-VALUE-CHANGE", value: boolean}
type ResetButtonValueAT = {type: "BUTTON-RESET-VALUE-CHANGE", value: boolean}

export const setButtonValueAC = (value: boolean) => ({type: "BUTTON-SET-VALUE-CHANGE" as const, value})
export const incButtonValueAC = (value: boolean) => ({type: "BUTTON-INC-VALUE-CHANGE" as const, value})
export const resetButtonValueAC = (value: boolean) => ({type: "BUTTON-RESET-VALUE-CHANGE" as const, value})
