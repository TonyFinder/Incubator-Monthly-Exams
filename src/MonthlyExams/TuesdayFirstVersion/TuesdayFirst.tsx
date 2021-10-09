import style from './TuesdayFirst.module.css'
import React from 'react';
import { Counter } from './Components/Counter/Counter';

export const TuesdayFirst = () => {
    return(
        <div className={style.appComponent}>
            <h3 className={style.textDecoration}>Tuesday Exam (first version)</h3>
            <Counter/>
        </div>
    )
}