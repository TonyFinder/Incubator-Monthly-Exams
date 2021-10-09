import style from '../TuesdayFirstVersion/TuesdayFirst.module.css';
import React from 'react';
import {Counter} from './Components/Counter/Counter';


export const TuesdaySecond = () => {
    return (
        <div className={style.appComponent}>
            <h3 className={style.textDecoration}>Tuesday Exam (second version)</h3>
            <Counter/>
        </div>
    )
}