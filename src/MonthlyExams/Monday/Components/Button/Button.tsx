import style from './Button.module.css'

type ButtonPropsType = {
    title: string
    callback: () => void
    disable: boolean
}

export const Button = (props: ButtonPropsType) => {

    const incHandler = () => {
        props.callback()
    }

    return (
        <button disabled={props.disable} onClick={incHandler} className={style.button}>{props.title}</button>
    )
}