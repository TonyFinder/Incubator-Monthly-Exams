import style from './CounterDisplay.module.css'

type CounterDisplayPropsType = {
    counterNumber: number
    max: number
    setMessage: boolean
    error: boolean
}

export const CounterDisplay = (props: CounterDisplayPropsType) => {
    const message = () => {
        if (props.error) {
            return <div className={style.setMessageRed}>Incorrect value!</div>
        }
        if (props.setMessage) {
            return <div className={props.counterNumber === props.max ? style.redNumber : style.number}>{props.counterNumber}</div>
        } else {
            return <div className={style.setMessage}>enter values and press 'set'</div>
        }
    }

    return (
        <div>
            {message()}
        </div>
    )
}