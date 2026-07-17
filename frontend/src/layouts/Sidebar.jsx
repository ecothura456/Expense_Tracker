import "./Sidebar.css";
import {
  FaHome,
  FaListAlt,
  FaChartPie,
  FaWallet,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar bg-dark text-white d-flex flex-column shadow">
      {/* Logo */}
      <div className="sidebar-logo d-flex align-items-center">
        <FaWallet className="logo-icon text-warning" />
        <span className="ms-2 fw-bold fs-4">Expense Tracker</span>
      </div>

      {/* Navigation */}
      <ul className="nav flex-column mt-4">

        <li className="nav-item">
          <a href="#" className="nav-link active">
            <FaHome className="me-2" />
            Dashboard
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <FaListAlt className="me-2" />
            Transactions
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <FaChartPie className="me-2" />
            Reports
          </a>
        </li>

      </ul>

      {/* Footer */}
      <div className="sidebar-footer mt-auto text-center">
        <small>Expense Tracker v1.0</small>
      </div>
    </aside>
  );
}

export default Sidebar;