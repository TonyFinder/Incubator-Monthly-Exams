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
    const startInputBackground = () => {
        if (props.start < 0 || props.max < props.start || props.start === props.max) {
            return `${style.inputCorrection} ${style.redBackground}`
        } else {
            return style.inputCorrection
        }
    }
    const maxInputBackground = () => {
        if (props.max < 0 || props.max < props.start || props.start === props.max) {
            return `${style.inputCorrection} ${style.redBackground}`
        } else {
            return style.inputCorrection
        }
    }

    return (
        <div className={style.main}>
            <div className={style.fieldSeparate}>
                <span className={style.number}>max value:</span>
                <input className={maxInputBackground()} type={'number'} value={props.max} onChange={onChangeMax}/>
            </div>
            <div className={style.fieldSeparate}>
                <label className={style.number}>start value:</label>
                <input className={startInputBackground()} type={'number'} value={props.start} onChange={onChangeStart}/>
            </div>
        </div>
    )
}