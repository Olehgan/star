import {useEffect, useState} from "react";
import s from './Clock.module.css'
type PropsType = {}
const get2DigitsStrings = (num: number) => num < 10 ? "0" + num : num

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setData] = useState(new Date())

    useEffect(() => {
        debugger
        const intervalID = setInterval(() => {
            console.log("Tick")
            setData(new Date())
        }, 1000);
        return () => {
            clearInterval(intervalID)
        }
    }, [])


    return <div>
        <time className={s.clock}>
        <span>
          {get2DigitsStrings(date.getHours())}
        </span>
        :
        <span>
        {get2DigitsStrings(date.getMinutes())}
        </span>
        :
        <span>{get2DigitsStrings(date.getSeconds())}
        </span>
        </time>
    </div>
}

