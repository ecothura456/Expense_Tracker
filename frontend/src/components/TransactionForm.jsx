import { useEffect, useState } from "react";

function TransactionForm({onCreate,selectedTransaction,onUpdate}) {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    type: "Income",
    category: "",
    transactionDate: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("name =", name);
    console.log("value =", value);


    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  useEffect(() =>{
    if (selectedTransaction){
      setFormData(selectedTransaction)
    }
  },[selectedTransaction])

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newTransaction = {
      ...formData,amount: Number(formData.amount)
    };
    if(selectedTransaction){
      await onUpdate(selectedTransaction.id,newTransaction)
    }else{
      await onCreate(newTransaction);
    }
    
    setFormData({
    title: "",
    amount: "",
    type: "Income",
    category: "",
    transactionDate: "",
  });
  }

  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body p-4">
        <h5 className="fw-bold mb-4">Add New Transaction</h5>

        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <label htmlFor="title" className="form-label">
                Title
              </label>

              <input
                type="text"
                id="title"
                name="title"
                className="form-control"
                placeholder="Enter title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-12 col-md-6">
              <label htmlFor="type" className="form-label">
                Type
              </label>

              <select
                id="type"
                name="type"
                className="form-select"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
              </select>
            </div>

            <div className="col-12 col-md-6">
              <label htmlFor="amount" className="form-label">
                Amount
              </label>

              <input
                type="number"
                id="amount"
                name="amount"
                className="form-control"
                placeholder="Enter amount"
                min="0"
                step="0.01"
                value={formData.amount}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-12 col-md-6">
              <label htmlFor="transactionDate" className="form-label">
                Date
              </label>

              <input
                type="date"
                id="transactionDate"
                name="transactionDate"
                className="form-control"
                value={formData.transactionDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-12">
              <label htmlFor="category" className="form-label">
                Category
              </label>

              <select
                id="category"
                name="category"
                className="form-select"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select category</option>
                <option value="Salary">Salary</option>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Shopping">Shopping</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="col-12 mt-4">
              <button type="submit" className="btn btn-primary w-100">
                {selectedTransaction ? "Update Transaction":"Save Transaction"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TransactionForm;