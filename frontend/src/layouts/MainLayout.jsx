import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function MainLayout() {
  return (
    <div className="container-fluid p-0">
      <div className="row g-0">

        {/* Sidebar */}
        <div className="col-md-2">
          <Sidebar />
        </div>

        {/* Right side */}
        <div className="col-md-10">

          <main className="p-4 bg-light min-vh-100">
            <Outlet />
          </main>
        </div>

      </div>
    </div>
  );
}