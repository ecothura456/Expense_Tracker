import { FaEdit, FaTrash } from "react-icons/fa";

function TransactionTable() {
  const transactions = [
    {
      id: 1,
      title: "Salary",
      amount: 50000,
      type: "Income",
      category: "Salary",
      transactionDate: "2026-07-14",
    },
    {
      id: 2,
      title: "Lunch",
      amount: 1200,
      type: "Expense",
      category: "Food",
      transactionDate: "2026-07-14",
    },
    {
      id: 3,
      title: "Train",
      amount: 500,
      type: "Expense",
      category: "Transport",
      transactionDate: "2026-07-13",
    },
  ];

  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body p-4">
        <h5 className="fw-bold mb-4">Recent Transactions</h5>

        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>Title</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Category</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.title}</td>

                  <td>¥ {transaction.amount.toLocaleString()}</td>

                  <td>
                    <span
                      className={`badge ${
                        transaction.type === "Income"
                          ? "text-bg-success"
                          : "text-bg-danger"
                      }`}
                    >
                      {transaction.type}
                    </span>
                  </td>

                  <td>{transaction.category}</td>

                  <td>{transaction.transactionDate}</td>

                  <td>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-primary me-2"
                    >
                      <FaEdit />
                    </button>

                    <button
                      type="button"
                      className="btn btn-sm btn-outline-danger"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TransactionTable;