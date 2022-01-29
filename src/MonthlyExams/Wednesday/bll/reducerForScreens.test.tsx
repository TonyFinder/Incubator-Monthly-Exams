import React, {useReducer} from 'react';
import {
    initialStateForScreensType,
    reducerForScreens,
    screenCounterDisableModeAC, screenErrorDisableModeAC,
    screenSetDisableModeAC
} from './reducerForScreens';

const initialState1: initialStateForScreensType = {
    counterScreen: false,
    setValueScreen: false,
    errorScreen: true,
}
const initialState2: initialStateForScreensType = {
    counterScreen: true,
    setValueScreen: false,
    errorScreen: false,
}

test('Screen COUNTER have to be true, others are false', ()=> {
    const endState = reducerForScreens(initialState1, screenCounterDisableModeAC())

    expect(initialState1).toEqual({
        counterScreen: false,
        setValueScreen: false,
        errorScreen: true,
    })
    expect(endState).toEqual({
        counterScreen: true,
        setValueScreen: false,
        errorScreen: false,
    })
})
test('Screen SET have to be true, others are false', ()=> {
    const endState = reducerForScreens(initialState1, screenSetDisableModeAC())

    expect(initialState1).toEqual({
        counterScreen: false,
        setValueScreen: false,
        errorScreen: true,
    })
    expect(endState).toEqual({
        counterScreen: false,
        setValueScreen: true,
        errorScreen: false,
    })
})
test('Screen ERROR have to be true, others are false', ()=> {
    const endState = reducerForScreens(initialState2, screenErrorDisableModeAC())

    expect(initialState2).toEqual({
        counterScreen: true,
        setValueScreen: false,
        errorScreen: false,
    })
    expect(endState).toEqual({
        counterScreen: false,
        setValueScreen: false,
        errorScreen: true,
    })
})