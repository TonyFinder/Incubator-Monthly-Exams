import React, {useEffect, useState} from 'react'
import {Button} from '../Button/Button'
import {CounterDisplay} from '../CounterDisplay/CounterDisplay'
import style from './Counter.module.css'
import {SetDisplay} from '../SetDisplay/SetDisplay';


export const Counter = () => {
    let [inc, setInc] = useState<number>(0)
    let [start, setStart] = useState<number>(0)
    let [max, setMax] = useState<number>(5)
    let [disableInc, setDisableInc] = useState<boolean>(false)
    let [disableReset, setDisableReset] = useState<boolean>(true)
    let [disableSet, setDisableSet] = useState<boolean>(true)

    useEffect( () => {
        let incTuesday = localStorage.getItem("incrementTuesday")
        let maxValue = localStorage.getItem("maxValue")
        let startValue = localStorage.getItem("startValue")
        if (maxValue) setMax(JSON.parse(maxValue))
        if (startValue) setStart(JSON.parse(startValue))
        if (incTuesday) setInc(JSON.parse(incTuesday))
        if (maxValue === incTuesday) {
            setDisableInc(true)
            setDisableReset(false)
        }
        if ((incTuesday !== maxValue) && (incTuesday !== startValue)) setDisableReset(false)
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
        setDisableInc(false)
        setDisableReset(true)
        localStorage.setItem('incrementTuesday', JSON.stringify(start))
    }
    const onChangeMax = (max: number) => {
        setMax(max)
        setDisableSet(false)
    }
    const onChangeStart = (start: number) => {
        setStart(start)
        setDisableSet(false)
    }
    const setFunction = () => {
        localStorage.setItem("maxValue", JSON.stringify(max))
        localStorage.setItem("startValue", JSON.stringify(start))
        localStorage.setItem("incrementTuesday", JSON.stringify(start))
        setInc(start)
        setDisableSet(true)
        setDisableInc(false)
        setDisableReset(true)

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
                        <CounterDisplay counterNumber={inc} maxValue={max}/>
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