import { FaCalendarAlt } from "react-icons/fa";
import "./Header.css";

function Header() {
  const today = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="dashboard-header bg-white border-bottom">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="header-title mb-0">Dashboard</h2>

        <div className="d-flex align-items-center text-secondary">
          <FaCalendarAlt className="me-2" />
          <span>{today}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;