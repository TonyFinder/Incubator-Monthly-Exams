import React from 'react';
import style from './App.module.css';
import {Counter} from './MonthlyExams/Monday/Components/Counter/Counter';

function App() {
    return (
        <div className={style.appComponent}>
            <Counter/>
        </div>
    )
}

export default App;
