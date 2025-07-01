import { createSlice } from "@reduxjs/toolkit";

export const expenseslice = createSlice({
  name: "expenseslice",
  initialState: {
    expenseList: [
      {
        name: "Apple",
        price: 21,
      },
    ],
  },

  reducers: {
    addExpenseAction: (currentSlice, action) => {
      currentSlice.expenseList.push(action.payload);
    }, // the actions parameter is a dispatched object, which consists of type and payload. payload is the object you pass during the dispatch with the recuder function.
    //

    //

    //
  },
});

export const { addExpenseAction } = expenseslice.actions;
