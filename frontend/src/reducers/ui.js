import { createSlice } from "@reduxjs/toolkit";

 const ui = createSlice({
  name: "ui",
  initialState: {
    loading: false,
  },
  reducers: {
    setLoading: (store, action) => {
      store.loading = action.payload;
    },
  },
});
export default ui;