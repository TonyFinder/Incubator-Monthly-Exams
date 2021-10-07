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
    const setSetOn = () => {
        setDisableSet(false)
        setIncOffResetOff()
    }
    const setOffForAll = () => {
        setIncOffResetOff()
        setDisableSet(true)
    }

    //Checkin and correcting the button status for active or disable them
    const buttonsSettingsForIncReset = () => {
        let incrementTuesday = localStorage.getItem('incrementTuesday')
        let startValue = localStorage.getItem('startValue')
        let maxValue = localStorage.getItem('maxValue')
        if ((incrementTuesday !== maxValue) && (incrementTuesday !== startValue)) setIncOnResetOn()
        if (incrementTuesday === maxValue) setIncOffResetOn()
        if (incrementTuesday === startValue) setIncOnResetOff()
    }

    //useEffect using after the app is updated
    useEffect(() => {
        let incrementTuesday = localStorage.getItem('incrementTuesday')
        let startValue = localStorage.getItem('startValue')
        let maxValue = localStorage.getItem('maxValue')

        //Set the initial Local Storage data or set the updated values for useState
        incrementTuesday
            ? setInc(JSON.parse(incrementTuesday))
            : localStorage.setItem('incrementTuesday', JSON.stringify(incBegin))
        startValue
            ? setStart(JSON.parse(startValue))
            : localStorage.setItem('startValue', JSON.stringify(startBegin))
        maxValue
            ? setMax(JSON.parse(maxValue))
            : localStorage.setItem('maxValue', JSON.stringify(maxBegin))

        buttonsSettingsForIncReset()
    }, [])

    const incFunction = () => {
        inc++
        if (inc >= start) setDisableReset(false)
        if (inc >= max) {
            setDisableInc(true)
            setInc(inc)
        } else setInc(inc)
        localStorage.setItem('incrementTuesday', JSON.stringify(inc))
    }
    const resetFunction = () => {
        setInc(start)
        setIncOnResetOff()
        localStorage.setItem('incrementTuesday', JSON.stringify(start))
    }

    const onChangeMax = (max: number) => {
        setMax(max)
        let startValue = localStorage.getItem('startValue')
        let maxValue = localStorage.getItem('maxValue')
        if ((startValue === start.toString()) && (maxValue === max.toString())) {
            buttonsSettingsForIncReset()
            setDisableSet(true)
            setError(false)
            return
        }
        if (max <= 0 || max <= start || start < 0 || max === start) {
            setError(true)
            setOffForAll()
            return
        } else {
            setDisableSet(false)
            setIncOffResetOff()
            setError(false)
        }
    }
    const onChangeStart = (start: number) => {
        setStart(start)
        let startValue = localStorage.getItem('startValue')
        let maxValue = localStorage.getItem('maxValue')
        if ((startValue === start.toString()) && (maxValue === max.toString())) {
            buttonsSettingsForIncReset()
            setDisableSet(true)
            setError(false)
            return
        }
        if (max <= 0 || max <= start || start < 0 || max === start) {
            setError(true)
            setOffForAll()
            return
        } else {
            setDisableSet(false)
            setIncOffResetOff()
            setError(false)
        }
    }
    const setFunction = () => {
        localStorage.setItem('maxValue', JSON.stringify(max))
        localStorage.setItem('startValue', JSON.stringify(start))
        localStorage.setItem('incrementTuesday', JSON.stringify(start))
        setInc(start)
        setDisableSet(true)
        setIncOnResetOff()

    }

    return (
        <div className={style.twoCounters}>
            <div className={style.back}>
                <div className={style.middle}>
                    <div className={style.counterField}>
                        <SetDisplay start={start} max={max} onChangeMax={onChangeMax} onChangeStart={onChangeStart}/>
                    </div>
                    <div className={style.buttonsField}>
                        <Button disable={disableSet} title="set" callback={setFunction}/>
                    </div>
                </div>
            </div>
            <div className={style.back}>
                <div className={style.middle}>
                    <div className={style.counterField}>
                        <CounterDisplay counterNumber={inc} max={max} setMessage={disableSet} error={error}/>
                    </div>
                    <div className={style.buttonsField}>
                        <Button disable={disableInc} title="inc" callback={incFunction}/>
                        <Button disable={disableReset} title="reset" callback={resetFunction}/>
                    </div>
                </div>
            </div>
        </div>
    )
}