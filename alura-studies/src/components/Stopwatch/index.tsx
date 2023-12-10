import Button from "../Button";
import Clock from "./Clock";
import style from "./Stopwatch.module.scss";

export default function Stopwatch() {
    return (
        <div className={style.stopwatch}>
            <p className={style.title}>Choose a card and start the stopwatch</p>
            <div className={style.clockWrapper}>
                <Clock></Clock>
            </div>

            <Button>
                Start!
            </Button>
        </div>
        
    )
}