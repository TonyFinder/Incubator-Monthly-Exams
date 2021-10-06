import style from './SetDisplay.module.css'
import {ChangeEvent} from 'react';

type SetDisplayPropsType = {
    start: number
    max: number
    onChangeMax: (max: number) => void
    onChangeStart: (start: number) => void
}

export const SetDisplay = (props: SetDisplayPropsType) => {

    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeMax(+e.currentTarget.value)
    }
    const onChangeStart = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeStart(+e.currentTarget.value)
    }

    return (
        <div className={style.main}>
            <div className={style.fieldSeparate}>
                <span className={style.number}>max value:</span>
                <input className={style.inputCorrection} type={'number'} value={props.max} onChange={onChangeMax}/>
            </div>
            <div className={style.fieldSeparate}>
                <label className={style.number}>start value:</label>
                <input className={style.inputCorrection} type={'number'} value={props.start} onChange={onChangeStart}/>
            </div>
        </div>
    )
}