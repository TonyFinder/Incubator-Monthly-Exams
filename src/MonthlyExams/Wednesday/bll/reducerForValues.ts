export type InitialStateForValuesType = typeof initialState

const initialState = {
    start: 0,
    max: 5,
    tempStart: 0,
    tempMax: 5,
    increment: 0
}

export const reducerForValues = (state: InitialStateForValuesType = initialState, action: ReducerForValuesAT): InitialStateForValuesType => {
    switch (action.type) {
        case 'START-VALUE':
            return {...state, start: action.value}
        case 'MAX-VALUE':
            return {...state, max: action.value}
        case 'INCREMENT-VALUE':
            return {...state, increment: state.increment + 1}
        case 'TEMPMAX-VALUE':
            return {...state, tempMax: action.value}
        case 'TEMPSTART-VALUE':
            return {...state, tempStart: action.value}
        case 'INCREMENT-VALUE-UPDATE':
            return {...state, increment: action.value}
        default:
            return state
    }
}

type ReducerForValuesAT = StartValueAT | MaxValueAT | IncrementValueAT | TempStartValueAT | TempMaxValueAT | incrementUpdateValueAT
type StartValueAT = {type: "START-VALUE", value: number}
type MaxValueAT = {type: "MAX-VALUE", value: number}
type TempStartValueAT = {type: "TEMPSTART-VALUE", value: number}
type TempMaxValueAT = {type: "TEMPMAX-VALUE", value: number}
type IncrementValueAT = {type: "INCREMENT-VALUE"}
type incrementUpdateValueAT = {type: "INCREMENT-VALUE-UPDATE", value: number}

export const startValueAC = (value: number) => ({type: "START-VALUE" as const, value})
export const maxValueAC = (value: number) => ({type: "MAX-VALUE" as const, value})
export const tempStartValueAC = (value: number) => ({type: "TEMPSTART-VALUE" as const, value})
export const tempMaxValueAC = (value: number) => ({type: "TEMPMAX-VALUE" as const, value})
export const incrementValueAC = () => ({type: "INCREMENT-VALUE" as const})
export const incrementUpdateValueAC = (value: number) => ({type: "INCREMENT-VALUE-UPDATE" as const, value})