import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function IncomeExpenseChart({ totalIncome, totalExpense }) {
  const data = [
    { name: "Income", value: totalIncome },
    { name: "Expense", value: totalExpense },
  ];

  const COLORS = ["#198754", "#dc3545"];

  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body">
        <h5 className="fw-bold mb-3">Income vs Expense</h5>

        <div style={{ width: "100%", height: "300px" }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={90}
                label
              >
                {data.map((item, index) => (
                  <Cell
                    key={item.name}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default IncomeExpenseChart;