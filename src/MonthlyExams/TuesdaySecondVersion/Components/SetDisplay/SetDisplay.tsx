import style from './SetDisplay.module.css'
import {useEffect, useState} from 'react';
import {Input} from '../Input/Input';

type SetDisplayPropsType = {
    start: number
    max: number
    onChangeMax: (value: number) => void
    onChangeStart: (value: number) => void
}

export const SetDisplay = (props: SetDisplayPropsType) => {
    let [inputStyleMax, setInputStyleMax] = useState<string>(style.inputCorrection)
    let [inputStyleStart, setInputStyleStart] = useState<string>(style.inputCorrection)
    useEffect( () => {
        if (props.max < props.start) {
            setInputStyleMax(`${style.inputCorrection} ${style.redBackground}`)
            setInputStyleStart(style.inputCorrection)
            return
        }
        if (props.max <= 0 && props.start > 0 && props.start !== props.max) {
            setInputStyleMax(`${style.inputCorrection} ${style.redBackground}`)
            setInputStyleStart(style.inputCorrection)
            return
        }
        if (props.max === props.start) {
            setInputStyleMax(`${style.inputCorrection} ${style.redBackground}`)
            setInputStyleStart(`${style.inputCorrection} ${style.redBackground}`)
            return
        }
        if (props.start < 0 && props.max > 0) {
            setInputStyleMax(style.inputCorrection)
            setInputStyleStart(`${style.inputCorrection} ${style.redBackground}`)
            return
        }
        if (props.start >= 0 && props.max > 0) {
            setInputStyleMax(style.inputCorrection)
            setInputStyleStart(style.inputCorrection)
            return
        }
    }, [props.max, props.start])

    return (
        <div className={style.main}>
            <div className={style.fieldSeparate}>
                <Input name={"max value:"} value={props.max} onChangeCallback={props.onChangeMax} inputStyle={inputStyleMax}/>
            </div>
            <div className={style.fieldSeparate}>
                <Input name={"start value:"} value={props.start} onChangeCallback={props.onChangeStart} inputStyle={inputStyleStart}/>
            </div>
        </div>
    )
}