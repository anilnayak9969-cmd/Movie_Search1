import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar px-4">

      <Link className="navbar-brand fw-bold fs-4" to="/">
        🎬 MovieHub
      </Link>

      <div className="ms-auto">
        
      </div>

    </nav>
  );
}

export default Navbar;