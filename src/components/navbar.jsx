import { useNavigate } from "react-router-dom";
import "./components.css";

function Navbar() {
  const navigate = useNavigate(); 

  return (
    <div className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        <img src="" alt="logo" />
        <p>Backstage</p>
      </div>
      <nav className="nav-links">
        <a href="">Home</a>
        <a href="">Marketplace</a>
        <a href="">Dashboard</a>
      </nav>
      <button className="connect-btn">
          Connect wallet
        </button>
    </div>
  );
}

export default Navbar;
