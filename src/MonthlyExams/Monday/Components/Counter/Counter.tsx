import React, { useState } from 'react'
import { Button } from '../Button/Button'
import style from './Counter.module.css'

export const Counter = () => {
    let [inc, setInc] = useState<number>(0)
    let [disableInc, setDisableInc] = useState<boolean>(false)
    let [disableReset, setDisableReset] = useState<boolean>(true)

    const incFunction = () => {
        if (inc >= 5) {
            setDisableInc(true)
            return
        } else {
            inc++
            setInc(inc)
        }
        if (inc === 5) {
            setDisableInc(true)
            setDisableReset(false)
        }
        if (inc === 1) {
            setDisableReset(false)
        }
    }

    const resetFunction = () => {
        setInc(0)
        setDisableInc(false)
        setDisableReset(true)
    }

    return(
        <div className={style.back}>
            <div className={style.middle}>
                <div className={style.counterField}>
                    <div className={inc===5 ? style.redNumber : style.number}>
                        {inc}
                    </div>
                </div>
                <div className={style.buttonsField}>
                    <Button disable={disableInc} title="inc" callback={incFunction}/>
                    <Button disable={disableReset} title="reset" callback={resetFunction}/>
                </div>
            </div>
        </div>
    )
}