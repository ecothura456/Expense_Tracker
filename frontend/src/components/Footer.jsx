import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto py-3">
      <div className="container">
        <div className="row align-items-center">

          {/* Left */}
          <div className="col-md-6 text-center text-md-start">
            <h6 className="mb-1">Expense Tracker</h6>
            <small>Manage your income and expenses easily.</small>
          </div>

          {/* Right */}
          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <a href="#" className="text-white me-3">
              <FaGithub size={20} />
            </a>

            <a href="#" className="text-white me-3">
              <FaLinkedin size={20} />
            </a>

            <a href="#" className="text-white">
              <FaEnvelope size={20} />
            </a>
          </div>

        </div>

        <hr className="border-secondary my-3" />

        <div className="text-center">
          <small>
            © {new Date().getFullYear()} Expense Tracker | Developed by Eco Thura
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;