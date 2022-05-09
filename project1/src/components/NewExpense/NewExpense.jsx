import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
	const [isNewExpense, setIsNewExpense] = useState(false);
	const onSaveExpense = (expense) => {
		const expenseData = {
			...expense,
			id: Date.now(),
		};

		props.onAddExpense(expenseData);
	};

	const Addexpense = () => {
		setIsNewExpense(true);
	};
	const cancelExpense = () => {
		setIsNewExpense(false);
	};
	return (
		<div className='new-expense'>
			{isNewExpense ? (
				<ExpenseForm
					onSaveExpense={onSaveExpense}
					onCancelExpense={cancelExpense}
				/>
			) : (
				<button onClick={Addexpense}>New Expense</button>
			)}
		</div>
	);
};

export default NewExpense;
