import React, {useEffect, useState} from "react";

export type ClockPropsType = {
    mode: 'digital' | 'analog'
}
const get2Digits = (num: number) => num < 10 ? "0" + num : num

export const Clock: React.FC<ClockPropsType> = ({mode}) => {
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
        case 'digital':
            view = <div>
                <span>{get2Digits(date.getHours())}</span>
                :
                <span>{get2Digits(date.getMinutes())}</span>
                :
                <span> {get2Digits(date.getSeconds())}</span>
            </div>
            break;
        case 'analog':
            view = <span>Analog</span>
    }
    return <div>
        {mode}
    </div>
}
