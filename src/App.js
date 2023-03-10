import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Potatoes',
      amount: 5.99,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'Car',
      amount: 2499.50,
      date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Pizza',
      amount: 9.76,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'Fridge',
      amount: 260,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <NewExpense></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
