import { useEffect, useState } from "react";
import { timeToSecond } from "../../common/util/time";
import { ITask } from "../../types/task";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Stopwatch.module.scss";

interface Props {
    selected: ITask | undefined,
    finishTask: () => void,
}

export default function Stopwatch({selected, finishTask}: Props) {
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if(selected?.time) {
            setTime(timeToSecond(selected.time));
        }
    }, [selected])

    function regressive(counter: number = 0) {
        setTimeout(() => {
            if(counter > 0) {
                setTime(counter - 1);
                return regressive(counter - 1);
            }
            finishTask();
        }, 1000)
    }

    return (
        <div className={style.stopwatch}>
            <p className={style.title}>Choose a card and start the stopwatch </p>
            <div className={style.clockWrapper}>
                <Clock time={time}/>
            </div>

            <Button onClick={() => regressive(time)}>
                Start!
            </Button>
        </div>
        
    )
}