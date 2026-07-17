function SummaryCard({ title, amount, icon, textColor, iconBackground }) {
  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body d-flex justify-content-between align-items-center p-4">
        <div>
          <p className={`mb-2 fw-semibold ${textColor}`}>{title}</p>

          <h3 className={`mb-2 fw-bold ${textColor}`}>
            ¥ {amount.toLocaleString()}
          </h3>

          <span className="text-secondary">This Month</span>
        </div>

        <div
          className={`rounded-circle d-flex justify-content-center align-items-center ${iconBackground}`}
          style={{ width: "64px", height: "64px" }}
        >
          <span className={`fs-3 ${textColor}`}>{icon}</span>
        </div>
      </div>
    </div>
  );
}

export default SummaryCard;