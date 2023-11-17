import { configureStore } from "@reduxjs/toolkit";
import Income from "./Income";
import Expense from "./Expense";
import update from "./Update";

export const store = configureStore({
    reducer : {
        myInc : Income,
        myExp : Expense,
        update:update,
    }
})