import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      className=" text-white p-3"
      style={{ minHeight: "100vh", width: "250px" ,backgroundColor:"#1E293B"}}
    >
      <h4 className="mb-4">My Dashboard</h4>

      <ul className="nav flex-column">

        <li className="nav-item mb-2">
          <NavLink className="nav-link text-white" to="/dashboard">
            Dashboard
          </NavLink>
        </li>

        <li className="nav-item mb-2">
          <NavLink
            className="nav-link text-white"
            to="/dashboard/transactions"
          >
            Transactions
          </NavLink>
        </li>

        <li className="nav-item mb-2">
          <NavLink
            className="nav-link text-white"
            to="/dashboard/reports"
          >
            Reports
          </NavLink>
        </li>

        <li className="nav-item mt-4">
          <Link className="nav-link text-danger" to="/">
            Logout
          </Link>
        </li>

      </ul>
    </div>
  );
}