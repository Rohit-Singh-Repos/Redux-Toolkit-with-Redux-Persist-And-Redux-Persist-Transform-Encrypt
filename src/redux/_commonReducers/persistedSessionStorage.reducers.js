import { createSlice } from "@reduxjs/toolkit";

const persistedSessionStorageReducer = createSlice({
    name:"persistedSessionStorageReducer",
    initialState:{
        sessionStorageCounterState:0
    },
    reducers:{
        changeSessionStorageCounter:(state,action) => {
            state.sessionStorageCounterState = action.payload
        }
    }
})

export const { changeSessionStorageCounter } = persistedSessionStorageReducer.actions
export default persistedSessionStorageReducer.reducer

