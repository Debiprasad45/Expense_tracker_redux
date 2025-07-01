import { configureStore } from "@reduxjs/toolkit";
import { expenseslice } from "./expense/expenseSlice";

const store = configureStore({
  reducer: {
    EXPENSE: expenseslice.reducer, //asking espenseSlice to give the details through reducer function.
  },
});

export { store };
