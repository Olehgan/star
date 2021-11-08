import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import Accordion from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion,

};

const callback = action("accordion mode change event fired");
const OnClickCallback = action("some item was clicked");

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} items={[]}
                                                  onClick={OnClickCallback}/>;
export const UsersUncollapsedMode = () => <Accordion titleValue={"User"} collapsed={false} onChange={callback}
                                                     items={[
                                                         {title: "Oleg", value: 1},
                                                         {title: "Ily", value: 2},
                                                         {title: "Pasha", value: 3}
                                                     ]}
                                                     onClick={OnClickCallback}/>;


export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion
        titleValue={"Users"}
        collapsed={value}
        onChange={() => setValue(!value)}
        items={[
            {title: "Oleg", value: 1},
            {title: "Ily", value: 2},
            {title: "Pasha", value: 3}]}
        onClick={OnClickCallback}
    />;


};