import style from './Tuesday.module.css'
import React from 'react';
import { Counter } from './Components/Counter/Counter';

export const Tuesday = () => {
    return(
        <div className={style.appComponent}>
            <h3 className={style.textDecoration}>Tuesday Exam (first version)</h3>
            <Counter/>
        </div>
    )
}