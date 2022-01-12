import React,{ useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');




    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value); 
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value); 
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value); 
    };

    const submitHandler = (event) => { 
        event.preventDefault();

        const expenseDate = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseDate);

        console.log(expenseDate);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
  
    return (
        <form onSubmit={ submitHandler }>
            
            <div className="new-expense_controls">
                <div className="new-expense_control">
                    <lebel>Title</lebel>
                    <input type="text" value={enteredTitle} onChange={ titleChangeHandler }/>
                </div>
                <div className="new-expense_control">
                    <lebel>Amount</lebel>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={ amountChangeHandler } />
                </div>
                <div className="new-expense_control">
                    <lebel>Date</lebel>
                    <input type="date" value={enteredDate} onChange={ dateChangeHandler } />
                </div>
               
            </div>


            <div className="new-expense_action">
                <button type="submit">Add Expense</button>
            </div>

        </form>
    );
        
    }
    
    export default ExpenseForm; 