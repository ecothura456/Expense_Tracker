import IncomeExpenseChart from "../components/IncomeExpenseChart";
import CategoryChart from "../components/CategoryChart";
import { useEffect, useState } from "react";
import { getAllTransactions } from "../services/transactionService";

export default function Reports() {
  const [transactions, setTransactions] = useState([]);

  const loadTransactions = async () => {
  try {
    const response = await getAllTransactions();
    setTransactions(response.data);
  } catch (error) {
    console.error("Failed to load transactions:", error);
  }
};

useEffect(() => {
  loadTransactions();
}, []);

const totalIncome = transactions
  .filter((transaction) => transaction.type === "Income")
  .reduce(
    (total, transaction) =>
      total + Number(transaction.amount),
    0
  );

const totalExpense = transactions
  .filter((transaction) => transaction.type === "Expense")
  .reduce(
    (total, transaction) =>
      total + Number(transaction.amount),
    0
  );
  return (
    <div>
      <h2 className="fw-bold mb-4">Reports</h2>

      <div className="row g-4">
        <div className="col-12 col-lg-6">
          <IncomeExpenseChart 
          totalIncome={totalIncome}
    totalExpense={totalExpense}/>
        </div>

        <div className="col-12 col-lg-6">
          <CategoryChart />
        </div>
      </div>
    </div>
  );
}