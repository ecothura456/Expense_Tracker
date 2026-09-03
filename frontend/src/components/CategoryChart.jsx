import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function CategoryChart() {
  const data = [
    { category: "Food", amount: 3000 },
    { category: "Transport", amount: 1500 },
    { category: "Shopping", amount: 5000 },
    { category: "Bills", amount: 2500 },
  ];

  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body">
        <h5 className="fw-bold mb-3">Expenses by Category</h5>

        <div style={{ width: "100%", height: "300px" }}>
          <ResponsiveContainer>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="category" />

              <YAxis />

              <Tooltip />

              <Bar dataKey="amount" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default CategoryChart;