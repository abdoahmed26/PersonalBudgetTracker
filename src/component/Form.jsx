import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addToIncome, getIncomes, updateIncome } from './rtk/Income';
import { addToExp, getExpense, updateExp } from './rtk/Expense';
import { deleteUpdate } from './rtk/Update';

const Form = () => {
    let array = useSelector(state=>state.update);
    let [amou,setAmount] = useState("");
    let [cat,setCat] = useState("");
    let [date,setDate] = useState("");
    let [desc,setDesc] = useState("");
    let [disCreate,setCreate] = useState("block");
    let [disUpdate,setUpdate] = useState("none");
    let dispatch = useDispatch();
    let {register,formState:{ errors },handleSubmit} = useForm();
    const Submit = (data)=> {
        if(data.category==="income"){
            dispatch(addToIncome({...data,id:Date.now()}));
        }
        else if(data.category==="expense"){
            dispatch(addToExp({...data,id:Date.now()}));
        }
        setAmount("");
        setCat("");
        setDate("");
        setDesc("");
    }
    let [arr,setArr]=useState([]);
    const edit =()=>{
        if(array.length>0){
            if(arr.length<array.length){
                setArr([...array]);
                setAmount(array[0].amount);
                setCat(array[0].category);
                setDate(array[0].date);
                setDesc(array[0].description);
                setCreate("none");
                setUpdate("block");
            }
        }
        
    }
    edit();
    const upEdit =()=>{
        const data = {
            id:array[0].id,
            amount:amou,
            category:cat,
            date:date,
            description:desc,
        }
        data.category==="income"?dispatch(updateIncome(data)):dispatch(updateExp(data));
        dispatch(deleteUpdate());
        setArr([]);
        setCreate("block");
        setUpdate("none");
        setAmount("");
        setCat("");
        setDate("");
        setDesc("");
    }
    useEffect(()=>{
        if(window.localStorage.getItem("income")){
            dispatch(getIncomes(JSON.parse(window.localStorage.getItem("income"))));
        }
        if(window.localStorage.getItem("expense")){
            dispatch(getExpense(JSON.parse(window.localStorage.getItem("expense"))));
        }
        
    },[])
    return (
        <div className='mb-10 py-10 pb-12 bg-[#F5F5F3]'>
            <div className="container">
                <div>
                    <div className='mx-auto max-w-[450px] bg-white rounded-md shadow-lg p-5'>
                        <form method="post" onSubmit={handleSubmit(Submit)}>
                            <div className='mt-1'>
                                <input type="number" placeholder='Amount'
                                {...register("amount",{required:"Please enter an amount",min:1})}
                                value={amou} onChange={(e)=>setAmount(e.target.value)}
                                className='bg-[#F5F5F3] w-[100%] p-1 px-3 outline-none rounded'/>
                                {errors.amount?.type==="required" &&(
                                    <p className='text-red-600 text-sm mt-1 font-titleFont animate-bounce'>
                                        {errors.amount.message}!
                                    </p>
                                )}
                                {errors.amount?.type==="min" &&(
                                    <p className='text-red-600 text-sm mt-1 font-titleFont animate-bounce'>
                                        The value of amount must more than 0!
                                    </p>
                                )}
                            </div>
                            <div className='mt-3'>
                                <select name="category"
                                {...register("category",{required:"Please enter a category"})}
                                value={cat} onChange={(e)=>setCat(e.target.value)}
                                className='bg-[#F5F5F3] w-[100%] p-1 px-3 outline-none rounded text-gray-400'>
                                    <option className='hidden text-slate-400'>
                                        Category
                                    </option>
                                    <option value="income" className='text-black'>Income</option>
                                    <option value="expense" className='text-black'>Expenses</option>
                                </select>
                                {errors.category?.type==="required" &&(
                                    <p className='text-red-600 text-sm mt-1 font-titleFont animate-bounce'>
                                        {errors.category.message}!
                                    </p>
                                )}
                            </div>
                            <div className='mt-3'>
                                <input type="date" placeholder='Date'
                                {...register("date",{required:"Please enter a date"})}
                                value={date} onChange={(e)=>setDate(e.target.value)}
                                className='bg-[#F5F5F3] w-[100%] p-1 px-3 outline-none rounded placeholder:text-gray-400'/>
                                {errors.date?.type==="required" &&(
                                    <p className='text-red-600 text-sm mt-1 font-titleFont animate-bounce'>
                                        {errors.date.message}!
                                    </p>
                                )}
                            </div>
                            <div className='mt-3'>
                                <textarea placeholder='Description'
                                {...register("description",{required:"Please enter a description"})}
                                value={desc} onChange={(e)=>setDesc(e.target.value)}
                                className='bg-[#F5F5F3] w-[100%] p-1 px-3 outline-none rounded placeholder:text-gray-400
                                h-20 resize-none'>
                                </textarea>
                                {errors.description?.type==="required" &&(
                                    <p className='text-red-600 text-sm mt-1 font-titleFont animate-bounce'>
                                        {errors.description.message}!
                                    </p>
                                )}
                            </div>
                            <div className='flex justify-center gap-5 mt-5'>
                                <input type="submit" value="create" 
                                className='text-white bg-slate-950 py-[3px] pb-[5px] px-6 rounded-full cursor-pointer'
                                style={{display:disCreate}}/>
                            </div>
                        </form>
                        <button onClick={()=>upEdit()}
                        className='text-white bg-slate-950 py-[3px] pb-[5px] px-6 rounded-full cursor-pointer mx-auto'
                        style={{display:disUpdate}}>
                            update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;