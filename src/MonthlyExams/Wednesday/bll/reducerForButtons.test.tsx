import React from 'react';
import {
    incButtonValueAC,
    InitialStateButtonType,
    reducerForButtons,
    resetButtonValueAC,
    setButtonValueAC
} from './reducerForButtons';

const initialState: InitialStateButtonType = {
    setButtonValue: true,
    incButtonValue: true,
    resetButtonValue: true
}

test('Button Set have to change its disable mode', () => {
    const endState = reducerForButtons(initialState, setButtonValueAC(false))

    expect(initialState).toEqual({
        setButtonValue: true,
        incButtonValue: true,
        resetButtonValue: true
    })
    expect(endState).toEqual({
        setButtonValue: false,
        incButtonValue: true,
        resetButtonValue: true
    })
})
test('Button Inc have to change its disable mode', () => {
    const endState = reducerForButtons(initialState, incButtonValueAC(false))

    expect(initialState).toEqual({
        setButtonValue: true,
        incButtonValue: true,
        resetButtonValue: true
    })
    expect(endState).toEqual({
        setButtonValue: true,
        incButtonValue: false,
        resetButtonValue: true
    })
})
test('Button Reset have to change its disable mode', () => {
    const endState = reducerForButtons(initialState, resetButtonValueAC(false))

    expect(initialState).toEqual({
        setButtonValue: true,
        incButtonValue: true,
        resetButtonValue: true
    })
    expect(endState).toEqual({
        setButtonValue: true,
        incButtonValue: true,
        resetButtonValue: false
    })
})