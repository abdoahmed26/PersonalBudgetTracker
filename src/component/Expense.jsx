import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import empty from './images/emptyCart.png';
import { deleteAllExp, deleteFromExp } from './rtk/Expense';
import { updateIn } from './rtk/Update';

const Expense = () => {
    let expense = useSelector(state=>state.myExp);
    let dispatch = useDispatch();
    return (
        <div className='mb-10'>
            <div className="container">
                <h1 className='font-bold text-3xl mb-3'>Expenses</h1>
                <div>
                    {
                        expense.length > 0 ? 
                        <div>
                            <div className='overflow-y-auto scr'>
                                <table className='border-collapse border w-[590px] sm:w-full'>
                                    <thead>
                                        <tr>
                                            <th className='border'>#</th>
                                            <th className='border'>Amount</th>
                                            <th className='border'>Category</th>
                                            <th className='border'>Date</th>
                                            <th className='border'>Description</th>
                                            <th className='border'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            expense.map((ele,index)=>{
                                                return (
                                                    <tr key={ele.id} className='text-center font-bold 
                                                    odd:bg-[#F5F5F3] even:bg-white'>
                                                        <td className='border px-1'>{index+1}</td>
                                                        <td className='border'>{ele.amount}</td>
                                                        <td className='border'>{ele.category}</td>
                                                        <td className='border'>{ele.date}</td>
                                                        <td className='border'>{ele.description}</td>
                                                        <td className='border'>
                                                            <div className='flex gap-3 py-2 justify-center'>
                                                                <Link onClick={()=>dispatch(updateIn(ele))}
                                                                className='bg-blue-500 text-white p-2 rounded'>
                                                                    Update
                                                                </Link>
                                                                <Link onClick={()=>dispatch(deleteFromExp(ele))}
                                                                className='bg-red-500 text-white p-2 rounded'>
                                                                    Delete
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className='mt-6'>
                                <Link onClick={()=>dispatch(deleteAllExp())}
                                className='bg-red-500 text-white p-2 px-4 rounded uppercase font-bodyFont font-bold'>
                                    Delete All
                                </Link>
                            </div>
                        </div>
                        :<div className='my-5'>
                            <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
                                <div>
                                    <img src={empty} alt="" className='md:w-[550px] lg:w-auto'/>
                                </div>
                                <div className="max-w-[500px] p-4 py-8 bg-white flex gap-2 flex-col items-center rounded-md 
                                shadow-lg">
                                    <h2 className='text-black font-bold text-xl uppercase'>
                                        YOUR Expense FEELS LONELY.
                                    </h2>
                                    <p className='text-center text-sm font-bodyFont sm:px-10'>
                                        Your Expenses lives to serve. Give it purpose - fill it with Expenses .
                                    </p>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Expense;