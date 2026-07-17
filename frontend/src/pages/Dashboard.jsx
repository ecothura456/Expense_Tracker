import {
    FaWallet,
    FaShoppingCart,
    FaMoneyBillWave,
} from "react-icons/fa";

import SummaryCard from "../components/SummaryCard";
import TransactionForm from "../components/TransactionForm";
import TransactionTable from "../components/TransactionTable";

function Dashboard() {
    const totalIncome = 50000;
    const totalExpense = 20000;
    const balance = totalIncome - totalExpense;

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
                            <TransactionForm />
                        </div>

                        <div className="col-12 col-xl-8">
                            <TransactionTable/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;