import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      

      {/* Hero Section */}
      <section className="container py-5">
        <div className="row align-items-center min-vh-75">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold">
              Take Control of Your Money
            </h1>

            <p className="lead text-secondary mt-3">
              Track your income and expenses, understand your spending,
              and manage your money more easily.
            </p>

            <div className="d-flex gap-3 mt-4">
              <Link to="/dashboard" className="btn btn-primary btn-lg">
                Go to Dashboard
              </Link>

              <a href="#features" className="btn btn-outline-dark btn-lg">
                Learn More
              </a>
            </div>
          </div>

          <div className="col-lg-6 text-center mt-5 mt-lg-0">
            <div className="p-5 bg-light rounded-4 shadow-sm">
              <h2 className="fw-bold">Expense Summary</h2>

              <div className="mt-4">
                <p className="mb-1">Income</p>
                <h3 className="text-success">$5,000</h3>
              </div>

              <div className="mt-4">
                <p className="mb-1">Expenses</p>
                <h3 className="text-danger">$2,300</h3>
              </div>

              <div className="mt-4">
                <p className="mb-1">Balance</p>
                <h3 className="text-primary">$2,700</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}