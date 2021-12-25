import React, {useEffect, useState} from "react";
import {DigitalClock} from "./DigitalClock";
import {AnalogClock} from "./AnalogClock";

export type  ClockPropsType = {
    date: Date
}
export type PropsType = {
    mode?: 'digital' | 'analog'
}

export const Clock: React.FC<PropsType> = ({mode}) => {
    let [date, setDate] = useState(new Date())
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    let view;
    switch (mode) {
        case 'analog':
            view = <AnalogClock date={date}/>
            break;
        case 'digital':
        default :
            view = <DigitalClock date={date}/>
    }
    return <div>
        {view}
    </div>
}

