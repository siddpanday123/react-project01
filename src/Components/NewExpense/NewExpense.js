import react from "react";

import ExpenseForm from "./ExpenseForm";

import './NewExpense.css'

const NewExpense = (props) =>{

    const saveExpenseDataHandler = (enteredeExpenseData) =>{
        const expenseDate = {
            ...enteredeExpenseData,
            id: Math.random().toString( )
        }

        props.onAddExpense(expenseDate);


        console.log(expenseDate);
    };


    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler }/>
        </div>

    );

}

export default NewExpense;