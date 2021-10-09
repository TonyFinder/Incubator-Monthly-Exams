import React, {useEffect, useState} from 'react'
import {Button} from '../Button/Button'
import style from './Counter.module.css'
import {CounterDisplay} from '../CounterDisplay/CounterDisplay';

export const Counter = () => {
    let [inc, setInc] = useState<number>(0)
    let [disableInc, setDisableInc] = useState<boolean>(false)
    let [disableReset, setDisableReset] = useState<boolean>(true)
    useEffect(() => {
        let incLS = localStorage.getItem('incrementMonday')
        if (incLS) {
            let incNew = JSON.parse(incLS)
            if (incNew === 0) {
                return;
            }
            if (incNew === 5) {
                highestCounterNumber()
                setInc(incNew)
            } else {
                allActiveButtons()
                setInc(incNew)
            }
        }
    }, [])


    const highestCounterNumber = () => {
        setDisableInc(true)
        setDisableReset(false)
    }

    const allActiveButtons = () => {
        setDisableInc(false)
        setDisableReset(false)
    }

    const incFunction = () => {
        if (inc >= 5) {
            setDisableInc(true)
            return
        } else {
            inc++
            setInc(inc)
        }
        if (inc === 5) {
            highestCounterNumber()
        }
        if (inc === 1) {
            setDisableReset(false)
        }
        localStorage.setItem('incrementMonday', JSON.stringify(inc))
    }

    const resetFunction = () => {
        setInc(0)
        setDisableInc(false)
        setDisableReset(true)
        localStorage.setItem('incrementMonday', JSON.stringify(0))
    }

    return (
        <div className={style.back}>
            <div className={style.middle}>
                <div className={style.counterField}>
                    <CounterDisplay counterNumber={inc}/>
                </div>
                <div className={style.buttonsField}>
                    <Button disable={disableInc} title="inc" callback={incFunction}/>
                    <Button disable={disableReset} title="reset" callback={resetFunction}/>
                </div>
            </div>
        </div>
    )
}