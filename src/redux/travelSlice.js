import { createSlice } from "@reduxjs/toolkit";
import { initialTrips } from "./travelData";

const initialState = {
  items: initialTrips,

  filters: {
    search: "",
    category: "all",
    status: "all",
    sortPrice: "default",
    sortRating: "default",
  },
};

const travelSlice = createSlice({
  name: "travel",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.filters.search = action.payload;
    },
    setCategory(state, action) {
      state.filters.category = action.payload;
    },
    setStatus(state, action) {
      state.filters.status = action.payload;
    },
    setSortPrice(state, action) {
      state.filters.sortPrice = action.payload;
    },
    setSortRating(state, action) {
      state.filters.sortRating = action.payload;
    },
    clearFilters(state) {
      state.filters = initialState.filters;
    },
    updateTripStatus(state, action) {
      const { id, status } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.status = status;
      }
    },
  },
});

export const {
  setSearch,
  setCategory,
  setStatus,
  setSortPrice,
  setSortRating,
  clearFilters,
  updateTripStatus,
} = travelSlice.actions;

export default travelSlice.reducer;
