import style from './CounterDisplay3.module.css'
import {useSelector} from 'react-redux';
import {ReducersType} from '../../bll/store';
import {initialStateForScreensType} from '../../bll/reducerForScreens';
import {InitialStateForValuesType} from '../../bll/reducerForValues';

export const CounterDisplay3 = () => {
    const screenValues = useSelector<ReducersType, initialStateForScreensType>(state => state.screens)
    const allValues = useSelector<ReducersType, InitialStateForValuesType>(state => state.values)

    return (
        <div>
            {screenValues.counterScreen && <div className={allValues.max === allValues.increment ? style.redNumber : style.number}>{allValues.increment}</div>}
            {screenValues.setValueScreen && <div className={style.setMessage}>enter values and press 'set'</div>}
            {screenValues.errorScreen && <div className={style.setMessageRed}>Incorrect value!</div>}
        </div>
    )

}