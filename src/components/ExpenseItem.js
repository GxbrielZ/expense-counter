import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2023, 2, 27);
    const expenseTitle = 'Birthday Gift';
    const ExpenseAmount = 99.25;

    return (
        <div className='expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${ExpenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;