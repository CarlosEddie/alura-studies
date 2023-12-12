import { useState } from "react";
import { timeToSecond } from "../../common/util/time";
import { ITask } from "../../types/task";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Stopwatch.module.scss";

interface Props {
    selected: ITask | undefined
}

export default function Stopwatch({selected}: Props) {
    const [time, setTime] = useState<number>();
    if (selected?.time) {
        setTime(timeToSecond(selected.time));
    }
    return (
        <div className={style.stopwatch}>
            <p className={style.title}>Choose a card and start the stopwatch </p>
            Time: {time}
            <div className={style.clockWrapper}>
                <Clock></Clock>
            </div>

            <Button>
                Start!
            </Button>
        </div>
        
    )
}