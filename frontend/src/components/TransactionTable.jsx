import { FaEdit, FaTrash } from "react-icons/fa";

function TransactionTable({transactions,onEdit}) {
  const recentTransactions = [...transactions]
  .sort((a,b) => b.id - a.id)
  .slice(0,5);
  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body p-4">
        <h5 className="fw-bold mb-4">Recent Transactions</h5>

        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Category</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {recentTransactions.length === 0 ?(
                <tr>
                  <td colSpan="6" className="text-center py-4">
                      No transactions found.
                  </td>
                </tr>
              ) :(recentTransactions.map((transaction,index) => (
                <tr key={transaction.id}>
                  <td>{index + 1}</td>
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
                      onClick={() => onEdit(transaction)}
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
              )))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TransactionTable;