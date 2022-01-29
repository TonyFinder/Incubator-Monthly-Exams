import React from 'react'
import style from './Counter3.module.css'
import {SetDisplay3} from '../SetDisplay3/SetDisplay3';
import {Button3} from '../Button3/Button3';
import {CounterDisplay3} from '../CounterDisplay3/CounterDisplay3';
import {useDispatch, useSelector} from 'react-redux';
import {ReducersType} from '../../bll/store';
import {
    incButtonValueAC,
    InitialStateButtonType,
    resetButtonValueAC,
    setButtonValueAC
} from '../../bll/reducerForButtons';
import {
    incrementUpdateValueAC,
    incrementValueAC,
    InitialStateForValuesType,
    maxValueAC,
    startValueAC
} from '../../bll/reducerForValues';
import {screenCounterDisableModeAC} from '../../bll/reducerForScreens';

export const Counter3 = () => {
    const buttonValues = useSelector<ReducersType, InitialStateButtonType>(state => state.buttons)
    const allValues = useSelector<ReducersType, InitialStateForValuesType>(state => state.values)
    const dispatch = useDispatch()

    const setValues = () => {
        dispatch(setButtonValueAC(false))
        dispatch(incButtonValueAC(true))
        dispatch(resetButtonValueAC(false))
        dispatch(startValueAC(allValues.tempStart))
        dispatch(maxValueAC(allValues.tempMax))
        dispatch(incrementUpdateValueAC(allValues.tempStart))
        dispatch(screenCounterDisableModeAC())
    }
    const increaseIncrement = () => {
        if (allValues.increment === allValues.start) dispatch(resetButtonValueAC(true))
        if (allValues.increment + 1 === allValues.max) {
            dispatch(incButtonValueAC(false))
            dispatch(incrementValueAC())
        } else dispatch(incrementValueAC())
    }
    const resetIncrement = () => {
        dispatch(incButtonValueAC(true))
        dispatch(resetButtonValueAC(false))
        dispatch(incrementUpdateValueAC(allValues.start))
    }

    return (
        <div className={style.twoCounters}>
            <div className={style.back}>
                <div className={style.middle}>
                    <div className={style.counterField}>
                        <SetDisplay3 />
                    </div>
                    <div className={style.buttonsField}>
                        <Button3 disable={!buttonValues.setButtonValue} title="set" callback={setValues}/>
                    </div>
                </div>
            </div>
            <div className={style.back}>
                <div className={style.middle}>
                    <div className={style.counterField}>
                        <CounterDisplay3/>
                    </div>
                    <div className={style.buttonsField}>
                        <Button3 disable={!buttonValues.incButtonValue} title="inc" callback={increaseIncrement}/>
                        <Button3 disable={!buttonValues.resetButtonValue} title="reset" callback={resetIncrement}/>
                    </div>
                </div>
            </div>
        </div>
    )
}