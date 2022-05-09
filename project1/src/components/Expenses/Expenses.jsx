import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../Ui/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';

import './Expenses.css';

const Expenses = ({ data }) => {
	const [year, setYear] = React.useState('2021');

	const filterHandler = (e) => {
		setYear(e);
	};

	const filteredData = data.filter(
		(item) => item.date.getFullYear().toString() === year
	);
	return (
		<div>
			<ExpensesChart expenses={filteredData} />
			<Card className='expenses'>
				<ExpensesFilter
					selectedYear={year}
					onChangeFilter={filterHandler}
				/>

				{filteredData.length ? (
					filteredData.map((item) => {
						return (
							<ExpenseItem
								key={item.id}
								title={item.title}
								amount={item.amount}
								date={item.date}
							/>
						);
					})
				) : (
					<h3 style={{ color: '#fff', textAlign: 'center' }}>
						There is no item to this year.
					</h3>
				)}
			</Card>
		</div>
	);
};

export default Expenses;
