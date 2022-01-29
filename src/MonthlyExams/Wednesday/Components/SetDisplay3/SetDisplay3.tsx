import style from './SetDisplay3.module.css'
import {Input3} from '../Input3/Input3';
import {useDispatch, useSelector} from 'react-redux';
import {ReducersType} from '../../bll/store';
import {InitialStateForValuesType, tempMaxValueAC, tempStartValueAC} from '../../bll/reducerForValues';
import {
    incButtonValueAC,
    InitialStateButtonType,
    resetButtonValueAC,
    setButtonValueAC
} from '../../bll/reducerForButtons';
import {
    initialStateForScreensType,
    screenCounterDisableModeAC,
    screenErrorDisableModeAC,
    screenSetDisableModeAC
} from '../../bll/reducerForScreens';

export const SetDisplay3 = () => {
    const dispatch = useDispatch()
    const allValues = useSelector<ReducersType, InitialStateForValuesType>(state => state.values)
    const allButtonValues = useSelector<ReducersType, InitialStateButtonType>(state => state.buttons)
    const allScreenValues = useSelector<ReducersType, initialStateForScreensType>(state => state.screens)

    let inputStyle = !allScreenValues.errorScreen ? style.inputCorrection : `${style.inputCorrection} ${style.redBackground}`

    //Universal function
    const allButtonsSet = (set: boolean, inc: boolean, reset: boolean) => {
        dispatch(setButtonValueAC(set))
        dispatch(incButtonValueAC(inc))
        dispatch(resetButtonValueAC(reset))
    }
    // Check Counter Display for all the values
    const checkValuesForCounterDisplay = () => {
        dispatch(screenCounterDisableModeAC())
        if (allValues.increment === allValues.start) allButtonsSet(false, true, false)
        if (allValues.increment > allValues.start && allValues.increment < allValues.max) allButtonsSet(false, true, true)
        if (allValues.increment === allValues.max) allButtonsSet(false, false, true)
    }

    const changeStartValue = (value: number) => {
        if (value > allValues.tempMax) return
        if (value === allValues.start && allValues.max === allValues.tempMax) {
            dispatch(tempStartValueAC(value))
            checkValuesForCounterDisplay()
            return
        }
        if (value === allValues.tempMax || value < 0) {
            if (value < -1) {
                return
            } else {
                dispatch(tempStartValueAC(value))
                dispatch(screenErrorDisableModeAC())
                allButtonsSet(false, false, false)
                return
            }
        }
        if (value < allValues.tempMax || value !== allValues.tempStart) {
            dispatch(tempStartValueAC(value))
            if (!allButtonValues.setButtonValue) {
                dispatch(screenSetDisableModeAC())
                allButtonsSet(true, false, false)
            }
        }
    }
    const changeMaxValue = (value: number) => {
        if (allValues.tempStart === -1) return
        if (value === allValues.tempStart - 1) return
        if (value === allValues.max && allValues.start === allValues.tempStart) {
            dispatch(tempMaxValueAC(value))
            checkValuesForCounterDisplay()
        }
        if (value > allValues.tempStart || value !== allValues.tempMax) {
            dispatch(tempMaxValueAC(value))
            if (!allButtonValues.setButtonValue) {
                dispatch(screenSetDisableModeAC())
                allButtonsSet(true, false, false)
            }
        }
        if (value === allValues.tempStart) {
            dispatch(screenErrorDisableModeAC())
            allButtonsSet(false, false, false)
        }
    }

    return (
        <div className={style.main}>
            <div className={style.fieldSeparate}>
                <Input3 name={'max value:'} value={allValues.tempMax} onChangeCallback={changeMaxValue}
                        inputStyle={inputStyle}/>
            </div>
            <div className={style.fieldSeparate}>
                <Input3 name={'start value:'} value={allValues.tempStart} onChangeCallback={changeStartValue}
                        inputStyle={inputStyle}/>
            </div>
        </div>
    )
}