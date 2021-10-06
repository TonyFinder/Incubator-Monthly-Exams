import style from './CounterDisplay.module.css'

type CounterDisplayPropsType = {
    counterNumber: number
}

export const CounterDisplay = (props: CounterDisplayPropsType) => {
    const redText = props.counterNumber === 5 ? style.redNumber : style.number

    return (
        <div className={redText}>
            {props.counterNumber}
        </div>
    )
}