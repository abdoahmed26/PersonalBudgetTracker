import React from 'react';
import { useSelector } from 'react-redux';

const Total = () => {
    let income = useSelector(state=>state.myInc);
    let expense = useSelector(state=>state.myExp);
    const totalIncome = income.reduce((acc,ele)=>{
        return acc + +ele.amount;
    },0)
    const totalExpense = expense.reduce((acc,ele)=>{
        return acc + +ele.amount;
    },0)
    return (
        <div className='mb-10'>
            <div className="container">
                <div className='mt-8'>
                    <div className='max-w-[400px]'>
                        <h2 className='text-black font-bold text-2xl mb-3'>
                            Total
                        </h2>
                        <div className=' divide-y divide-gray-400 border border-gray-400'>
                            <div className='flex justify-between p-3 py-1'>
                                <p className='font-semibold text-lg'>Incomes</p>
                                <p className='font-semibold text-lg'>${totalIncome}</p>
                            </div>
                            <div className='flex justify-between p-3 py-1'>
                                <p className='font-semibold text-lg'>Expenses</p>
                                <p className='font-semibold text-lg'>${totalExpense}</p>
                            </div>
                            <div className='flex justify-between font-bodyFont p-3 py-1'>
                                <p className='font-semibold text-lg'>Balance</p>
                                <p className='font-bold text-lg'>${totalIncome-totalExpense}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Total;