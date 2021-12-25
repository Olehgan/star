import {Clock} from "./Clock";

export default {
    title: 'Clock',
    component: Clock
}

export const baseExampleDigital = () => {
    return (
        <div>
            <Clock mode={'digital'}/>
        </div>
    )
};
export const baseExampleAnalog = () => {
    return (
        <div>
            <Clock mode={'analog'}/>
        </div>
    )
}