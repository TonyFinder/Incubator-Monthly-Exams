import style from './Monday.module.css'
import {Counter} from './Components/Counter/Counter';
import React from 'react';

export const Monday = () => {
    return(
        <div className={style.appComponent}>
            <h3 className={style.textDecoration}>Monday Exam</h3>
            <Counter/>
        </div>
    )
}