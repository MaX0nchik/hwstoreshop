import style from './style.module.css'

const IconSwitch = ({icon, onSwitch}) => {
    return(
        <div className={style.switchmargin}>
            <span className="material-icons" onClick={()=>onSwitch(icon)}>{icon}</span>
        </div>
    )
}

export default IconSwitch;