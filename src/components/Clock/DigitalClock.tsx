import React from "react";
import {ClockPropsType} from "./Clock";

const get2Digits = (num: number) => num < 10 ? "0" + num : num
export const DigitalClock: React.FC<ClockPropsType> = ({date}) => {
    return <>
        <span>{get2Digits(date.getHours())}</span>
        :
        <span>{get2Digits(date.getMinutes())}</span>
        :
        <span> {get2Digits(date.getSeconds())}</span>
    </>
}
