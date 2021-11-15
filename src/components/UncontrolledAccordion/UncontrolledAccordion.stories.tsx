import React from 'react';
import {action} from '@storybook/addon-actions';
import UncontrolledAccordion from "./UncontrolledAccordion";


export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,

};

const callback = action("accordion mode change event fired");
// const OnClickCallback = action("some item was clicked");

export const MenuCollapsedMode = () => <UncontrolledAccordion titleValue={"Menu"}/>;

export const ModeChanging = () => {
    return <UncontrolledAccordion titleValue={"Users"}/>;


};