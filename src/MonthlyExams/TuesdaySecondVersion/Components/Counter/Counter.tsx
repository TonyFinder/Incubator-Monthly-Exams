import React, {useEffect, useState} from 'react'
import {Button} from '../Button/Button'
import {CounterDisplay} from '../CounterDisplay/CounterDisplay'
import style from './Counter.module.css'
import {SetDisplay} from '../SetDisplay/SetDisplay';


export const Counter = () => {
    // Set initial values
    const incBegin = 0
    const startBegin = 0
    const maxBegin = 5

    //All useState functions
    let [inc, setInc] = useState<number>(incBegin)
    let [start, setStart] = useState<number>(startBegin)
    let [max, setMax] = useState<number>(maxBegin)
    let [disableInc, setDisableInc] = useState<boolean>(false)
    let [disableReset, setDisableReset] = useState<boolean>(true)
    let [disableSet, setDisableSet] = useState<boolean>(true)
    let [error, setError] = useState<boolean>(false)
    //Show main or setting window
    let [showMain, setShowMain] = useState<boolean>(true)

    //Button setting functions. Active or disable
    const setIncOnResetOn = () => {
        setDisableInc(false)
        setDisableReset(false)
    }
    const setIncOnResetOff = () => {
        setDisableInc(false)
        setDisableReset(true)
    }
    const setIncOffResetOn = () => {
        setDisableInc(true)
        setDisableReset(false)
    }
    const setIncOffResetOff = () => {
        setDisableInc(true)
        setDisableReset(true)
    }
    const setOffForAll = () => {
        setIncOffResetOff()
        setDisableSet(true)
    }

    //Checkin and correcting the button status for active or disable them
    const buttonsSettingsForIncReset = () => {
        let incrementTuesday = localStorage.getItem('incrementTuesday2')
        let startValue = localStorage.getItem('startValue2')
        let maxValue = localStorage.getItem('maxValue2')
        if ((incrementTuesday !== maxValue) && (incrementTuesday !== startValue)) setIncOnResetOn()
        if (incrementTuesday === maxValue) setIncOffResetOn()
        if (incrementTuesday === startValue) setIncOnResetOff()
    }

    //useEffect using after the app is updated
    useEffect(() => {
        let incrementTuesday = localStorage.getItem('incrementTuesday2')
        let startValue = localStorage.getItem('startValue2')
        let maxValue = localStorage.getItem('maxValue2')

        //Set the initial Local Storage data or set the updated values for useState
        incrementTuesday
            ? setInc(JSON.parse(incrementTuesday))
            : localStorage.setItem('incrementTuesday2', JSON.stringify(incBegin))
        startValue
            ? setStart(JSON.parse(startValue))
            : localStorage.setItem('startValue2', JSON.stringify(startBegin))
        maxValue
            ? setMax(JSON.parse(maxValue))
            : localStorage.setItem('maxValue2', JSON.stringify(maxBegin))

        buttonsSettingsForIncReset()
    }, [])

    const incFunction = () => {
        inc++
        if (inc >= start) setDisableReset(false)
        if (inc >= max) {
            setDisableInc(true)
            setInc(inc)
        } else setInc(inc)
        localStorage.setItem('incrementTuesday2', JSON.stringify(inc))
    }
    const resetFunction = () => {
        setInc(start)
        setIncOnResetOff()
        localStorage.setItem('incrementTuesday2', JSON.stringify(start))
    }

    const onChangeHandler = (valueStart: number, valueMax: number) => {
        let startValue = localStorage.getItem('startValue2')
        let maxValue = localStorage.getItem('maxValue2')
        if ((startValue === valueStart.toString()) && (maxValue === valueMax.toString())) {
            buttonsSettingsForIncReset()
            setDisableSet(true)
            setError(false)
            return
        }
        if (valueMax <= 0 || valueMax <= valueStart || valueStart < 0 || valueMax === valueStart) {
            setError(true)
            setOffForAll()
            return
        } else {
            setDisableSet(false)
            setIncOffResetOff()
            setError(false)
        }
    }

    const onChangeMax = (value: number) => {
        setMax(value)
        onChangeHandler(start, value)
    }
    const onChangeStart = (value: number) => {
        setStart(value)
        onChangeHandler(value, max)
    }
    const setFunction = () => {
        localStorage.setItem('maxValue2', JSON.stringify(max))
        localStorage.setItem('startValue2', JSON.stringify(start))
        localStorage.setItem('incrementTuesday2', JSON.stringify(start))
        setInc(start)
        setDisableSet(true)
        setIncOnResetOff()
        setShowMain(!showMain)
    }

    const changeWindowHandler = () => {
        setShowMain(!showMain)
    }

    return (
        <div className={style.twoCounters}>
            {!showMain && <div className={style.back}>
                <div className={style.middle}>
                    <div className={style.counterField}>
                        <SetDisplay start={start} max={max} onChangeMax={onChangeMax} onChangeStart={onChangeStart}/>
                    </div>
                    <div className={style.buttonsField}>
                        <Button disable={disableSet} title="set" callback={setFunction}/>
                        <Button disable={false} title="back" callback={changeWindowHandler}/>
                    </div>
                </div>
            </div>}
            {showMain && <div className={style.back}>
                <div className={style.middle}>
                    <div className={style.counterField}>
                        <CounterDisplay counterNumber={inc} max={max} setMessage={disableSet} error={error}/>
                    </div>
                    <div className={style.buttonsField}>
                        <Button disable={disableInc} title="inc" callback={incFunction}/>
                        <Button disable={disableReset} title="reset" callback={resetFunction}/>
                        <Button disable={false} title="set" callback={changeWindowHandler}/>
                    </div>
                </div>
            </div>}
        </div>
    )
}