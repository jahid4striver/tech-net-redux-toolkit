import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface CounterState{
    count:number,
}

const initialState:CounterState = {
    count: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count = state.count + 1;
        },
        decrement: (state) => {
            state.count = state.count - 1;
        },
        icrementByNumber: (state,actions:PayloadAction<number>) => {
            state.count = state.count + actions.payload;
        },
    },
});

export const { increment, decrement,icrementByNumber } = counterSlice.actions;
export default counterSlice.reducer;
