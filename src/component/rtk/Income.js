const { createSlice } = require("@reduxjs/toolkit")

export const incomeSlice = createSlice({
    initialState : [],
    name : "incomeSlice",
    reducers : {
        addToIncome : (state,action)=>{
            state.push(action.payload);
            console.log(action.payload);
            window.localStorage.income = JSON.stringify(state);
        },
        deleteFromIncome : (state,action)=>{
            state = state.filter((ele)=>ele.id!==action.payload.id);
            window.localStorage.income = JSON.stringify(state);
            return state;
        },
        updateIncome:(state,action)=>{
            state = state.map((ele)=>ele.id===action.payload.id?ele=action.payload:ele);
            window.localStorage.income = JSON.stringify(state);
            return state;
        },
        deleteAllIncome : ()=>{
            window.localStorage.income = [];
            return [];
        },
        getIncomes :(state,action)=>{
            let incomes = [...action.payload];
            if(state.length < incomes.length){
                state.push(...incomes);
            }
        }
    }
})
export const {addToIncome,deleteFromIncome,updateIncome,deleteAllIncome,getIncomes} = incomeSlice.actions;
export default incomeSlice.reducer;