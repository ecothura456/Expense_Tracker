import { useEffect, useState } from "react";
import { deleteTransaction, getAllTransactions, updateTransaction } from "../services/transactionService";

export default function Transactions() {
    const [transactions, setTransactions] = useState([]);
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [formData, setFormData] = useState(
        {
            title: "",
            amount: "",
            type: "Income",
            category: "",
            transactionDate: "",
        }
    );
    const [searchTerm, setSearchTerm] = useState("");

    const loadTransactions = async () => {
        try {
            const response = await getAllTransactions();
            setTransactions(response.data);
        } catch (error) {
            console.error("Failed to load transactions:", error);
        }
    };

    const handleDelete = async (id) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this transaction?"
        );
        if (!confirmed) {
            return;
        }
        try {
            await deleteTransaction(id);
            loadTransactions();
        } catch (error) {
            console.error(error);
        }
    };

    const handleEdit = (tr) => {
        setSelectedTransaction(tr);
        setFormData(
            {
                title: tr.title,
                amount: tr.amount,
                type: tr.type,
                category: tr.category,
                transactionDate: tr.transactionDate
            }
        )
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((previousData) => ({
            ...previousData, [name]: value
        }));
    }

    const handleUpdate = async (event) => {
        event.preventDefault();

        if (!selectedTransaction) {
            return;
        }
        const updatedTransaction = {
            ...formData,
            amount: Number(formData.amount)
        };

        try {
            await updateTransaction(selectedTransaction.id, updatedTransaction);
            await loadTransactions();
            setSelectedTransaction(null);
        } catch (error) {
            console.error("Update failed:", error);
        }
    }

    const handleCancel = (event) => {
        event.currentTarget.blur();
        setSelectedTransaction(null);
    };

    useEffect(() => {
        loadTransactions();
    }, []);

    const filteredTransactions = transactions.filter((transaction) =>
        transaction.title.toLowerCase()
            .includes(searchTerm.toLowerCase()));

    return (
        <div>
            <h2 className="fw-bold mb-4">Transactions</h2>

            {/* search */}
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search by title..."
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
            </div>

            <div className="card shadow-sm">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Title</th>
                                    <th>Amount</th>
                                    <th>Type</th>
                                    <th>Category</th>
                                    <th>Date</th>
                                    <th className="text-center">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {filteredTransactions.length === 0 ? (
                                    <tr>
                                        <td colSpan="6" className="text-center text-muted py-4">
                                            No transactions found.
                                        </td>
                                    </tr>
                                ) : (
                                    filteredTransactions.map((transaction,index) => (
                                        <tr key={transaction.id}>
                                            <td>{index + 1}</td>
                                            <td>{transaction.title}</td>

                                            <td>
                                                ¥{Number(transaction.amount).toLocaleString()}
                                            </td>

                                            <td>
                                                <span
                                                    className={
                                                        transaction.type === "Income"
                                                            ? "badge bg-success"
                                                            : "badge bg-danger"
                                                    }
                                                >
                                                    {transaction.type}
                                                </span>
                                            </td>

                                            <td>{transaction.category}</td>

                                            <td>{transaction.transactionDate}</td>
                                            <td className="text-center">

                                                <button
                                                    type="button"
                                                    className="btn btn-warning btn-sm me-2"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#editTransactionModal"
                                                    onClick={() => handleEdit(transaction)}
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => handleDelete(transaction.id)}
                                                >
                                                    Delete
                                                </button>

                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* modal */}
            <div
                className="modal fade"
                id="editTransactionModal"
                tabIndex="-1"
                aria-labelledby="editTransactionModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                id="editTransactionModalLabel"
                            >
                                Edit Transaction
                            </h5>

                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        <form onSubmit={handleUpdate}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label">Title</label>

                                    <input
                                        type="text"
                                        name="title"
                                        className="form-control"
                                        value={formData.title}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Amount</label>

                                    <input
                                        type="number"
                                        name="amount"
                                        className="form-control"
                                        value={formData.amount}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Type</label>

                                    <select
                                        name="type"
                                        className="form-select"
                                        value={formData.type}
                                        onChange={handleChange}
                                    >
                                        <option value="Income">Income</option>
                                        <option value="Expense">Expense</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Category</label>

                                    <input
                                        type="text"
                                        name="category"
                                        className="form-control"
                                        value={formData.category}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Date</label>

                                    <input
                                        type="date"
                                        name="transactionDate"
                                        className="form-control"
                                        value={formData.transactionDate}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                    onClick={handleCancel}
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    data-bs-dismiss="modal"
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    );
}