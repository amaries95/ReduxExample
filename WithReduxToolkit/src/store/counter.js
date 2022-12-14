import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {counter: 0, showCounter: true};

const counterSlice = createSlice(
    {name: "counterSlice",
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increaseBy(state, action) {
            state.counter = state.counter + action.payload;
        },
        reset(state) {
            state.counter = 0;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    }}
);

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;