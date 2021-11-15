import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";
import {callbackify} from "util";


test('reducer should change value to opposite value', () => {
// data
    const state : StateType = {
        collapsed: false
    }
// action
    const  newState= reducer(state, { type:TOGGLE_COLLAPSED})
// expect
    expect( newState.collapsed).toBe(true)
})



test('value should be true', () => {
// data
    const state : StateType = {
        collapsed: true
    }
// action
    const  newState= reducer(state, { type:TOGGLE_COLLAPSED})
// expect
    expect( newState.collapsed).toBe(false)
})


test('reducer should throw error because action type is incorrect', () => {
// data
    const state : StateType = {
        collapsed: true
    }
// expect
    expect(()=>{
        reducer(state, { type:"FAKE"})
    }).toBeTruthy();
})
