const { createSlice } = require("@reduxjs/toolkit")

export const expenseSlice = createSlice({
    initialState : [],
    name : "incomeSlice",
    reducers : {
        addToExp : (state,action)=>{
            state.push(action.payload);
            window.localStorage.expense = JSON.stringify(state);
        },
        deleteFromExp : (state,action)=>{
            state = state.filter((ele)=>ele.id!==action.payload.id);
            window.localStorage.expense = JSON.stringify(state);
            return state;
        },
        updateExp:(state,action)=>{
            state = state.map((ele)=>ele.id===action.payload.id?ele=action.payload:ele);
            window.localStorage.expense= JSON.stringify(state);
            return state;
        },
        deleteAllExp : ()=>{
            window.localStorage.expense = [];
            return [];
        },
        getExpense :(state,action)=>{
            let expense = [...action.payload];
            if(state.length < expense.length){
                state.push(...expense);
            }
        }
    }
})
export const {addToExp,deleteFromExp,updateExp,deleteAllExp,getExpense} = expenseSlice.actions;
export default expenseSlice.reducer;