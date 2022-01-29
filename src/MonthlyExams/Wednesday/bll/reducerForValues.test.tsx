import React from 'react';
import {
    incrementUpdateValueAC,
    incrementValueAC,
    InitialStateForValuesType,
    maxValueAC,
    reducerForValues,
    startValueAC, tempMaxValueAC,
    tempStartValueAC
} from './reducerForValues';

const initialState: InitialStateForValuesType = {
    start: 0,
    max: 5,
    tempStart: 0,
    tempMax: 5,
    increment: 0
}

test('Value Start have to be changed', () => {
    const endState = reducerForValues(initialState, startValueAC(3))

    expect(initialState).toEqual({
        start: 0,
        max: 5,
        tempStart: 0,
        tempMax: 5,
        increment: 0
    })
    expect(endState).toEqual({
        start: 3,
        max: 5,
        tempStart: 0,
        tempMax: 5,
        increment: 0
    })
})
test('Value Max have to be changed', () => {
    const endState = reducerForValues(initialState, maxValueAC(10))

    expect(initialState).toEqual({
        start: 0,
        max: 5,
        tempStart: 0,
        tempMax: 5,
        increment: 0
    })
    expect(endState).toEqual({
        start: 0,
        max: 10,
        tempStart: 0,
        tempMax: 5,
        increment: 0
    })
})
test('Value Increment have to be changed', () => {
    const endState = reducerForValues(initialState, incrementValueAC())

    expect(initialState).toEqual({
        start: 0,
        max: 5,
        tempStart: 0,
        tempMax: 5,
        increment: 0
    })
    expect(endState).toEqual({
        start: 0,
        max: 5,
        tempStart: 0,
        tempMax: 5,
        increment: 1
    })
})
test('Value TempStart have to be changed', () => {
    const endState = reducerForValues(initialState, tempStartValueAC(8))

    expect(initialState).toEqual({
        start: 0,
        max: 5,
        tempStart: 0,
        tempMax: 5,
        increment: 0
    })
    expect(endState).toEqual({
        start: 0,
        max: 5,
        tempStart: 8,
        tempMax: 5,
        increment: 0
    })
})
test('Value TempMax have to be changed', () => {
    const endState = reducerForValues(initialState, tempMaxValueAC(10))

    expect(initialState).toEqual({
        start: 0,
        max: 5,
        tempStart: 0,
        tempMax: 5,
        increment: 0
    })
    expect(endState).toEqual({
        start: 0,
        max: 5,
        tempStart: 0,
        tempMax: 10,
        increment: 0
    })
})
test('Value IncrementUpdate have to be changed', () => {
    const endState = reducerForValues(initialState, incrementUpdateValueAC(10))

    expect(initialState).toEqual({
        start: 0,
        max: 5,
        tempStart: 0,
        tempMax: 5,
        increment: 0
    })
    expect(endState).toEqual({
        start: 0,
        max: 5,
        tempStart: 0,
        tempMax: 5,
        increment: 10
    })
})