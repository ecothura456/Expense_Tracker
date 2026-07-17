import Sidebar from "./Sidebar";
import Header from "./Header";
import Dashboard from "../pages/Dashboard";

function MainLayout() {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto p-0">
          <Sidebar />
        </div>

        <main className="col p-0 bg-light">
          <Header />

          <div className="p-4">
            <Dashboard />
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainLayout;