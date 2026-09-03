import {
    FaWallet,
    FaShoppingCart,
    FaMoneyBillWave,
} from "react-icons/fa";

import SummaryCard from "../components/SummaryCard";
import TransactionForm from "../components/TransactionForm";
import TransactionTable from "../components/TransactionTable";
import IncomeExpenseChart from "../components/IncomeExpenseChart";
import CategoryChart from "../components/CategoryChart";
import { getAllTransactions,createTransaction, updateTransaction } from "../services/transactionService";
import { useEffect,useState } from "react";
function Dashboard() {

    const [transactions,setTransactions] = useState([]);
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const loadTransactions = async () => {
        try{
            const response = await getAllTransactions();
            setTransactions(response.data);
        }catch(error){
            console.error("failed to load transactions", error);
        }
    };

    const handleEdit = (transaction) => {
        console.log(transaction)
        setSelectedTransaction(transaction);
    };

    const handleUpdate = async(id,transaction) =>{
       try{
        await updateTransaction(id,transaction);
        await loadTransactions();
        setSelectedTransaction(null);
       }catch(error){
        console.error("Failed to update transaction:", error);
    }
    }

    useEffect(() => {
        loadTransactions();
    },[]);

    const handleCreate = async (transaction) =>{
        try{
            await createTransaction(transaction);
            await loadTransactions();

        }catch (error){
            console.error("Failed to create transaction:", error);
        }
    }
    const totalIncome = transactions
    .filter((transaction) => transaction.type ==="Income")
    .reduce((total,transaction) => total + Number(transaction.amount),0);

    const totalExpense = transactions
    .filter((transaction) => transaction.type ==="Expense")
    .reduce((total,transaction)=> total + Number(transaction.amount),0);

    const balance = totalIncome-totalExpense



    return (
        <div className="container-fluid">
            <div className="row g-4">
                <div className="col-12 col-md-6 col-xl-4">
                    <SummaryCard
                        title="Total Income"
                        amount={totalIncome}
                        icon={<FaMoneyBillWave />}
                        textColor="text-success"
                        iconBackground="bg-success-subtle"
                    />
                </div>

                <div className="col-12 col-md-6 col-xl-4">
                    <SummaryCard
                        title="Total Expense"
                        amount={totalExpense}
                        icon={<FaShoppingCart />}
                        textColor="text-danger"
                        iconBackground="bg-danger-subtle"
                    />
                </div>

                <div className="col-12 col-md-6 col-xl-4">
                    <SummaryCard
                        title="Balance"
                        amount={balance}
                        icon={<FaWallet />}
                        textColor="text-primary"
                        iconBackground="bg-primary-subtle"
                    />
                </div>

                <div className="container-fluid">
                    <div className="row g-4">
                        {/* Three summary cards */}
                    </div>

                    <div className="row g-4 mt-1">
                        <div className="col-12 col-xl-4">
                            <TransactionForm
                            onCreate={handleCreate}
                            onUpdate={handleUpdate}
                            selectedTransaction={selectedTransaction}/>
                        </div>

                        <div className="col-12 col-xl-8">
                            <TransactionTable transactions={transactions}
                            onEdit = {handleEdit} />
                        </div>
                    </div>
                    {/* pipe chart */}
                    {/* <div className="row g-4 mt-1">
                        <div className="col-lg-6">
                            <IncomeExpenseChart />
                        </div>

                        <div className="col-lg-6">
                            <CategoryChart />
                        </div>
                    </div> */}

                </div>
            </div>

        </div>
    );
}

export default Dashboard;