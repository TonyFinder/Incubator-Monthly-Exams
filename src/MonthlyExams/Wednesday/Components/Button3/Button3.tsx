import style from './Button3.module.css'

type ButtonPropsType = {
    title: string
    callback: () => void
    disable: boolean
}

export const Button3 = (props: ButtonPropsType) => {

    const incHandler = () => {
        props.callback()
    }

    return (
        <button disabled={props.disable} onClick={incHandler} className={style.button}>{props.title}</button>
    )
}