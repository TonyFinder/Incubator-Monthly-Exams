import React from 'react';
import {Monday} from './MonthlyExams/Monday/Monday';
import {TuesdayFirst} from './MonthlyExams/TuesdayFirstVersion/TuesdayFirst';
import {TuesdaySecond} from './MonthlyExams/TuesdaySecondVersion/TuesdaySecond';
import {Wednesday} from './MonthlyExams/Wednesday/Wednesday';


function App() {
    return (
        <div>
            <Monday/>
            <TuesdayFirst/>
            <TuesdaySecond/>
            <Wednesday/>
        </div>
    )
}

export default App;
