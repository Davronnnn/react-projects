import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
	const [title, setTitle] = useState('');
	const [amount, setAmount] = useState('');
	const [date, setDate] = useState('');
	const [isValid, setIsValid] = useState(true);

	const titleChangeHandler = (event) => {
		setTitle(event.target.value);
	};
	const amountChangeHandler = (e) => {
		setAmount(e.target.value);
	};
	const dateChangeHandler = (e) => {
		setDate(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		if (
			title.trim().length !== 0 &&
			amount.trim().length !== 0 &&
			date.trim().length !== 0
		) {
			props.onSaveExpense({
				title,
				amount,
				date: new Date(date),
			});
			props.onCancelExpense();
			setTitle('');
			setAmount('');
			setDate('');
		} else {
			setIsValid(false);
		}
	};

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						type='text'
						value={title}
						onChange={(e) => titleChangeHandler(e)}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						type='number'
						min='0.01'
						step='0.01'
						value={amount}
						onChange={(e) => amountChangeHandler(e)}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						type='date'
						min='2019-01-01'
						max='2022-12-31'
						value={date}
						onChange={(e) => dateChangeHandler(e)}
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add Expense</button>
				<button onClick={props.onCancelExpense}>Cancel</button>
				{!isValid && (
					<h3 style={{ color: 'red', textAlign: 'center' }}>
						Wrong inputs
					</h3>
				)}
			</div>
		</form>
	);
};

export default ExpenseForm;
