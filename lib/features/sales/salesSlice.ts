import { createAppSlice } from "@/lib/createAppSlice";

export const salesSlice = createAppSlice({
  name: "sales",
  initialState: {
    sales: [],
  },
  reducers: {
    setSales: (state, action) => {
      state.sales = action.payload;
    },
    sortSalesBy: (state, action) => {
      const { key, order } = action.payload;
      state.sales = [...state.sales].sort((a, b) =>
        order === "asc" ? a[key] - b[key] : b[key] - a[key]
      );
    },
  },
});

export const { setSales, sortSalesBy } = salesSlice.actions;
