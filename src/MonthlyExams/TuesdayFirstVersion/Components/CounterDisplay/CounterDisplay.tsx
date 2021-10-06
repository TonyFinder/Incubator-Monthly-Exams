import style from './CounterDisplay.module.css'

type CounterDisplayPropsType = {
    counterNumber: number
    maxValue: number
}

export const CounterDisplay = (props: CounterDisplayPropsType) => {
    const redText = props.counterNumber === props.maxValue ? style.redNumber : style.number

    return (
        <div className={redText}>
            {props.counterNumber}
        </div>
    )
}