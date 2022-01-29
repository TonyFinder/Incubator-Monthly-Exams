import style from './Input3.module.css'
import {ChangeEvent} from 'react';

type InputPropsType = {
    name: string
    value: number
    onChangeCallback: (value: number) => void
    inputStyle: string
}

export const Input3 = (props: InputPropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeCallback(+e.currentTarget.value)
    }

    return (
        <div className={style.fieldSeparate}>
            <span className={style.number}>{props.name}</span>
            <input className={props.inputStyle} type={'number'} value={props.value} onChange={onChangeHandler}/>
        </div>
    )
}