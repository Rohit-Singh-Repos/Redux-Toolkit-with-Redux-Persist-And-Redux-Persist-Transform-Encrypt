import { createSlice } from "@reduxjs/toolkit";

const persistedLocalStorageReducer = createSlice({
    name:"persistedLocalStorageReducer",
    initialState:{
        localStorageCounterState:0
    },
    reducers:{
        changeLocalStorageCounter:(state,action) => {
            state.localStorageCounterState = action.payload
        }
    }
})

export const { changeLocalStorageCounter } = persistedLocalStorageReducer.actions
export default persistedLocalStorageReducer.reducer

