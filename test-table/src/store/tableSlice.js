import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  months: [],
  loading: false,
  error: ''
}

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setLoading (state, action) {
      state.loading = action.payload;
    },
    setDataSuccess (state, action) {
      state.data = action.payload;
    },
    setMonthsSuccess (state, action) {
      state.months= action.payload;
    },
  }
})

export default tableSlice.reducer;