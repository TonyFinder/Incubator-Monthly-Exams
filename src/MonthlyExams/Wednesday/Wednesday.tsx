import React from 'react';
import { Counter3 } from './Components/Counter3/Counter3';
import style from './Wednesday.module.css'

export const Wednesday = () => {
    return (
        <div className={style.appComponent}>
            <h3 className={style.textDecoration}>Wednesday Exam</h3>
            <Counter3/>
        </div>
    )
}