import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className='expense-item'>
            <div>February 27th 2023</div>
            <div className='expense-item__description'>
                <h2>Birthday Gift</h2>
                <div className='expense-item__price'>$99.25</div>
            </div>
        </div>
    );
}

export default ExpenseItem;