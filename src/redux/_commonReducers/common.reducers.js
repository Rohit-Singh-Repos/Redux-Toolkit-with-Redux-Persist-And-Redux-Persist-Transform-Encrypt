import { createSlice } from "@reduxjs/toolkit";
import { API_STATUSES } from "../_helpers/statuses";

const commonReducers = createSlice({
  name: "commonReducer",
  initialState: {
    allProductsDataStatus: API_STATUSES.REQUEST,
    allProductsData: [],
  },
  reducers: {
    getAllProductsDataAction: (state, action) => {
      state.allProductsData = action.payload;
    },
    getAllProductsStatusAction: (state, action) => {
      state.allProductsDataStatus = action.payload;
    },
    // resetAnyStateAction:(state) => {
    // Mention state that you wants to empty
    // }
  },
});

export const {
  getAllProductsDataAction,
  getAllProductsStatusAction,
} = commonReducers.actions
export default commonReducers.reducer;
